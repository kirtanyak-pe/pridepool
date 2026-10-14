export default function Footer() {
  return (
    <footer id="footer" className="relative isolate overflow-hidden border-t border-white/5 bg-bg">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 75% at 50% 100%, rgba(177,69,201,0.30), rgba(177,69,201,0.08) 45%, transparent 75%), radial-gradient(ellipse 45% 40% at 15% 100%, rgba(123,31,143,0.22), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.09]" style={{ backgroundImage: "linear-gradient(var(--color-gold-bright) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-bright) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "linear-gradient(to bottom, transparent 0%, #000 35%, #000 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 35%, #000 100%)" }} />
      </div>
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="arena-container py-12 sm:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <img alt="Lemonn" loading="lazy" width="193" height="52" decoding="async" className="h-6 w-auto" src="lemonn-white.svg" />
              <span aria-hidden="true" className="text-xl font-light leading-none text-fg-muted">
                ×
              </span>
              <span className="flex h-10 w-32 items-center justify-center rounded-xl bg-white px-2">
                <img alt="Booming Bulls Academy" loading="lazy" width="2170" height="725" decoding="async" className="h-full w-full object-contain" src="bomming-bulls-icon.webp" />
              </span>
            </div>
            <p className="mt-5 text-sm font-semibold text-fg">
              The Pride Pool{" "}
              <span className="text-fg-subtle">
                ·
              </span>
              {" "}
              <span className="text-gold-bright">
                ₹1 Crore
              </span>
              {" "}Brokerage Credits Pool
            </p>
            <p className="mt-1.5 text-sm text-fg-muted">
              Celebrating Anish Singh Thakur’s achievement at the World Trading Championship.
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-fg-subtle">
                Campaign
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a href="./#basis" className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg">
                    Why this campaign
                  </a>
                </li>
                <li>
                  <a href="./#giveaway" className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg">
                    Laptop giveaway
                  </a>
                </li>
                <li>
                  <a href="./#moment" className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg">
                    The moment
                  </a>
                </li>
                <li>
                  <a href="./#leaderboard" className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg">
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a href="./#faqs" className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="terms-and-conditions" className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg">
                    Terms & conditions
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-fg-subtle">
                Join the pool
              </p>
              <a href="#" className="arena-cta mt-4 inline-flex h-12 items-center justify-center gap-2 btn-key px-6 text-sm font-extrabold tracking-[-0.01em]">
                Join the ₹1 Crore Pool
                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[80ch] text-xs leading-relaxed text-fg-subtle">
            <span data-placeholder="true">
              Subject to a final agreement, verification of the championship result, regulatory approvals, and the final campaign terms. Joining the pool doesn’t guarantee a specific credit allocation.
            </span>
          </p>
          <a href="#" className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-fg-muted transition-colors duration-200 hover:text-fg">
            Back to top
            <span aria-hidden="true">
              ↑
            </span>
          </a>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span data-placeholder="true">
              © 2026 Lemonn. All rights reserved.
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-accent">
              ✦
            </span>
            Crafted for traders in India
          </p>
        </div>
      </div>
    </footer>
  );
}
