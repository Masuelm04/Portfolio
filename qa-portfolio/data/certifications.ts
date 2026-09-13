export type CertificationId =
  | "playwrightPower"
  | "promptEngineering"
  | "awsAiPractitioner"
  | "relationalDatabase"
  | "scrumFundamentals";

export interface Certification {
  id: CertificationId;
  provider: string;
  date?: string;
  certificateUrl?: string;
  status: "completed" | "inProgress";
}

export const certifications: Certification[] = [
  {
    id: "playwrightPower",
    provider: "Coursera",
    date: "Aug 2026",
    certificateUrl: "https://www.coursera.org/account/accomplishments/records/8U14FHH3Q2B7",
    status: "completed",
  },
  {
    id: "promptEngineering",
    provider: "Udemy",
    date: "Jul 2026",
    certificateUrl: "ude.my/UC-ef934661-54c3-4ec3-9b5e-131d552bbde4",
    status: "completed",
  },
  {
    id: "awsAiPractitioner",
    provider: "Amazon Web Services",
    status: "inProgress",
  },
  {
    id: "relationalDatabase",
    provider: "Coursera",
    status: "inProgress",
  },
  {
    id: "scrumFundamentals",
    provider: "VMEdu",
    date: "Jun 2026",
    certificateUrl: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-MasuelMatosMontero-1168704.pdf",
    status: "completed",
  },
];