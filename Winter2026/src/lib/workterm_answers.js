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
  tagline: `[ Full company name or tagline — e.g. "CAMIS Inc. — Park & Recreation Management Software" ]`,

  // Chips shown beside the company name.
  quickFacts: [
    { key: 'location', value: `[ City, Province/State ]` },
    { key: 'industry', value: `[ Industry ]`             },
    { key: 'size',     value: `[ # employees ]`          },
    { key: 'product',  value: `[ Main product ]`         },
  ],

  // 2–4 paragraphs: what the company does, the area of CS it operates in,
  // interesting history, clients, or culture.
  descriptionParagraphs: [
    `[ Paragraph 1 — Describe what CAMIS does and their main product or service.
     What problem do they solve? Who are their customers? ]`,

    `[ Paragraph 2 — Describe the area of computing science most relevant to CAMIS
     (e.g. enterprise SaaS, cloud infrastructure, etc.). Include interesting facts
     about the company: history, location, team size, or culture. ]`,
  ],

  // Small cards at the bottom of the section.
  // Add or remove objects freely.
  interestingFacts: [
    { label: 'Fact', value: `[ Interesting fact about CAMIS ]` },
    { label: 'Fact', value: `[ Interesting fact about CAMIS ]` },
    { label: 'Fact', value: `[ Interesting fact about CAMIS ]` },
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
export const GOALS_INTRO = '';

export const GOALS = [
  {
    n: '01',
    title: `[ Goal Title ]`,
    goal: `[ What did you want to learn or achieve? Be specific. ]`,
    actionPlan: `[ How did you plan to achieve this goal? What steps did you take? ]`,
    measureOfSuccess: `[ How would you know when you achieved this goal? ]`,
    reflection: `[ Did you achieve it? What went well? What would you do differently? ]`,
  },
  {
    n: '02',
    title: `[ Goal Title ]`,
    goal: `[ What did you want to learn or achieve? ]`,
    actionPlan: `[ How did you plan to achieve this goal? ]`,
    measureOfSuccess: `[ How would you measure success? ]`,
    reflection: `[ Reflect on this goal. ]`,
  },
  {
    n: '03',
    title: `[ Goal Title ]`,
    goal: `[ What did you want to learn or achieve? ]`,
    actionPlan: `[ How did you plan to achieve this goal? ]`,
    measureOfSuccess: `[ How would you measure success? ]`,
    reflection: `[ Reflect on this goal. ]`,
  },
];


/* ── 04 · JOB DESCRIPTION ───────────────────────────────────────────────────
   Overview of your role: responsibilities, interesting/unique aspects,
   skills used/learned, and a note on coursework vs. on-the-job learning.
   ────────────────────────────────────────────────────────────────────────── */
export const JOB = {
  title: `[ Your Job Title ]`,
  team:  `[ Team / Department ]`,

  // 2–4 paragraphs: overview of your role, the project(s) you worked on,
  // the most interesting/unique aspects, and the most challenging parts.
  overviewParagraphs: [
    `[ Paragraph 1 — Give an overview of your role and main responsibilities
     at CAMIS. What project(s) did you contribute to? ]`,

    `[ Paragraph 2 — Highlight the most interesting or unique aspects of your
     job. What was the most challenging part? What did you enjoy most? ]`,
  ],

  // Skill groups shown in the "skills used & learned" table.
  // Edit category names and skill strings freely; add or remove rows.
  skillGroups: [
    { category: 'Languages & Frameworks', skills: [`[ Skill ]`, `[ Skill ]`, `[ Skill ]`] },
    { category: 'Tools & Platforms',      skills: [`[ Tool ]`,  `[ Tool ]`,  `[ Tool ]` ] },
    { category: 'Concepts & Practices',   skills: [`[ Concept ]`, `[ Concept ]`         ] },
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
    { name: `[ Name ]`, role: `[ Role / Relation ]`, note: `[ Brief note of thanks ]` },
    { name: `[ Name ]`, role: `[ Role / Relation ]`, note: `[ Brief note of thanks ]` },
    { name: `[ Name ]`, role: `[ Role / Relation ]`, note: `[ Brief note of thanks ]` },
  ],
};
