export interface Experience {
  role: string;
  type: string;
  company: string;
  companyLogo?: string;
  via: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface Project {
  name: string;
  client: string;
  bullets: string[];
}

export interface Resume {
  name: string;
  nickname: string;
  title: string;
  focus: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: {
    [key: string]: string[];
  };
  projects: Project[];
  additional: string;
}
