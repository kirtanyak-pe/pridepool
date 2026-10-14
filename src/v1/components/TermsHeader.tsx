export default function TermsHeader() {
  return (
    <header className="relative z-10 border-b border-white/5 backdrop-blur-sm">
      <div className="arena-container grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3.5">
        <a className="inline-flex items-center gap-1.5 justify-self-start text-[0.8125rem] font-semibold text-fg-muted transition-colors duration-200 hover:text-fg" href="./">
          <span aria-hidden="true">
            ←
          </span>
          <span className="hidden sm:inline">
            Back to campaign
          </span>
          <span className="sm:hidden">
            Back
          </span>
        </a>
        <a aria-label="Lemonn × Booming Bulls — campaign home" className="flex items-center gap-4 sm:gap-6" href="./">
          <img alt="" width="193" height="52" decoding="async" className="h-5 w-auto sm:h-6" src="lemonn-white.svg" />
          <span aria-hidden="true" className="text-xl font-light leading-none text-fg-muted">
            ×
          </span>
          <span className="flex h-9 w-28 items-center justify-center rounded-lg bg-white px-1.5 sm:h-10 sm:w-32">
            <img alt="" width="2170" height="725" decoding="async" className="h-full w-full object-contain" src="bomming-bulls-icon.webp" />
          </span>
        </a>
      </div>
    </header>
  );
}
