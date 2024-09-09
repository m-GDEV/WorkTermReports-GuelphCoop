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
                        { label: "Example Guide", slug: "guides/example" },
                        {
                            label: "Introduction",
                            slug: "summer2024/introduction",
                        },
                    ],
                },
            ],
        }),
        tailwind(),
    ],
});
