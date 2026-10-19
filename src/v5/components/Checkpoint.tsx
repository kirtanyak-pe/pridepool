import JoinButton from './JoinButton';

/**
 * Shown at the end of each story round (Champion → Pool → Bonus):
 * a round-progress marker, one line on why to join now, and the Join button.
 */
export default function Checkpoint({ round, name, lead }: { round: 1 | 2 | 3; name: string; lead: string }) {
  return (
    <div className="arena-container relative -mt-8 pb-16 lg:-mt-12 lg:pb-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center md:flex-row md:justify-between md:gap-6 md:px-6 md:text-left min-[1920px]:max-w-5xl">
        <div className="min-w-0">
          <p className="flex items-center justify-center gap-2.5 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-fg-subtle md:justify-start">
            <span aria-hidden="true" className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <span key={i} className={`h-1 w-4 rounded-full ${i <= round ? 'bg-accent' : 'bg-white/15'}`} />
              ))}
            </span>
            Round {round} of 3 · {name}
          </p>
          <p className="mt-2 text-pretty text-[1.0625rem] font-bold leading-snug text-fg">{lead}</p>
        </div>
        <JoinButton size="md" location={`round-${round}`} />
      </div>
    </div>
  );
}
