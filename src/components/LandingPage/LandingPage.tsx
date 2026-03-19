import { Routes, Route, Navigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import useCursor from "../../hooks/useCursor";
import Sidebar from "./components/Sidebar";
import ProfilePanel from "./components/ProfilePanel";
import ContentPanel from "./components/ContentPanel";
import WorkPanel from "./components/WorkPanel";
import ProjectsPanel from "./components/ProjectsPanel";
import SkillsPanel from "./components/SkillsPanel";
import ContactPanel from "./components/ContactPanel";

export default function LandingPage() {
  const { resume } = useLanguage();
  const { cursorRef, ringRef } = useCursor();

  return (
    <div className="relative h-screen cursor-none overflow-hidden bg-[#0a0a0a]">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-9999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
        style={{ boxShadow: "0 0 12px #00d4d4" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-9998 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 transition-all duration-150"
      />

      {/* Diagonal lines background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)",
        }}
      />

      {/* Layout grid */}
      <div
        className="relative z-10 grid h-full"
        style={{ gridTemplateColumns: "72px 1fr 1fr" }}
      >
        <Sidebar />
        <ProfilePanel name={resume.name} title={resume.title} />
        <Routes>
          <Route path="/" element={<ContentPanel />} />
          <Route path="/work" element={<WorkPanel />} />
          <Route path="/projects" element={<ProjectsPanel />} />
          <Route path="/skills" element={<SkillsPanel />} />
          <Route path="/contact" element={<ContactPanel />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
