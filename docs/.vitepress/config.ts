import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "ARC",
  description: "A start-to-finish modding reference for Assetto Corsa.",

  // BASE LINK FOR GITHUB PAGES
  base: "/assetto-corsa-arc/",

  themeConfig: {
    // The main navigation bar at the top of the page
    nav: [
      { text: "Guides", link: "/guides/" },
      { text: "Creators", link: "/creators/" },
      { text: "Wiki", link: "/wiki/" },
      { text: "Showcase", link: "/showcase/" },
      { text: "Docs", link: "/docs/" },
    ],

    // The sidebar configuration. VitePress automatically shows the
    // correct sidebar based on the user's current location.
    sidebar: {
      // This sidebar will be shown on all pages under the /guides/ path
      "/guides/": [
        {
          text: "Installation & Setup",
          items: [{ text: "Getting Started", link: "/guides/getting-started" }],
        },
        {
          text: "Modding",
          items: [
            { text: "Installing Mods", link: "/guides/installing-mods" },
            { text: "Photo Mode", link: "/guides/photo-mode" },
          ],
        },
      ],
      // This sidebar will be shown on all pages under the /creators/ path
      "/creators/": [
        {
          text: "Creators & Modders",
          items: [
            { text: "Ilja Jusupov", link: "/creators/ilja-jusupov" },
            { text: "Peter Boese", link: "/creators/peter-boese" },
            { text: "Foo-Bar", link: "/creators/foo-bar" },
          ],
        },
      ],
      // This sidebar will be shown on all pages under the /wiki/ path
      "/wiki/": [
        {
          text: "Wiki",
          items: [
            { text: "Custom Shaders Patch", link: "/wiki/csp" },
            { text: "Look Up Tables", link: "/wiki/lut" },
            { text: "Post-Processing Filters", link: "/wiki/ppfilter" },
            { text: "Pure", link: "/wiki/pure" },
          ],
        },
      ],
      // This sidebar will be shown on all pages under the /docs/ path
      "/docs/": [
        {
          text: "Project Documentation",
          items: [
            { text: "About this Project", link: "/docs/" },
            { text: "How to Contribute", link: "/docs/contributing" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/creacher4/assetto-corsa-arc",
      },
      { icon: "discord", link: "https://discord.gg/Szd4nu4wEp" },
    ],

    footer: {
      message: "Built with VitePress.",
      copyright: "Copyright © 2025 | The ARC Team",
    },

    editLink: {
      pattern:
        "https://github.com/creacher4/assetto-corsa-arc/edit/vitepress-rewrite/docs/:path",
      text: "Edit this page on GitHub",
    },

    // The 'lastUpdated' feature requires Git. It was disabled here to prevent
    // the 'spawn git ENOENT' error in environments without Git installed.
    lastUpdated: {
      text: "Last Updated",
    },

    // Enables local full-text search
    search: {
      provider: "local",
    },
  },
});
