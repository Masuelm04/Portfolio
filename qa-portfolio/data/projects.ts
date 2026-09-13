export type ProjectId =
  | "automationExercise"
  | "sauceDemo"
  | "apiFramework";

export interface Project {
  id: ProjectId;
  technologies: string[];
  githubUrl: string;
  featured?: boolean;
  practice?: boolean;
}

export const projects: Project[] = [
  {
    id: "automationExercise",
    technologies: [
      "Python",
      "Playwright",
      "Pytest",
      "POM",
      "API/UI",
      "CI/CD",
    ],
    githubUrl: "https://github.com/Masuelm04/AutomationExercise-E2E-Playwright-Framework",
    featured: true,
  },
  {
    id: "sauceDemo",
    technologies: [
      "Python",
      "Playwright",
      "Pytest",
      "POM",
    ],
    githubUrl: "https://github.com/Masuelm04/SauceDemo-Playwright-Python-Framework",
  },
  {
    id: "apiFramework",
    technologies: [
      "Python",
      "Pytest",
      "REST API",
      "Mocks",
      "Coverage",
    ],
    githubUrl: "https://github.com/Masuelm04/Pytest-Api-Testing-Framework",
  },
];