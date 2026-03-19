import type { Resume } from "../types/resume";
import pttepLogo from "../assets/logos/pttep.svg";
import theGangLogo from "../assets/logos/the-gang.jpg";

export const resume: Resume = {
  name: "พงศธร เพิ่มการเจริญ",
  nickname: "จุ้ย",
  title: "นักพัฒนาฟรอนต์เอนด์ (Frontend Developer)",
  focus: "เชี่ยวชาญด้าน Angular",
  contact: {
    phone: "062-313-6688",
    email: "pongsathorn.pem@gmail.com",
    location: "ประเทศไทย",
  },
  summary:
    "นักพัฒนาฟรอนต์เอนด์ที่มีประสบการณ์ทำงานระดับมืออาชีพ 4 ปี 3 เดือน มีความเชี่ยวชาญในการสร้างเว็บแอปพลิเคชันระดับองค์กร (Enterprise Scale) โดยใช้ Angular มีประสบการณ์ทำงาน On-site ที่ PTTEP เป็นเวลามากกว่า 1 ปี 7 เดือน โดยมีส่วนร่วมในการพัฒนาระบบ Procurement และ Marketplace Platform ที่รองรับการประมูลแข่งขันระหว่างทีมจัดซื้อภายในและผู้ขาย (Vendors) มุ่งเน้นการสร้าง User Interface ที่สะอาด เสถียร และตอบโจทย์ทางธุรกิจ โดยให้ความสำคัญกับความง่ายในการใช้งาน (Usability) และการบำรุงรักษาโค้ด (Maintainability)",
  experience: [
    {
      role: "Intermediate Frontend Developer",
      type: "On-site",
      company: "PTTEP",
      companyLogo: pttepLogo,
      via: "ผ่านทางบริษัท The Gang Technology จำกัด",
      period: "2024 – ปัจจุบัน",
      bullets: [
        "ทำงาน On-site กับ PTTEP เป็นเวลามากกว่า 1 ปี 5 เดือน",
        "พัฒนาและบำรุงรักษาระบบตลาดกลางการจัดซื้อ (Procurement Marketplace System)",
        "สร้าง Angular Components และ Modules ที่สามารถนำกลับมาใช้ใหม่ได้",
        "พัฒนาระบบยืนยันตัวตนด้วย Microsoft Authentication (Azure AD & Azure AD B2C)",
        "เชื่อมต่อระบบ Authentication เข้ากับ Role-based routing และ Business logic",
        "ทำงานร่วมกับทีม Backend, UX และทีมธุรกิจในสภาพแวดล้อมแบบ Agile",
      ],
    },
    {
      role: "Intermediate Frontend Developer",
      type: "Full-time",
      company: "The Gang Technology Co., Ltd.",
      companyLogo: theGangLogo,
      via: "",
      period: "2023 – 2024",
      bullets: [
        "ได้รับการเลื่อนตำแหน่งจาก Junior เป็น Intermediate Frontend Developer",
        "รับผิดชอบโปรเจกต์ระดับองค์กรที่ใช้ Angular หลายโปรเจกต์",
        "ปรับปรุงโครงสร้าง UI และคุณภาพของโค้ดเพื่อความง่ายในการบำรุงรักษาและขยายระบบ",
        "มีส่วนร่วมในการวิเคราะห์ความต้องการ (Requirement Analysis) และการประเมินระยะเวลาการทำงาน (Effort Estimation)",
      ],
    },
    {
      role: "Junior Frontend Developer",
      type: "Remote",
      company: "The Gang Technology Co., Ltd.",
      companyLogo: theGangLogo,
      via: "",
      period: "2022 – 2023",
      bullets: [
        "พัฒนา UI โดยใช้ Angular และแก้ไขบักในระบบที่มีอยู่",
        "สนับสนุนการพัฒนาฟีเจอร์ใหม่ๆ และการทดสอบระบบ",
        "ได้รับประสบการณ์ตรงจากการทำงานในกระบวนการแบบ Agile",
      ],
    },
  ],
  education: [
    {
      degree: "วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์",
      school: "วิทยาลัยนานาชาติ มหาวิทยาลัยมหิดล (MUIC)",
      location: "ประเทศไทย",
      period: "2017 – 2021",
    },
  ],
  skills: {
    "Frontend Development": [
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Angular",
      "Vue",
      "Astro",
      "Ant Design Angular",
      "Tailwind CSS",
      "Bootstrap",
      "Bulma",
    ],
    "Authentication & Security": [
      "Microsoft Authentication",
      "Azure AD",
      "Azure AD B2C",
      "MSAL for Angular",
      "Token lifecycle management",
      "Role-based access control",
    ],
    Testing: ["Angular Unit Test", "Jasmine", "Karma", "Playwright (E2E)"],
    "Tools & Workflow": ["Git", "GitLab", "Jira", "Figma", "Agile / Scrum"],
  },
  projects: [
    {
      name: "Procurement Marketplace Platform",
      client: "PTTEP",
      bullets: [
        "เว็บแอปพลิเคชันระดับองค์กรสำหรับกระบวนการจัดซื้อและการประมูลแข่งขัน",
        "ช่วยให้ผู้ขายสามารถส่งข้อเสนอตามราคา ระยะเวลาการส่งมอบ และจำนวนที่ต้องการได้",
        "สนับสนุนทีมจัดซื้อในการเปรียบเทียบข้อเสนอและเลือกผู้ขายที่เหมาะสมที่สุด",
        "พัฒนาโครงสร้างฟรอนต์เอนด์โดยใช้ Angular ที่มีโครงสร้างขยายได้และบำรุงรักษาง่าย",
        "เชื่อมต่อ Microsoft Authentication (Azure AD สำหรับผู้ใช้ภายใน / Azure AD B2C สำหรับผู้ขาย)",
        "ออกแบบระบบ Role-based access control และการกำหนดสิทธิ์การเข้าถึงเมนูต่างๆ",
      ],
    },
    {
      name: "Reporting Systems",
      client: "Enterprise",
      bullets: [
        "แพลตฟอร์มรายงานภายในองค์กรสำหรับสร้าง แก้ไข และดูข้อมูลทางธุรกิจ",
        "พัฒนา Dynamic Forms และ UI Components ที่ขับเคลื่อนด้วยข้อมูล",
        "มุ่งเน้นความถูกต้องของข้อมูลและความเสถียรของระบบ",
      ],
    },
    {
      name: "Timebinder",
      client: "Internal",
      bullets: [
        "ระบบภายในสำหรับบันทึกเวลาทำงานและจัดการการลา",
        "พัฒนาระบบตามสิทธิ์การใช้งาน (Permission-based) และระบบแจ้งเตือน (Workflows)",
        "พัฒนา UI ที่รองรับการใช้งานทั้งบนเดสก์ท็อปและมือถือ",
      ],
    },
    {
      name: "Ruammit Application",
      client: "Marketplace",
      bullets: [
        "เว็บแอปพลิเคชันรูปแบบ Marketplace สำหรับผู้ขายส่งและผู้ค้าทั่วไป",
        "รองรับระบบจัดการสินค้าและขั้นตอนการสั่งซื้อ (รูปแบบเก็บเงินปลายทาง)",
        "พัฒนาฟรอนต์เอนด์โดยใช้ Angular โดยเน้นความง่ายในการใช้งานจริง",
      ],
    },
  ],
  additional:
    "มีประสบการณ์ในระบบระดับองค์กรขนาดใหญ่ และมีความเข้าใจในกระบวนการทางธุรกิจด้านการจัดซื้อและตลาดกลาง ให้ความสำคัญกับคุณภาพของ UI การปรับปรุงประสิทธิภาพ (Performance Optimization) และโครงสร้างสถาปัตยกรรมที่บำรุงรักษาง่าย มีความมุ่งมั่นในการเรียนรู้อย่างต่อเนื่อง และพร้อมที่จะขยายความเชี่ยวชาญทั้งในด้านฟรอนต์เอนด์และแบ็คเอนด์เพื่อเพิ่มประสิทธิภาพและขีดความสามารถในการขยายตัวของระบบโดยรวม",
};
