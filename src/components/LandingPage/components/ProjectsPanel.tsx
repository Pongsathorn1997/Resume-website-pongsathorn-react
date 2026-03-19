import { useLanguage } from "../../../context/LanguageContext";

export default function ProjectsPanel() {
  const { resume, t } = useLanguage();

  return (
    <div className="flex h-full flex-col gap-10 overflow-y-auto border-l border-white/4 p-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
      {/* Header */}
      <div className="animate-[fadeUp_0.6s_ease_both]">
        <h1 className="font-display text-6xl leading-tight tracking-wide text-white xl:text-7xl">
          {t("projects")}
        </h1>
        <p className="mt-2 font-mono text-[0.72rem] tracking-wide text-cyan-400 uppercase">
          {t("projectSubtitle")}
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 animate-[fadeUp_0.6s_0.1s_ease_both]">
        {resume.projects.map((project, i) => (
          <div
            key={i}
            className="group relative flex flex-col gap-4 overflow-hidden rounded border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-cyan-400/50 hover:bg-neutral-900"
          >
            {/* Corner Decorative SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute top-0 right-0 h-12 w-12 -translate-y-6 translate-x-6 rotate-45 text-neutral-800 transition-colors group-hover:text-cyan-400/20"
            >
              <rect width="100" height="100" fill="currentColor" />
            </svg>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-cyan-400 uppercase opacity-60">
                {project.client}
              </span>
              <h3 className="font-display text-xl text-white transition-colors group-hover:text-cyan-400">
                {project.name}
              </h3>
            </div>

            <ul className="flex flex-col gap-2">
              {project.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-[0.78rem] leading-relaxed text-neutral-500"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/30 group-hover:bg-cyan-400 transition-colors" />
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
