export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-bold tracking-tight ${className}`}>
      <span className="text-primary">C</span>
      <span className="relative inline-block text-primary">
        <span className="relative">i</span>
        <span className="absolute left-1/2 -translate-x-1/2 -top-[0.15em] w-[0.15em] h-[0.15em] rounded-full bg-primary"></span>
      </span>
      <span className="text-primary">v</span>
      <span className="relative inline-block text-primary">
        <span className="relative">i</span>
        <span className="absolute left-1/2 -translate-x-1/2 -top-[0.15em] w-[0.15em] h-[0.15em] rounded-full bg-primary"></span>
      </span>
      <span className="text-primary">c</span>
      <span className="text-foreground"> Base</span>
    </span>
  );
}

export function HeroLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-black tracking-tighter ${className}`}>
      <span className="text-foreground">C</span>
      <span className="relative inline-block text-foreground">
        <span className="relative">i</span>
        <span className="absolute left-1/2 -translate-x-1/2 -top-[0.2em] w-[0.18em] h-[0.18em] rounded-full bg-primary shadow-[0_0_12px_var(--primary),0_0_24px_var(--primary)]"></span>
      </span>
      <span className="text-foreground">v</span>
      <span className="relative inline-block text-foreground">
        <span className="relative">i</span>
        <span className="absolute left-1/2 -translate-x-1/2 -top-[0.2em] w-[0.18em] h-[0.18em] rounded-full bg-primary shadow-[0_0_12px_var(--primary),0_0_24px_var(--primary)]"></span>
      </span>
      <span className="text-foreground">c Base AI</span>
    </span>
  );
}
