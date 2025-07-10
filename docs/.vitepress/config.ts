import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "ARC",
  description: "A start-to-finish modding reference for Assetto Corsa.",

  // BASE LINK FOR GITHUB PAGES
  base: "/assetto-corsa-arc/",

  head: [
    ['link', { rel: 'icon', href: '/assetto-corsa-arc/images/ARC1.png' }]
  ],

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {
    // The main navigation bar at the top of the page
    nav: [
      { text: "Guides", link: "/guides/install-setup/welcome" },
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
          collapsed: false,
          items: [
            { text: "Introduction", link: "/guides/install-setup/welcome" },
            { text: "Requirements", link: "/guides/install-setup/requirements" },
            {
              text: "Installation",
              collapsed: true,
              items: [
                {
                  text: "Content Manager",
                  link: "/guides/install-setup/installation/installing-cm",
                },
                {
                  text: "Custom Shaders Patch",
                  link: "/guides/install-setup/installation/installing-csp",
                },
                {
                  text: "Pure",
                  link: "/guides/install-setup/installation/installing-pure",
                },
              ],
            },
          ],
        },
        {
          text: "Modding",
          collapsed: true,
          items: [
            {
              text: "Basics",
              link: "/guides/modding/modding-basics",
            },
            {
              text: "Root Folder",
              collapsed: true,
              items: [
                {
                  text: "What is it?",
                  link: "/guides/modding/root-directory/root-directory",
                },
                {
                  text: "Structure",
                  link: "/guides/modding/root-directory/rd-structure",
                },
              ],
            },
            {
              text: "Installing Mods",
              collapsed: true,
              items: [
                { text: "Cars", link: "/guides/modding/installing-mods/cars" },
                {
                  text: "Tracks",
                  link: "/guides/modding/installing-mods/tracks",
                },
                {
                  text: "Apps",
                  link: "/guides/modding/installing-mods/apps",
                },
                {
                  text: "Other",
                  link: "/guides/modding/installing-mods/other",
                },
              ],
            },
          ],
        },
        {
          text: "Visuals",
          collapsed: true,
          items: [
            {
              text: "Enhancing Looks",
              link: "/guides/visuals/enhancing-looks",
            },
            {
              text: "Post-Processing Filters",
              collapsed: true,
              items: [
                {
                  text: "What are they?",
                  link: "/guides/visuals/ppfilters/ppfilters",
                },
                {
                  text: "Installation",
                  link: "/guides/visuals/ppfilters/installing-ppfilters",
                },
                {
                  text: "Creating your own",
                  link: "/guides/visuals/ppfilters/creating-ppfilters",
                },
              ],
            },
            {
              text: "Pure Config",
              link: "/guides/visuals/pconfig-basics",
            },
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
