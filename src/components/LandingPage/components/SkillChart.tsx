const coreSkills = [
  { name: "Angular", level: "Advanced", value: 4 },
  { name: "TypeScript", level: "Advanced", value: 4 },
  { name: "Microsoft Auth", level: "Intermediate", value: 3 },
  { name: "Tailwind CSS", level: "Advanced", value: 4 },
  { name: "UI / Component Design", level: "Intermediate", value: 3 },
];

export default function SkillChart() {
  return (
    <div className="flex flex-col gap-6">
      {coreSkills.map((skill) => (
        <div key={skill.name} className="group">
          <div className="mb-2 flex items-end justify-between">
            <span className="font-display text-xs tracking-wider text-white uppercase group-hover:text-cyan-400 transition-colors">
              {skill.name}
            </span>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] text-cyan-400/70 uppercase">
              {skill.level}
            </span>
          </div>
          <div className="flex h-0.5 w-full gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-full flex-1 transition-all duration-500 ${
                  i <= skill.value
                    ? "bg-cyan-400 shadow-[0_0_8px_rgba(0,212,212,0.4)]"
                    : "bg-neutral-800"
                }`}
                style={{
                  transitionDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
