// ─────────────────────────────────────────────────────────────────────────────
// workterm_answers.js
// Fill in the constants below to populate your Winter 2026 work term report.
// The Svelte components pull everything from here — you should rarely need to
// touch the .svelte files directly.
// ─────────────────────────────────────────────────────────────────────────────


/* ── 01 · ABSTRACT ──────────────────────────────────────────────────────────
   A short introduction to your work term.
   Cover: when (Jan–Apr 2026), where (CAMIS), what you did, and what you hope
   the reader takes away. 2–4 short paragraphs as separate array entries.
   ────────────────────────────────────────────────────────────────────────── */
export const ABSTRACT = {
  paragraphs: [
    `This winter, I worked at Camis Inc. as a Software Developer Co-op. This Co-op will span two work terms and this is the first of the two. In reading this report, you will learn more about the company, the goals I set for myself this semester, what my day-to-day responsibilities looked like, and the amazing people that enabled me to achieve what I did. `,
    `As a quick summary, over the course of this work term I work alongside the payment team at Camis where I was tasked with completing various tickets to help improve the company's software. Our tech stack is .NET (WPF & ASP.NET) and Angular for the frontend. Most of my time was spent on the .NET side. My focus was primarily on payment-related tickets. Some examples are: updating receipts & invoices, fixing bugs relating to fees, improving promotion codes in our system, improving performance on a page fetching lots of payment data, etc. `
  ],
};


/* ── 02 · EMPLOYER ──────────────────────────────────────────────────────────
   Describe CAMIS: what they do, their products, team, and the area of
   computing science related to the company.
   ────────────────────────────────────────────────────────────────────────── */
export const EMPLOYER = {
  // One-line tagline shown under the CAMIS heading.
  tagline: `Camis Inc. - Connecting People to a World of Memorable Experiences`,

  // Chips shown beside the company name.
  quickFacts: [
    { key: 'location', value: `Founded Guelph in 1979` },
    { key: 'industry', value: `Park Reservation and Facilities Management Software`             },
    { key: 'size',     value: `~250` },
    { key: 'product',  value: `Online Camping Reservation Site & In-Park Facility Management Application`         },
  ],

  // 2–4 paragraphs: what the company does, the area of CS it operates in,
  // interesting history, clients, or culture.
  descriptionParagraphs: [
      `As mentioned, Camis provides reservation and facility management solutions for many parks around North America. They have established their Canadian clientbase, with the vast majority of provinces and territories using our software (8/13). In addition, the company has steadily been branching out to the United States, and even internationally. Since the software is very public facing, I think it is fair to say our customers are both the parks and parks' customers. There is something special (if not slightly terrifying) about working in such a public facing industry. The main products we provide to our customers are: an online reservation website (what you'll encounter when booking with one of our clients) and a desktop application used in parks by staff.`,
      `Camis regularly employs co-op students from January to August as a way to both aid their own teams and develop up and coming developers. As a co-op student, I commend their dedication to helping junior developers get their footing in an increasingly competitive industry. The company operates as a typicaly SaaS with clients on a recurring subscription to our product. On the surface you might not expect a camping reservation company to have complicated architecture or very much thought put into engineering a solution. You could not be more wrong. On the surface it might seem trivial to create a reservation system, but behind the curtain there is the complexity of: managing customer expectations with our own priorities, maintaining historical data (especially financial), managing simultaneous deployments of 20+ customers, etc. Suffice it to say, I was surprised at the work necessary to maintain our ever-growing system. `
  ],

  // Small cards at the bottom of the section.
  // Add or remove objects freely.
  interestingFacts: [
    { label: 'Fact', value: `Camis provides the camping reservation software for most government organizations in Canada (Ontario Parks, Parks Canada, etc)!` },
    { label: 'Fact', value: `The largest git commit in our repository is 10,000,000+ lines!` },
    { label: 'Fact', value: `Many of the employees are previous co-op students!` },
  ],
};


/* ── 03 · GOALS ─────────────────────────────────────────────────────────────
   Three learning goals for the work term.
   Each goal has four fields:
     title           — short name of the goal
     goal            — what you wanted to learn/achieve (the Specific part)
     actionPlan      — how you planned to achieve it (the Achievable part)
     measureOfSuccess — how you'd know you achieved it (the Measurable part)
     reflection      — did you achieve it? what went well / what didn't?
   ────────────────────────────────────────────────────────────────────────── */
export const GOALS_INTRO = 'It was difficult choosing my goals (as always) because there were so many interesting goals I was interested in pursuing. In the end, I managed to select the three goals I thought were most interesting and achievable over this fourth month period.';

