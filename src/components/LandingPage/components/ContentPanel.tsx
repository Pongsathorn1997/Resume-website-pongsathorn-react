import { useLanguage } from "../../../context/LanguageContext";
import SkillChart from "./SkillChart";
import Skills from "./Skills";

export default function ContentPanel() {
  const { resume, t } = useLanguage();

  const stats = [
    { number: "4+", label: t("yearsExp") },
    { number: "4", label: t("keyProjects") },
    { number: "12+", label: t("techStack") },
  ];

  return (
    <div className="flex flex-col gap-8 overflow-y-auto border-l border-white/4 p-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
      {/* Hero */}
      <div className="animate-[fadeUp_0.6s_ease_both]">
        <h1 className="font-display text-6xl leading-tight tracking-wide text-white xl:text-7xl">
          {t("resume")}
        </h1>
        <p className="mt-2 font-mono text-[0.85rem] tracking-wide text-cyan-400">
          {t("frontendExp")}
          <span className="mx-2 text-neutral-600">/</span>
          {t("angularSpecialist")}
          <span className="mx-2 text-neutral-600">/</span>
          {t("bsCS")}
        </p>
        <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-neutral-500">
          {resume.summary}
        </p>
      </div>

      {/* Stats */}
      <div className="grid animate-[fadeUp_0.6s_0.1s_ease_both] grid-cols-3 gap-px rounded border border-neutral-700 bg-neutral-700">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 bg-neutral-900 p-4 transition-colors hover:bg-neutral-800"
          >
            <span className="font-display text-[2rem] leading-tight text-cyan-400">
              {s.number}
            </span>
            <span className="font-mono text-[0.75rem] tracking-widest text-neutral-500 uppercase">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-neutral-700 to-transparent">
        {" "}
        divider{" "}
      </div>

      {/* Core Proficiency */}
      <div className="animate-[fadeUp_0.6s_0.2s_ease_both]">
        <div className="mb-6 flex items-center gap-2">
          <svg
            fill="none"
            stroke="#00d4d4"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="h-4.5 w-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          <h3 className="font-display text-lg tracking-widest text-white uppercase">
            {t("coreProficiency")}
          </h3>
        </div>
        <SkillChart />
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-neutral-700 to-transparent">
        {" "}
        divider{" "}
      </div>

      {/* Technical Stack */}
      <div className="animate-[fadeUp_0.6s_0.3s_ease_both]">
        <div className="mb-6 flex items-center gap-2">
          <svg
            fill="none"
            stroke="#00d4d4"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="h-4.5 w-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <h3 className="font-display text-lg tracking-widest text-white uppercase">
            {t("technicalStack")}
          </h3>
        </div>
        <Skills />
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-neutral-700 to-transparent">
        {" "}
        divider{" "}
      </div>

      {/* Contact */}
      <div className="flex animate-[fadeUp_0.6s_0.4s_ease_both] flex-wrap gap-6">
        <div className="flex items-center gap-2 font-mono text-[0.8rem] text-neutral-500">
          <svg
            fill="none"
            stroke="#00d4d4"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          {resume.contact.email}
        </div>
        <div className="flex items-center gap-2 font-mono text-[0.8rem] text-neutral-500">
          <svg
            fill="none"
            stroke="#00d4d4"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          {resume.contact.location}
        </div>
      </div>
    </div>
  );
}
