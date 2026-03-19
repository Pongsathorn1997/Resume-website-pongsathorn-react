import { useLanguage } from "../../../context/LanguageContext";

export default function Skills() {
  const { resume } = useLanguage();
  const skills = resume.skills;

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="group">
          <h4 className="mb-3 flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.2em] text-cyan-400 uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="h-px w-4 bg-cyan-400/30 group-hover:w-8 transition-all duration-300" />
            {category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-sm border border-neutral-800 bg-neutral-900/50 px-2 py-1 font-mono text-[0.62rem] text-neutral-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
