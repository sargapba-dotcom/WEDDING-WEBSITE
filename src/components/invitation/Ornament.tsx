export function Ornament({ label = '✿' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <span className="gold-rule w-16 sm:w-28" />
      <span className="text-gold text-sm">{label}</span>
      <span className="gold-rule w-16 sm:w-28" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  as: As = 'h2',
}: {
  eyebrow: string;
  title: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className="text-center">
      <p className="text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase">{eyebrow}</p>
      <As className="mt-3 font-light text-3xl text-primary sm:text-5xl">{title}</As>
      <Ornament />
    </div>
  );
}
