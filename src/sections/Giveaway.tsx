export default function Giveaway() {
  return (
    <section id="giveaway" aria-labelledby="giveaway-heading" className="arena-container relative pb-16 lg:pb-20">
      <div data-reveal="true" className="relative overflow-hidden rounded-3xl key-dark px-6 py-8 sm:px-10 sm:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-1/2 h-64 w-[30rem] max-w-full -translate-y-1/2 opacity-60 blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(123,31,143,0.45), transparent)" }} />
        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-12">
          <figure className="group mx-auto flex w-full max-w-[20rem] flex-col items-center [perspective:1000px] lg:max-w-[22rem]">
            <div className="relative w-full">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] -bottom-2 h-10 rounded-[50%] opacity-70 blur-2xl" style={{ background: "radial-gradient(closest-side, rgba(177,69,201,0.55), transparent)" }} />
              <div className="laptop-float transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:[transform:rotateX(10deg)_rotateY(-14deg)_scale(1.03)]">
                <img alt="A laptop showing a market chart" loading="lazy" width="2800" height="2858" decoding="async" className="h-auto w-full select-none" src="/laptop-hd.webp" />
              </div>
            </div>
          </figure>
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <p className="inline-flex items-center gap-2 rounded-full neu-inset px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-accent">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                Bonus giveaway
              </p>
              <p className="rounded-full border border-accent/40 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-accent">
                Draft · details to be confirmed
              </p>
            </div>
            <h2 id="giveaway-heading" className="mt-4 text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-fg [text-shadow:0_0_50px_rgba(177,69,201,0.5)]">
              <span data-placeholder="true">
                <span className="text-gold-bright">
                  20 laptops
                </span>
                {" "}up for grabs
              </span>
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted sm:text-base">
              <span data-placeholder="true">
                On top of the ₹1 Crore brokerage credits pool, 20 laptops will be given away to participants.
              </span>
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl neu-inset px-4 py-3 text-left">
                <dt className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-fg-subtle">
                  How winners are picked
                </dt>
                <dd className="mt-1 text-sm font-semibold text-fg">
                  <span data-placeholder="true">
                    To be confirmed
                  </span>
                </dd>
              </div>
              <div className="rounded-xl neu-inset px-4 py-3 text-left">
                <dt className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-fg-subtle">
                  Who can win
                </dt>
                <dd className="mt-1 text-sm font-semibold text-fg">
                  <span data-placeholder="true">
                    To be confirmed
                  </span>
                </dd>
              </div>
              <div className="rounded-xl neu-inset px-4 py-3 text-left">
                <dt className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-fg-subtle">
                  Results announced
                </dt>
                <dd className="mt-1 text-sm font-semibold text-fg">
                  <span data-placeholder="true">
                    To be confirmed
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
