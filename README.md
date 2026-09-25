# Masuel Matos — QA Automation Portfolio

Personal portfolio website focused on **QA Engineering, QA Automation, and software quality**.

The site presents my professional profile, technical skills, automation projects, certifications, and contact information through a responsive bilingual experience.

## ✨ Features

- 🌐 **Bilingual interface:** English / Spanish with language persistence.
- 🌓 **Light / Dark mode:** theme switching with persistence.
- 📱 **Responsive design:** optimized for desktop, tablet, and mobile.
- ♿ **Accessibility-focused UI:** semantic elements, keyboard focus states, labels, and interactive feedback.
- 🧪 **QA Automation portfolio:** projects centered on web and API testing.
- 📁 **Projects section:** highlights practical automation work and testing technologies.
- 🎓 **Certifications section:** organized presentation of professional learning and certifications.
- 📩 **Functional contact form:** messages are processed through a Next.js API route and delivered using Resend.
- ⬆️ **Back to top:** smooth navigation back to the Home section.
- 🔗 **Professional links:** LinkedIn, GitHub, and email.
- 🔍 **SEO-ready structure:** metadata and semantic page organization.

## 🛠️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Contact / Backend

- Next.js App Router
- Next.js API Route
- [Resend](https://resend.com/) for email delivery

### QA / Automation Focus

- Playwright
- Python
- Pytest
- Web Testing
- API Testing
- Functional Testing
- Page Object Model
- Test Automation

## 📂 Project Structure

```text
Portfolio/
├── app/                    # Next.js application routes and global styles
├── components/             # Reusable UI components
├── data/                   # Portfolio/project data
├── locales/                # Spanish and English content
├── public/                 # Static assets
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Masuelm04/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

> **Important:** Never commit `.env.local` or expose your Resend API key in client-side code.

### 4. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## 📧 Contact Form

The contact form sends submissions to the portfolio's backend endpoint:

```text
POST /api/contact
```

The API validates the submitted information and uses Resend to deliver the message to the configured destination email.

The following environment variables are required:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

## 🧪 Quality & Validation

Before deployment, the project should be validated with:

```bash
npm run lint
npm run build
```

A successful production build confirms that the application is ready to be deployed.

## 🌍 Deployment

The project is designed to be deployed with platforms that support Next.js, such as **Vercel**.

For production deployment, configure the same environment variables in the hosting platform:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_email@example.com
```

Do **not** upload `.env.local` to the repository.

## 📌 Portfolio Sections

The website currently includes:

- **Home** — professional introduction and primary call to action.
- **About** — professional background and profile.
- **Skills** — technologies and QA-related competencies.
- **Projects** — selected QA Automation projects.
- **Certifications** — completed courses and certifications.
- **Contact** — professional contact information and functional messaging form.

## 👨‍💻 Author

**Masuel Matos**

QA Engineer specializing in **QA Automation**, building robust, reliable, and maintainable testing solutions.

- LinkedIn: [linkedin.com/in/masuelmatos](https://www.linkedin.com/in/masuelmatos/)
- GitHub: [github.com/Masuelm04](https://github.com/Masuelm04)

---
