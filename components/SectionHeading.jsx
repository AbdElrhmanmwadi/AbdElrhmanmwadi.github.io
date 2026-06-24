import Reveal from "./Reveal";

// Shared section title + eyebrow used across About / Skills / Projects / Contact.
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}
