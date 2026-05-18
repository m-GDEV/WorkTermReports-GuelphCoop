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
        `As a quick summary, over the course of this work term I work alongside the payment team at Camis where I was tasked with completing various tickets to help improve the company's software. Our tech stack is .NET (WPF & ASP.NET) and Angular for the frontend. Most of my time was spent on the .NET side. My focus was primarily on payment-related tickets. Some examples are: updating receipts & invoices, fixing bugs relating to fees, improving promotion codes in our system, improving performance on a page fetching lots of payment data, etc. `,
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
        { key: "location", value: `Founded Guelph in 1979` },
        {
            key: "industry",
            value: `Park Reservation and Facilities Management Software`,
        },
        { key: "size", value: `~250` },
        {
            key: "product",
            value: `Online Camping Reservation Site & In-Park Facility Management Application`,
        },
    ],

    // 2–4 paragraphs: what the company does, the area of CS it operates in,
    // interesting history, clients, or culture.
    descriptionParagraphs: [
        `As mentioned, Camis provides reservation and facility management solutions for many parks around North America. They have established their Canadian clientbase, with the vast majority of provinces and territories using our software (8/13). In addition, the company has steadily been branching out to the United States, and even internationally. Since the software is very public facing, I think it is fair to say our customers are both the parks and parks' customers. There is something special (if not slightly terrifying) about working in such a public facing industry. The main products we provide to our customers are: an online reservation website (what you'll encounter when booking with one of our clients) and a desktop application used in parks by staff.`,
        `Camis regularly employs co-op students from January to August as a way to both aid their own teams and develop up and coming developers. As a co-op student, I commend their dedication to helping junior developers get their footing in an increasingly competitive industry. The company operates as a typically SaaS with clients on a recurring subscription to our product. On the surface you might not expect a camping reservation company to have complicated architecture or very much thought put into engineering a solution. You could not be more wrong. On the surface it might seem trivial to create a reservation system, but behind the curtain there is the complexity of: managing customer expectations with our own priorities, maintaining historical data (especially financial), managing simultaneous deployments of 20+ customers, etc. Suffice it to say, I was surprised at the work necessary to maintain our ever-growing system. `,
    ],

    // Small cards at the bottom of the section.
    // Add or remove objects freely.
    interestingFacts: [
        {
            label: "Fact",
            value: `Camis provides the camping reservation software for most government organizations in Canada (Ontario Parks, Parks Canada, etc)!`,
        },
        {
            label: "Fact",
            value: `The largest git commit in our repository is 10,000,000+ lines!`,
        },
        {
            label: "Fact",
            value: `Many of the employees are previous co-op students!`,
        },
    ],
};

/* ── 03 · GOALS ─────────────────────────────────────────────────────────────
   First entry: goals list — add/remove items freely.
   Remaining entries: Q&A — fill in the answer field.
     answer: use \n\n between paragraphs
   ────────────────────────────────────────────────────────────────────────── */
