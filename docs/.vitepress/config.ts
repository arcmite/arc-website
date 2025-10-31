import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "ARC",
  description: "A start-to-finish modding reference for Assetto Corsa.",

  // BASE LINK FOR GITHUB PAGES
  base: "/arc-website/",

  // will pull from docs/public
  head: [
    ['link', { rel: 'icon', href: 'images/brand/ARC.png' }],
  ],

  markdown: {
    image: {
      lazyLoading: true,
    },
    theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
    lineNumbers: true
  },

  themeConfig: {
    // The main navigation bar at the top of the page
    nav: [
      { text: "Guides", link: "/guides/get-started" },
      { text: "Creators", link: "/creators/" },
      { text: "Wiki", link: "/wiki/" },
      { text: "Showcase", link: "/showcase/" },
      { text: "About",
        items: [
          { text: "About ARC", link: "/about/overview" },
          { text: "Changelog", link: "https://github.com/arcmite/arc-website/commits/vitepress-rewrite/" },
          // Will be replaced with a link to an actual roadmap when it's ready
          { text: "Roadmap", link: "https://github.com/arcmite/arc-website"},
        ],
      },
    ],

    // The sidebar configuration. VitePress automatically shows the
    // correct sidebar based on the user's current location.
    sidebar: {
      // This sidebar will be shown on all pages under the /guides/ path
      "/guides/": [
        { text: "Get Started", link: "/guides/get-started" },
        { text: "Requirements", link: "/guides/requirements" },
        {
          text: "Setup",
          collapsed: false,
          items: [
            { text: "Content Manager", link: "/guides/setup/installing-cm" },
            { text: "Custom Shaders Patch", link: "/guides/setup/installing-csp" },
            { text: "Pure", link: "/guides/setup/installing-pure" },
          ],
        },
        {
          text: "Modding",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guides/modding/overview" },
            { text: "Root Folder", link: "/guides/modding/root-folder" },
            { text: "Installing Mods", link: "/guides/modding/installing-mods" },
            { text: "Recommended Mods", link: "/guides/modding/recommended-mods.md" },
          ],
        },
        {
          text: "Visuals",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guides/visuals/overview" },
            { text: "Post-Processing Filters", link: "/guides/visuals/ppfilters" },
            { text: "Pure Config", link: "/guides/visuals/pure-config" },
          ],
        },
        {
          text: "Other Guides",
          collapsed: true,
          items: [{ text: "Photo Mode", link: "/guides/other/photo-mode" }],
        },
      ],
      // This sidebar will be shown on all pages under the /creators/ path
      // consider rehauling the headings for these, when adding more creators
      "/creators/": [
        {
          text: "Creators & Modders",
          collapsed: false,
          items: [
            { text: "Foo Bar", link: "/creators/foo-bar" },
            { text: "Ilja Jusupov", link: "/creators/ilja-jusupov" },
            { text: "Peter Boese", link: "/creators/peter-boese" },
            { text: "compu", link: "/creators/compu" },
            { text: "DasCiba", link: "/creators/das-ciba" },
            { text: "OMEGA", link: "/creators/omega" }
          ],
        },
      ],
      // This sidebar will be shown on all pages under the /wiki/ path
      "/wiki/": [
        {
          text: "Wiki",
          collapsed: false,
          items: [
            { text: "Custom Shaders Patch", link: "/wiki/csp" },
            { text: "7-zip", link: "/wiki/7-zip"},
            { text: "Lua", link: "/wiki/lua" },
            { text: "Look Up Tables", link: "/wiki/lut" },
            { text: "Post-Processing Filters", link: "/wiki/ppfilter" },
            { text: "Pure", link: "/wiki/pure" },
          ],
        },
      ],
      // This sidebar will be shown on all pages under the /about/ path
      "/about/": [
        { text: "Overview", link: "/about/overview" },
        { text: "Meet the Team", link: "/about/contributors" },
        {
          text: "Contributing",
          collapsed: false,
          items: [
            { text: "How to Contribute", link: "/about/contributing" },
            { text: "Style Guide", link: "/about/style-guide" }
          ],
        },
      ],
    },

    // The toc on the right side of the page
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    // Social links part of the header
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/arcmite/arc-website",
      },
      { icon: "discord", link: "https://discord.gg/Szd4nu4wEp" },
    ],

    footer: {
      message: "Built with VitePress.",
      copyright: "Copyright © 2025-present ARC",
    },

    editLink: {
      pattern:
        "https://github.com/arcmite/arc-website/edit/vitepress-rewrite/docs/:path",
      text: "Edit this page on GitHub",
    },

    // The 'lastUpdated' feature requires Git. It can be disabled here to prevent
    // the 'spawn git ENOENT' error in environments without Git installed.
    // lastUpdated: false,
    lastUpdated: {
      text: "Last Updated",
    },


    // Enables local full-text search
    // the detailed view is set as default because it's just better
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
  },
});