export const GOALS = [
  {
    n: '01',
    title: `Get really good at leveraging AI for productivity`,
    goal: `I would like to learn more about how I can leverage AI to be more productive for work and for personal projects. In particular, I would like to learn more about agentic coding tools such as claude code. Additionally, I would like to learn more generally about AI itself (LLMs, etc) and how it works.
`,
    actionPlan: ``,
    measureOfSuccess: `When I have acheived this goal, I will be proficient in using claude code. I will know the ins and outs of the tool and how to best use it in different scenarios. I will have acheived the knowledge portion of this goal by reading at least 3 AI related articles a week over the course of the semster.`,
    reflection: `[ Did you achieve it? What went well? What would you do differently? ]`,
  },
  {
    n: '02',
    title: `Learn about payment processing, gateways, etc and how camis uses them`,
    goal: `I would like to learn more about how payment works in general and what the domain looks like exactly. This includes payement processors, gateways, etc and how the whole system works togehter from a customer initiating a transaction to payment being received.
`,
    actionPlan: ``,
    measureOfSuccess: `When I have achieved this goal, I will be able to explain how the system functions  with relative accuracy and which components connect to which. In addition, I will be able to explain Camis’ role in the payment domain and how it interacts with it.
`,
    reflection: `[ Reflect on this goal. ]`,
  },
  {
    n: '03',
    title: `Improve my ability to work & communicate effectively on software development and other crossfunctional teams`,
    goal: `I would like to improve my ability to effectively on a software development team. Additionally, I want to learn how to work with other technical and non-technical teams such that I am able to effectively communicate with them and come to resolutions easily and without confusion.
`,
    actionPlan: `[ How did you plan to achieve this goal? ]`,
    measureOfSuccess: `When I have acheived this goal, I will feel more confident working on any future software team. I will know exactly how to communicate effectively to people/teams of various technical ability. I will be able to measure this by determining whether it is easier for me to work effectively with the teams mentioned compared to when I started working this semester. Additionally, I will know how best to communicate such that I am able to achieve the mutual goals I have with those who I am working with, in the most effecient way possible.
`,
    reflection: `[ Reflect on this goal. ]`,
  },
];


/* ── 04 · JOB DESCRIPTION ───────────────────────────────────────────────────
   Overview of your role: responsibilities, interesting/unique aspects,
   skills used/learned, and a note on coursework vs. on-the-job learning.
   ────────────────────────────────────────────────────────────────────────── */
export const JOB = {
  title: `Software Developer Co-op`,
  team:  `Payment Squad`,

  // 2–4 paragraphs: overview of your role, the project(s) you worked on,
  // the most interesting/unique aspects, and the most challenging parts.
  overviewParagraphs: [
    `[ Paragraph 1 — Give an overview of your role and main responsibilities
     at CAMIS. What project(s) did you contribute to? ]`,

    `[ Paragraph 2 — Highlight the most interesting or unique aspects of your
     job. What was the most challenging part? What did you enjoy most? ]`,

      `mention:
      - recon work 
      - claude code / ai 
      - v-model
      `
  ],

  // Skill groups shown in the "skills used & learned" table.
  // Edit category names and skill strings freely; add or remove rows.
  skillGroups: [
    { category: 'Languages & Frameworks', skills: ['.NET 9.0', 'ASP.NET', 'MSSQL', 'WPF', 'Angular'] },
    { category: 'Tools',      skills: ['Claude Code', 'Visual Studio', 'Sql Server Management Studio (SSMS)', 'Visual Studio Code', 'WSL', 'Claude CoWork', 'Docker', 'Redis', 'Git' ] },
    { category: 'Platforms',      skills: ['Jenkins', 'Octopus Deploy', 'Github', 'Jira', 'Confluence', 'Git' ] },
    { category: 'Concepts & Practices',   skills: ['SOLID Principles', 'Domain Driven Design', 'Unit Testing', 'Integration Testing', 'e2e Testing', 'Monolithic Codebase'] },
  ],

  // 1–2 paragraphs on which skills came from your UofG courses vs. learned
  // on the job. Did your coursework prepare you well?
  classroomVsJob: `[ Describe which skills came from your university courses vs. skills
    you picked up on the job at CAMIS. Did your coursework prepare you well for
    this role? What did you have to learn independently? ]`,
};


/* ── 05 · CONCLUSIONS ───────────────────────────────────────────────────────
   Review and repeat what is important. 2–3 paragraphs.
   If someone only read this section, what would you want them to know?
   ────────────────────────────────────────────────────────────────────────── */
export const CONCLUSIONS = {
  paragraphs: [
    `[ Paragraph 1 — Review the key points of your work term. What is the most
     important thing you learned? If someone only read your abstract and this
     section, what would you want them to take away? ]`,

    `[ Paragraph 2 — How has this work term shaped your perspective, skills, or
     career direction? What are you most proud of? What would you do differently? ]`,
  ],
};


/* ── 06 · ACKNOWLEDGMENTS ───────────────────────────────────────────────────
   Thank anyone or anything that deserves recognition.
   Set people to [] to hide the thank-you cards.
   ────────────────────────────────────────────────────────────────────────── */
export const ACKNOWLEDGMENTS = {
  // Main prose acknowledgment paragraph.
  paragraph: `[ Thank your manager, teammates, co-op coordinator, professors,
    or anyone else who supported your Winter 2026 work term at CAMIS. ]`,

  // Optional thank-you cards. Set to [] to hide the grid entirely.
  people: [
    { name: `Taylor Poulin`, role: `Direct Manager`, note: `Thank you so much for creating a welcoming environment and making me feel like I belong on the team.` },
    { name: `Andrew Steinbach`, role: `Team Lead`, note: `Thank you for taking the time and answering every question I had, trivial or not, in depth and making sure I understood.` },
    { name: `The rest of the Payment Squad`, role: `Payment Squad`, note: `Thank you everyone for being so welcoming and helping me get started at the company. If it wasn't for you guys I would be much worse off.` },
    { name: `My fellow Co-ops`, role: `Colleagues`, note: `Thank you for making every day interesting with our daily lunch discussions. I also really enjoyed our talks during the day.` },
  ],
};