export const GOALS = [
    {
        question: `Goals Chosen`,
        goals: [
            `Get really good at leveraging AI for productivity`,
            `Learn about payment processing, gateways, etc and how Camis uses them`,
            `Improve my ability to work & communicate effectively on software development and other crossfunctional teams`,
        ],
    },
    {
        question: `Preamble`,
        answer: `I would say that my goals are quite related to my day-to-day responsibilities at work. About a quarter of the way through the workterm, the company hired a new CTO and quickly shifted to becoming much more AI focused in all aspects of development. So my first goal is highly related to the reality of my work. My second goal is about learning more about concepts in the payment domain. Being on the payment squad I thought this was a great goal, not only to understand things more while working, but because I'm actually interested in learning about this area. Seeing a pin pad in a TV show or real life and being able to say "I've worked with that!" is pretty cool. While my final goal is pretty general, I chose it because I find myself partaking in cross-team discussions on a daily basis and I think it is worthwhile to develop my communication in this area. \n\n For my first goal I was already very familiar with LLMs and prompt engineering. Because of this, I chose to specifically focus on learning supplementary AI tools. For this work term, the main tool I focused on learning was Claude Code. I think this tool is a genuine breakthrough in LLM assisted development and that knowing how to use these tools effectively will be crucial in securing future software engineering positions. In addition, I think tools like this can be beneficial for productivity which is exactly which I made this my goal. For my second goal, I wanted to not only learn about the concepts in the payment domain, but how to Camis interacts with them. To achieve this goal, I worked directly with a Pin Pad, worked on a ticket related to PCI DSS (Payment Card Industry Data Security Standard), and much more. I enjoyed learning more about how the payment realm works in the real world and I think this knowledge will be crucial if I choose to enter the FinTech space.For my last goal, I wanted to learn how to best communicate between technical and non-technical teams. As I gain more work experience, it becomes more apparent that communication is one of the most important skills in our industry. While development is important, if the key stakeholders cannot/do not understand what we're doing as developers it is essentially meaningless. This goal was not only very relevant to my responsibilities at Camis, but I expect them to be evermore important in light of AI assisted coding.`,
    },
    {
        question: `Reflection`,
        reflections: [
            `I am very happy with my completion of my first goal. I learned a lot more about AI tools this work term. Claude Code and the surrounding ecosystem created by Anthropic was my main focus as this is the AI 'tech stack' selected by the company. Since this 'stack' was chosen mid-way through the work term, it was really interesting learning more about these tools alongside experienced developers. I am confident I have learned enough about these tools to harness them effectively to increase my productivity.`,
            `Upon reflection of this goal, I am pretty satisfied with my progress. While I can't claim to understand everything in the payment domain, I definitely know a lot more than when I started. When participating in meetings at work I feel like I have a much better intuitive sense for what is being discussed. In addition, I purposefully tasked myself with tickets that would help facilitate my accomplishment of this goal. One in particular was especially helpful, as it had me trudging through the different payment services our product supports and comparing and contrasting them. Overall, there is a lot more learning that is possible, but I'm happy with what I accomplished.`,
            `Like many goals I've made in the past, this goal will continue to be a goal for likely my entire career. With a goal like this, one can never full achieve it as there is always opportunity for improvement. Nonetheless, in this last workterm I feel I have learned a lot about cross-team communication. Camis has provided a new opportunity for me, wherein I was able to not only work with developers on a daily basis, but I was also able to work with people in Product. Participating in discussions with Payment Squad and Product taught me a lot about how best to communicate across skill sets. I look forward to continue working on this goal.`,
        ],
    },
];

/* ── 04 · JOB DESCRIPTION ───────────────────────────────────────────────────
   Overview of your role: responsibilities, interesting/unique aspects,
   skills used/learned, and a note on coursework vs. on-the-job learning.
   ────────────────────────────────────────────────────────────────────────── */
export const JOB = {
    title: `Software Developer Co-op`,
    team: `Payment Squad`,

    // 2–4 paragraphs: overview of your role, the project(s) you worked on,
    // the most interesting/unique aspects, and the most challenging parts.
    overviewParagraphs: [
        `My primary role was to be a full-stack developer and contribute to the work done by the Payment Squad. This entailed participating in their bi-weekly sprints and taking on tickets therein. Over the course of this work term, I learned a lot about how payment and payment adjacent parts of the company's software function. From learning more about WPF, to invoice generation, to revenue data and how to optimize the gigantic amount of it, and to how our software interacts with pin pads, every step of the way was interesting and I've truly learned a lot. At the beginning of a sprint we'd typically choose N tickets we thought were completable during the sprint (based on team member availability, ticket effort, holidays, etc). After that, team members would continuously pick up new tickets. About half-way through the work term, our new CTO instituted a new SDLC called the V-Model which was a major departure from the pseudo-agile process we had been following hitherto. This model of development was initially used on Aerospace engineering. The argument made for this new system was that since AI can code decently well, we can now spend time otherwise spent coding on creating and maintaining specific product requirements and documentation. The efficacy of the system is yet to be determined. Regardless, this new system caused major downstream changes across our SDLC as we were not integrating Claude into every step. Incidentally, this was a great opportunity to accomplish Goal #1.`,

        `I contributed to a number of projects during the workterm. Majority of my time was spent developing our WPF Windows desktop application with its corresponding back-end API. I also briefly worked on our web application (which was really cool because it is very public facing!). The most interesting and challenging part of my job was a combination of learning parts of the tech stack I had not worked with (WPF, T-SQL, Angular), and learning how to manage our large monolithic codebase. Getting to grips with the codebase and having a good intuition of where things are was a very satisfying feeling. One of the more unique aspects of my work over the last work term was covering for one of the company's Financial Analysts when they went on vacation. Having little experience in this area, I naturally only covered a small subset of their daily responsibilities. For about a week beforehand, I was trained on how to reconcile payments and revenue for some clients. Then, for ~3-4 weeks, I reconciled transactions for various clients. Having previously worked directly with the payment team, it was incredibly interesting to see the other side, being an actual user of the software. It helped me better understand what the SDLC looks like, for both those developing the software, and those using the software. `,
    ],

    // Skill groups shown in the "skills used & learned" table.
    // Edit category names and skill strings freely; add or remove rows.
    skillGroups: [
        {
            category: "Languages & Frameworks",
            skills: [".NET 9.0", "ASP.NET", "MSSQL", "WPF", "Angular"],
        },
        {
            category: "Tools",
            skills: [
                "Claude Code",
                "Visual Studio",
                "Sql Server Management Studio (SSMS)",
                "Visual Studio Code",
                "WSL",
                "Claude CoWork",
                "Docker",
                "Redis",
                "Git",
            ],
        },
        {
            category: "Platforms",
            skills: [
                "Jenkins",
                "Octopus Deploy",
                "Github",
                "Jira",
                "Confluence",
                "Git",
            ],
        },
        {
            category: "Concepts & Practices",
            skills: [
                "SOLID Principles",
                "Domain Driven Design",
                "Unit Testing",
                "Integration Testing",
                "e2e Testing",
                "Monolithic Codebase",
            ],
        },
    ],
};

