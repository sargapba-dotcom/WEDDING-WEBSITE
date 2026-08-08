import { useEffect, useState } from 'react';

const TARGET = new Date('2026-08-08T17:30:00+05:30').getTime();

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
  const [time, setTime] = useState(diff);

  useEffect(() => {
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {Object.entries(time).map(([label, value]) => (
        <div key={label} className="card-soft rounded-3xl px-4 py-5 text-center">
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
