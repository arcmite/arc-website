import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "ARC",
  description: "A start-to-finish modding reference for Assetto Corsa.",

  // BASE LINK FOR GITHUB PAGES
  base: "/assetto-corsa-arc/",

  // will pull from docs/public
  head: [
    ['link', { rel: 'icon', href: 'images/ARC1.png' }],
  ],

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {
    // The main navigation bar at the top of the page
    nav: [
      { text: "Guides", link: "/guides/welcome" },
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
        { text: "Introduction", link: "/guides/welcome" },
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
            { text: "Root Folder & File Structure", link: "/guides/modding/root-folder" },
            { text: "Installing Mods", link: "/guides/modding/installing-mods" },
          ],
        },
        {
          text: "Visuals",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guides/visuals/overview" },
            { text: "Post-Processing Filters", link: "/guides/visuals/ppfilters" },
            { text: "Pure Config", link: "/guides/visuals/pconfig" },
          ],
        },
        {
          text: "Other Guides",
          collapsed: true,
          items: [{ text: "Photo Mode", link: "/guides/other/photo-mode" }],
        },
      ],
      // This sidebar will be shown on all pages under the /creators/ path
      "/creators/": [
        {
          text: "Creators & Modders",
          collapsed: false,
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
          collapsed: false,
          items: [
            { text: "Custom Shaders Patch", link: "/wiki/csp" },
            { text: "Lua", link: "/wiki/lua" },
            { text: "Look Up Tables", link: "/wiki/lut" },
            { text: "Post-Processing Filters", link: "/wiki/ppfilter" },
            { text: "Pure", link: "/wiki/pure" },
          ],
        },
      ],
      // This sidebar will be shown on all pages under the /docs/ path
      "/docs/": [
        {
          text: "About The Project",
          collapsed: false,
          items: [
            { text: "Project Roadmap", link: "/docs/roadmap" },
            { text: "Changelog", link: "/docs/changelog" },
          ],
        },
        {
          text: "Contributing",
          collapsed: false,
          items: [
            { text: "How to Contribute", link: "/docs/contributing" },
            { text: "Style Guide", link: "/docs/style-guide" },
            { text: "Meet the Team", link: "/docs/contributors" },
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
