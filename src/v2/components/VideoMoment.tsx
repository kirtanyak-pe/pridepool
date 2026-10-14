import { useState } from 'react';

/**
 * Compact "watch the moment" tile. Tapping play expands it into the full 9:16 YouTube player
 * right here, so nobody has to leave the page.
 */
export default function VideoMoment({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="neu-raised mx-auto w-full max-w-[20rem] rounded-[2rem] p-2">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-bg">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group neu-raised flex w-full items-center gap-4 rounded-2xl p-2.5 pr-4 text-left"
    >
      <span className="relative aspect-[9/16] w-[4.5rem] shrink-0 overflow-hidden rounded-xl bg-bg">
        <img
          src={`https://i.ytimg.com/vi/${id}/oardefault.jpg`}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span aria-hidden="true" className="absolute inset-0 bg-bg/30" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.625rem] font-bold uppercase tracking-[0.18em] text-accent">YouTube Short</span>
        <span className="mt-1 block text-base font-bold leading-snug text-fg">Watch the moment on stage</span>
      </span>
      <span aria-hidden="true" className="btn-key flex h-12 w-12 shrink-0 items-center justify-center [--k:4px]">
        <svg viewBox="0 0 24 24" width="20" height="20" className="ml-0.5">
          <path d="M7 4.5v15a1 1 0 0 0 1.5.87l12-7.5a1 1 0 0 0 0-1.74l-12-7.5A1 1 0 0 0 7 4.5Z" fill="currentColor" />
        </svg>
      </span>
    </button>
  );
}
