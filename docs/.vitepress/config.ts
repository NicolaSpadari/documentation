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
      "/guide/": sidebarGuide()
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/NicolaSpadari" }
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Nicola Spadari"
    }
  }
});

function nav() {
  return [
    { text: "Guide", link: "/guide/text", activeMatch: "/guide/" },
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
        { text: "Text", link: "/guide/text" },
        { text: "Code", link: "/guide/code" }
      ]
    },
    {
      text: "Elements",
      collapsible: true,
      items: [
        { text: "Collapsible", link: "/guide/collapsible" },
        { text: "Images", link: "/guide/images" },
        { text: "Table", link: "/guide/table" },
        { text: "List", link: "/guide/bullet-list" },
        { text: "Tip and warning", link: "/guide/tip-warn" },
        { text: "Code links", link: "/guide/code-links" },
        { text: "Vue components", link: "/guide/vue-components" }
      ]
    }
  ];
}
