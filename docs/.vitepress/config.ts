import { defineConfig } from "vitepress";
import { version } from "../../package.json";

export default defineConfig({
  lang: "en-US",
  title: "My project",
  description: "My project description",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/demo/": sidebarGuide()
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/NicolaSpadari" }
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Nicola Spadari"
    }
  },
  vite: {
    server: {
        host: true,
        port: 3000
    }
  }
});

function nav() {
  return [
    { text: "Guide", link: "/demo/text", activeMatch: "/demo/" },
    {
      text: version,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/NicolaSpadari/?tab=repositories"
        }
      ]
    }
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Typography",
      collapsible: true,
      items: [
        { text: "Text", link: "/demo/text" },
        { text: "Code", link: "/demo/code" }
      ]
    },
    {
      text: "Elements",
      collapsible: true,
      items: [
        { text: "Collapsible", link: "/demo/collapsible" },
        { text: "Images", link: "/demo/images" },
        { text: "Table", link: "/demo/table" },
        { text: "List", link: "/demo/bullet-list" },
        { text: "Tip and warning", link: "/demo/tip-warn" },
        { text: "Code links", link: "/demo/code-links" },
        { text: "Vue components", link: "/demo/vue-components" }
      ]
    }
  ];
}
