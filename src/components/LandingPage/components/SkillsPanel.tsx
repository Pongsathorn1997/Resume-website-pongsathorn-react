import { useLanguage } from "../../../context/LanguageContext";
import SkillChart from "./SkillChart";
import Skills from "./Skills";

export default function SkillsPanel() {
  const { t } = useLanguage();

  return (
    <div className="flex h-full flex-col gap-10 overflow-y-auto border-l border-white/4 p-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
      {/* Header */}
      <div className="animate-[fadeUp_0.6s_ease_both]">
        <h1 className="font-display text-6xl leading-tight tracking-wide text-white xl:text-7xl">
          {t("skills")}
        </h1>
        <p className="mt-2 font-mono text-[0.72rem] tracking-wide text-cyan-400 uppercase">
          {t("skillSubtitle")}
        </p>
      </div>

      {/* Core Proficiency */}
      <div className="animate-[fadeUp_0.6s_0.1s_ease_both]">
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
      <div className="h-px bg-linear-to-r from-neutral-700 to-transparent" />

      {/* Technical Stack */}
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
    </div>
  );
}
