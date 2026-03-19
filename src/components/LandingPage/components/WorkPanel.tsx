import { useLanguage } from "../../../context/LanguageContext";

export default function WorkPanel() {
  const { resume, t } = useLanguage();

  return (
    <div className="flex h-full flex-col gap-10 overflow-y-auto border-l border-white/4 p-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
      {/* Header */}
      <div className="animate-[fadeUp_0.6s_ease_both]">
        <h1 className="font-display text-6xl leading-tight tracking-wide text-white xl:text-7xl">
          {t("experience")}
        </h1>
        <p className="mt-2 font-mono text-[0.72rem] tracking-wide text-cyan-400 uppercase">
          {t("careerPath")}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-12 animate-[fadeUp_0.6s_0.1s_ease_both]">
        {/* Vertical Line */}
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-neutral-800" />

        {resume.experience.map((job, i) => (
          <div key={i} className="group relative pl-10">
            {/* Timeline Dot */}
            <div className="absolute top-2 left-0 h-4 w-4 rounded-full border border-neutral-700 bg-neutral-900 group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_0_4px_rgba(0,0,0,1)]" />

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-neutral-500 uppercase">
                {job.period}
              </span>
              <h3 className="font-display text-xl text-white group-hover:text-cyan-400 transition-colors">
                {job.role}
              </h3>
              <div className="flex items-center gap-3">
                {job.companyLogo && (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                    <img
                      src={job.companyLogo}
                      alt={job.company}
                      className="h-full w-full object-contain  group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.parentElement?.style.setProperty(
                          "display",
                          "none",
                        );
                      }}
                    />
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-neutral-300">
                    {job.company}
                  </span>
                  {job.via && (
                    <span className="font-mono text-[0.65rem] text-neutral-500">
                      {job.via}
                    </span>
                  )}
                  <span className="rounded-sm border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 font-mono text-[0.6rem] text-cyan-400/70 uppercase">
                    {job.type}
                  </span>
                </div>
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-2">
              {job.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-[0.8rem] leading-relaxed text-neutral-500"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/40" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
