import type { ReactNode } from 'react';

export function Letters({ text, delay = 0, step = 40, className = '' }: { text: string; delay?: number; step?: number; className?: string }) {
  return (
    <span className={className}>
      {Array.from(text).map((c, i) => (
        <span
          key={i}
          className="letter"
          style={{ animationDelay: `${delay + i * step}ms` }}
        >
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  );
}

export function ChapterMark({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] tracking-[0.4em] opacity-60">CHAPTER {num}</span>
      <span className="w-8 h-px bg-current opacity-40" />
      <span className="font-serif italic text-sm opacity-70">{label}</span>
    </div>
  );
}

export function SlideShell({ children, className = '', bg = '' }: { children: ReactNode; className?: string; bg?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${bg} ${className}`}>
      {children}
    </div>
  );
}
