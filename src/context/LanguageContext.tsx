/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, type ReactNode } from "react";
import { resume as resumeEn } from "../data/resume.eng";
import { resume as resumeTh } from "../data/resume.th";
import type { Resume } from "../types/resume";

type Language = "en" | "th";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resume: Resume;
  t: (key: string) => string;
}

const translations = {
  en: {
    resume: "Resume",
    work: "Work",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    yearsExp: "years exp",
    keyProjects: "key projects",
    techStack: "tech stack",
    coreProficiency: "Core Proficiency",
    technicalStack: "Technical Stack",
    experience: "Experience",
    education: "Education",
    additionalInfo: "Additional Information",
    openForOpp: "Currently open for new opportunities and collaborations.",
    frontendExp: "4+ years in frontend",
    angularSpecialist: "Angular specialist",
    bsCS: "BS Computer Science",
    careerPath: "Career Path / Professional Journey",
    projectSubtitle: "Key Projects / Building Solutions",
    skillSubtitle: "Technical Stack / Core Proficiencies",
    contactSubtitle: "Get in Touch / Networking",
    emailLabel: "Email Address",
    locationLabel: "Location",
    phoneLabel: "Phone",
  },
  th: {
    resume: "เรซูเม่",
    work: "ประสบการณ์ทำงาน",
    projects: "โปรเจกต์",
    skills: "ทักษะ",
    contact: "ติดต่อ",
    yearsExp: "จำนวนปีที่ทำงาน",
    keyProjects: "โปรเจกต์สำคัญ",
    techStack: "เทคโนโลยี",
    coreProficiency: "ความเชี่ยวชาญหลัก",
    technicalStack: "เทคโนโลยีที่ใช้",
    experience: "ประสบการณ์ทำงาน",
    education: "การศึกษา",
    additionalInfo: "ข้อมูลเพิ่มเติม",
    openForOpp: "เปิดรับโอกาสใหม่ๆ และหวังว่าจะได้ร่วมงานกันในอนาคตครับ",
    frontendExp: "ประสบการณ์ฟรอนต์เอนด์ 4+ ปี",
    angularSpecialist: "เชี่ยวชาญ Angular",
    bsCS: "วิทยาศาสตรบัณฑิต คอมพิวเตอร์",
    careerPath: "เส้นทางอาชีพ / ประสบการณ์ทำงาน",
    projectSubtitle: "โปรเจกต์สำคัญ / การสร้างโซลูชัน",
    skillSubtitle: "เทคโนโลยีที่ใช้ / ความเชี่ยวชาญหลัก",
    contactSubtitle: "ช่องทางการติดต่อ / เครือข่าย",
    emailLabel: "อีเมล",
    locationLabel: "ที่อยู่",
    phoneLabel: "เบอร์โทรศัพท์",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const resume = language === "en" ? resumeEn : resumeTh;

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, resume, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
