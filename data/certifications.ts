export type CertificationId =
  | "fullStackDeveloper"
  | "playwrightPower"
  | "promptEngineering"
  | "awsAiPractitioner"
  | "relationalDatabase"
  | "scrumFundamentals"
  | "readyApi"
  | "tester"
  | "englishImmersionProgram"
  | "cSharpIntermediate"
  | "cSharpWithMicrosoft";
  
export interface Certification {
  id: CertificationId;
  provider: string;
  date?: string;
  certificateUrl?: string;
  image: string;
  status: "completed" | "inProgress";
}

export const certifications: Certification[] = [
  {
    id: "fullStackDeveloper",
    provider: "Talento Digital",
    date: "Sep 2026",
    certificateUrl: "/certificates/fullstack-developer-certificate.jpeg",
    image: "/images/certifications/full-stack-developer.png",
    status: "completed",
  },
  {
    id: "playwrightPower",
    provider: "Coursera",
    date: "Aug 2026",
    certificateUrl: "https://www.coursera.org/account/accomplishments/records/8U14FHH3Q2B7",
    image: "/images/certifications/playwright-power.png",
    status: "completed",
  },
  {
    id: "promptEngineering",
    provider: "Udemy",
    date: "Jul 2026",
    certificateUrl: "https://www.udemy.com/certificate/UC-ef934661-54c3-4ec3-9b5e-131d552bbde4/",
    image: "/images/certifications/prompt-engineering.png",
    status: "completed",
  },
  // {
  //   id: "awsAiPractitioner",
  //   provider: "Amazon Web Services",
  //   image: "/images/certifications/aws-ai-practitioner.png",
  //   status: "inProgress",
  // },
  // {
  //   id: "relationalDatabase",
  //   provider: "Coursera",
  //   image: "/images/certifications/relational-database.png",
  //   status: "inProgress",
  // },
  {
    id: "scrumFundamentals",
    provider: "VMEdu",
    date: "Jun 2026",
    certificateUrl: "/certificates/scrum-fundamentals-certificate.jpg",
    image: "/images/certifications/scrum-fundamentals.png",
    status: "completed",
  },
  {
    id: "readyApi",
    provider: "SmartBear",
    date: "May 2026",
    certificateUrl: "/certificates/ready-api-certificate.jpg",
    image: "/images/certifications/ready-api-1.png",
    status: "completed",
  },
  {
    id: "tester",
    provider: "Capacítate para el Empleo",
    date: "Feb 2026",
    certificateUrl: "https://capacitateparaelempleo.org/verifica/0f538e3c-9d2b-479e-8e49-fd8acf962a5b/c98a1ac8-9d4f-4b1d-903f-42c37594d629",
    image: "/images/certifications/tester.png",
    status: "completed",
  },
  {
    id: "englishImmersionProgram",
    provider: "Ministerio de Educación Superior, Ciencia y Tecnología (MESCyT)",
    date: "Dec 2023",
    certificateUrl: "/certificates/english-immersion-program-certificate.pdf",
    image: "/images/certifications/english-immersion-program.png",
    status: "completed",
  },
  {
    id: "cSharpIntermediate",
    provider: "ITLA",
    date: "Apr 2024",
    certificateUrl: "https://orbi.edu.do/orbi/educacionpermanente/cursosaprobados/qr/259324/72134",
    image: "/images/certifications/c-sharp-intermediate.png",
    status: "completed",
  },
  {
    id: "cSharpWithMicrosoft",
    provider: "freeCodeCamp",
    date: "Jan 2026",
    certificateUrl: "https://freecodecamp.org/certification/masuel04/foundational-c-sharp-with-microsoft",
    image: "/images/certifications/c-sharp-with-microsoft.png",
    status: "completed",
  }
];