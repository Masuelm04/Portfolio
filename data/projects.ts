export type ProjectId =
  | "automationExercise"
  | "sauceDemo"
  | "apiFramework";

export interface Project {
  id: ProjectId;
  technologies: string[];
  githubUrl: string;
  image: string;
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
    image:
      "/images/projects/automation-exercise.png",
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
    image:
      "/images/projects/saucedemo.png",
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
    image:
      "/images/projects/api-testing.png",
  },
];