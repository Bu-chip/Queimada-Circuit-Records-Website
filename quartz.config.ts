import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "QUEIMADA CIRCUIT RECORDS",
    pageTitleSuffix: " | QCR",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      websiteId: "1049165c-3871-4f30-a9c4-35f4a913e7d0",
    },
    locale: "es-ES",
    baseUrl: "queimadacircuitrecords.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      // Fuentes self-hosted en quartz/static/fonts (@font-face en custom.scss)
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Big Shoulders Display",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#0a0a0a",
          lightgray: "#1a1a1a",
          gray: "#737373",
          darkgray: "#E8E4DA",
          dark: "#F2EFE6",
          secondary: "#b026ff",
          tertiary: "#8CC63F",
          highlight: "rgba(176, 38, 255, 0.15)",
          textHighlight: "#b026ff44",
        },
        darkMode: {
          light: "#0a0a0a",
          lightgray: "#1a1a1a",
          gray: "#737373",
          darkgray: "#E8E4DA",
          dark: "#F2EFE6",
          secondary: "#b026ff",
          tertiary: "#8CC63F",
          highlight: "rgba(176, 38, 255, 0.15)",
          textHighlight: "#b026ff44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      // Plugin.Favicon(), // desactivado: usamos favicon SVG emoji inline en Head.tsx
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
