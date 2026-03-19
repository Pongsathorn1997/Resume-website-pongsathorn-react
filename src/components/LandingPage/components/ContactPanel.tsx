import { useLanguage } from "../../../context/LanguageContext";

export default function ContactPanel() {
  const { resume, t } = useLanguage();

  return (
    <div className="flex h-full flex-col gap-10 overflow-y-auto border-l border-white/4 p-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
      {/* Header */}
      <div className="animate-[fadeUp_0.6s_ease_both]">
        <h1 className="font-display text-6xl leading-tight tracking-wide text-white xl:text-7xl">
          {t("contact")}
        </h1>
        <p className="mt-2 font-mono text-[0.72rem] tracking-wide text-cyan-400 uppercase">
          {t("contactSubtitle")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 animate-[fadeUp_0.6s_0.1s_ease_both]">
        <div className="group flex flex-col gap-4 rounded border border-neutral-800 bg-neutral-900/40 p-8 transition-all hover:border-cyan-400/50">
          <span className="font-mono text-[0.6rem] tracking-[0.2em] text-neutral-500 uppercase">
            {t("emailLabel")}
          </span>
          <a
            href={`mailto:${resume.contact.email}`}
            className="font-display text-xl text-white group-hover:text-cyan-400 transition-colors"
          >
            {resume.contact.email}
          </a>
        </div>

        <div className="group flex flex-col gap-4 rounded border border-neutral-800 bg-neutral-900/40 p-8 transition-all hover:border-cyan-400/50">
          <span className="font-mono text-[0.6rem] tracking-[0.2em] text-neutral-500 uppercase">
            {t("locationLabel")}
          </span>
          <span className="font-display text-xl text-white group-hover:text-cyan-400 transition-colors">
            {resume.contact.location}
          </span>
        </div>

        <div className="group flex flex-col gap-4 rounded border border-neutral-800 bg-neutral-900/40 p-8 transition-all hover:border-cyan-400/50">
          <span className="font-mono text-[0.6rem] tracking-[0.2em] text-neutral-500 uppercase">
            {t("phoneLabel")}
          </span>
          <span className="font-display text-xl text-white group-hover:text-cyan-400 transition-colors">
            {resume.contact.phone}
          </span>
        </div>
      </div>

      {/* Message Placeholder */}
      <div className="mt-auto animate-[fadeUp_0.6s_0.2s_ease_both]">
        <div className="rounded border border-dashed border-neutral-800 p-10 text-center">
          <p className="font-mono text-[0.7rem] text-neutral-600">
            {t("openForOpp")}
          </p>
        </div>
      </div>
    </div>
  );
}
