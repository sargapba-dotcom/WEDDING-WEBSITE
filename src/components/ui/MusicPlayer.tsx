import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showUrl, setShowUrl] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.preload = 'auto';
    audioRef.current.src = '/music.mp3';

    const onError = async () => {
      // try to fetch to get a clearer error
      try {
        const res = await fetch('/music.mp3', { method: 'HEAD' });
        if (!res.ok) {
          setError(`Failed to load /music.mp3 — ${res.status} ${res.statusText}`);
        } else {
          setError('Audio file present but browser reported a decoding or format error.');
        }
      } catch (e: any) {
        setError(`Failed to fetch /music.mp3 — ${e?.message ?? e}`);
      }
    };

    const onCanPlay = () => setError(null);

    audioRef.current.addEventListener('error', onError);
    audioRef.current.addEventListener('canplay', onCanPlay);

    // try auto-resume if user previously enabled
    const saved = localStorage.getItem('wedding:music:playing');
    if (saved === '1') {
      void audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }

    return () => {
      audioRef.current?.pause();
      if (audioRef.current) {
        audioRef.current.removeEventListener('error', onError);
        audioRef.current.removeEventListener('canplay', onCanPlay);
      }
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    function handler() {
      if (!audioRef.current) return;
      void audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    window.addEventListener('wedding:play-music', handler as EventListener);
    return () => window.removeEventListener('wedding:play-music', handler as EventListener);
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem('wedding:music:playing', '0');
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        localStorage.setItem('wedding:music:playing', '1');
      } catch (e) {
        setError('Playback blocked by browser or invalid audio source.');
      }
    }
  };

  const loadUrl = async () => {
    if (!url) return;
    if (!audioRef.current) return;
    setError(null);
    audioRef.current.src = url;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      localStorage.setItem('wedding:music:playing', '1');
      setShowUrl(false);
    } catch (e: any) {
      setError(`Failed to play URL: ${e?.message ?? e}`);
    }
  };

  return (
    <>
      {error && (
        <div className="fixed bottom-24 right-6 z-50 max-w-xs rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          <div className="font-medium">Music load error</div>
          <div className="mt-1">{error}</div>
          <div className="mt-2 flex gap-2">
            <button onClick={() => setShowUrl((s) => !s)} className="underline">
              Use external URL
            </button>
            <a href="/music.mp3" target="_blank" rel="noreferrer" className="underline">
              Open /music.mp3
            </a>
          </div>
        </div>
      )}

      {showUrl && (
        <div className="fixed bottom-32 right-6 z-50 w-80 rounded-md bg-white border p-2 shadow">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/song.mp3"
            className="w-full rounded px-2 py-1 border"
          />
          <div className="mt-2 flex justify-end">
            <button onClick={loadUrl} className="rounded bg-primary px-3 py-1 text-primary-foreground">
              Load & Play
            </button>
          </div>
        </div>
      )}

      <button
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M5 3v18l15-9z" />
          </svg>
        )}
      </button>
    </>
  );
}
