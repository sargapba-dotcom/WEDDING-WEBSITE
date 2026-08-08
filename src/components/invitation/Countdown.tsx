import { useEffect, useState } from 'react';

const TARGET = new Date(2027, 9, 2, 17, 30, 0).getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    Days: Math.floor(d / 86400000),
    Hours: Math.floor((d / 3600000) % 24),
    Minutes: Math.floor((d / 60000) % 60),
    Seconds: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState(diff());

  useEffect(() => {
    setTime(diff());
    const id = window.setInterval(() => setTime(diff()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {Object.entries(time).map(([label, value]) => (
        <div
          key={label}
          className="card-soft rounded-3xl px-4 py-5 text-center animate-fade-up transition-transform duration-500 hover:-translate-y-1"
        >
          <div className="text-3xl font-light tabular-nums text-primary sm:text-4xl">
            {String(value).padStart(2, '0')}
          </div>
          <div className="mt-1 text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
