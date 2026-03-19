import profile1 from "../../../assets/profile3.png";

type Props = {
  name: string;
  title: string;
};

export default function ProfilePanel({ name, title }: Props) {
  const [first, ...rest] = name.split(" ");

  return (
    <div className="relative overflow-hidden bg-neutral-900">
      {/* Top cyan line */}
      <div className="absolute top-0 right-0 left-0 z-10 h-[2px] bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Photo area - silhouette placeholder */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div
          className="relative h-[95%] w-full"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, #1e3a3a 0%, transparent 70%)",
          }}
        >
          <img
            src={profile1}
            alt={name}
            className="absolute top-30 left-1/2 w-[110%] max-w-[600px] -translate-x-1/2 object-cover"
            style={{ filter: "drop-shadow(0 0 40px rgba(0,212,212,0.15))" }}
          />
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.3) 65%, rgba(10,10,10,0.95) 100%)",
        }}
      />

      {/* Name block */}
      <div className="absolute right-0 bottom-0 left-0 z-10 p-7">
        <h2 className="font-display text-4xl leading-tight tracking-wide text-white xl:text-5xl">
          {first}
          <br />
          {rest.join(" ")}
        </h2>
        <p className="mt-2 font-mono text-[0.65rem] tracking-[0.2em] text-cyan-400 uppercase">
          {title}
        </p>

        {/* Social links */}
        {/* <div className="flex gap-3 mt-5">
          {['f', '@', 'in', 'Be'].map((s) => (
            
              key={s}
              href="#"
              className="w-7 h-7 border border-neutral-700 rounded flex items-center justify-center font-mono text-[0.6rem] text-neutral-500 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/8 transition-all"
            >
              {s}
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
}
