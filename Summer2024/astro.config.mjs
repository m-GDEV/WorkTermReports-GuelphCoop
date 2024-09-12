// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "WTR Summer 2024",
            social: {
                github: "https://github.com/m-GDEV/WorkTermReports-GuelphCoop",
            },
            sidebar: [
                {
                    label: "Summer 2024",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        // { label: "Example Guide", slug: "guides/example" },
                        {
                            label: "Introduction",
                            slug: "summer2024/introduction",
                        },
                        {
                            label: "Information about the Employer",
                            slug: "summer2024/informationabouttheemployer",
                        },
                        { label: "Goals", slug: "summer2024/goals" },
                        {
                            label: "Job Description",
                            slug: "summer2024/jobdescription",
                        },
                        {
                            label: "Conclusions",
                            slug: "summer2024/conclusions",
                        },
                        {
                            label: "Acknowledgements",
                            slug: "summer2024/acknowledgements",
                        },
                    ],
                },
            ],
        }),
        tailwind(),
    ],
});