/* ── 05 · CONCLUSIONS ───────────────────────────────────────────────────────
   Review and repeat what is important. 2–3 paragraphs.
   If someone only read this section, what would you want them to know?
   ────────────────────────────────────────────────────────────────────────── */
export const CONCLUSIONS = {
    paragraphs: [
        `To conclude, this was a great work term. Potentially the best so far. Between being more experienced, this being my first in-office position, and being given more responsibility, this work term was very fulfilling. I enjoyed settings and accomplishing my goals. I'd say the most important thing I learned, and I continue learning, is that AI is simply a tool. As much as we might like to delude ourselves that LLMs are somehow intelligent, they are not. In fact, I created a document for myself to help me identify valid and invalid cases for when to use AI. As a student and employee there can be a lot of pressure to move so quickly (using AI) that you learn nothing in the process. I really want to avoid that. I would say I'm most proud of my ability to relatively quickly adapt to a somewhat new tech stack. While the foundation was similar to my previous co-op, there was substantial effort required initially to learn how Camis builds their software. I feel I was able to learn this quick enough that it didn't impact my productivity too much. With regard to what I'd do differently, I think I would have liked to take more initiative when picking up new tasks. Oftentimes there would be a task I felt was out of my scope, maybe due to perceived lack of skills or knowledge, I opted to take an easier task instead. Had I chosen more difficult tasks earlier, it might have accelerated my learning and gotten me on my feet faster. Overall this was a great work term and I look forward to the next one.`,
    ],
};

/* ── 06 · ACKNOWLEDGMENTS ───────────────────────────────────────────────────
   Thank anyone or anything that deserves recognition.
   Set people to [] to hide the thank-you cards.
   ────────────────────────────────────────────────────────────────────────── */
export const ACKNOWLEDGMENTS = {
    // Main prose acknowledgment paragraph.
    paragraph: `I'd like to thank Camis for hiring me and offering me the change to develop my skills as a Junior developer. Their dedication to hiring UofG students and developing local talent is admirable. I would also like to thank all of the people I work with on a daily basis. Everyone at the company has been very friendly and welcoming, always making sure to answer any questions of mine to the best of their ability. Thank you!`,

    // Optional thank-you cards. Set to [] to hide the grid entirely.
    people: [
        {
            name: `Taylor Poulin`,
            role: `Direct Manager`,
            note: `Thank you so much for creating a welcoming environment and making me feel like I belong on the team.`,
        },
        {
            name: `Andrew Steinbach`,
            role: `Team Lead`,
            note: `Thank you for taking the time and answering every question I had, trivial or not, in depth and making sure I understood.`,
        },
        {
            name: `The rest of my team`,
            role: `Payment Squad`,
            note: `Thank you everyone for being so welcoming and helping me get started at the company. If it wasn't for you guys I would be much worse off.`,
        },
        {
            name: `My fellow Co-ops`,
            role: `Colleagues`,
            note: `Thank you for making every day interesting with our daily lunch discussions. I also really enjoyed our talks during the day; I look forward to more in our upcoming work term together!`,
        },
    ],
};
