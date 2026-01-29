import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Spacer(),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Bandcamp: "https://queimadacircuit.bandcamp.com",
      Instagram: "https://instagram.com/queimadacircuit",
      Contacto: "mailto:queimadacircuit@gmail.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.2,
        repelForce: 1,
        centerForce: 0.3,
        linkDistance: 40,
        fontSize: 0.5,
        showTags: false,
      },
      globalGraph: {
        depth: -1,
        scale: 0.8,
        repelForce: 0.8,
        centerForce: 0.3,
        linkDistance: 50,
        fontSize: 0.5,
        showTags: false,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.2,
        repelForce: 1,
        centerForce: 0.3,
        linkDistance: 40,
        fontSize: 0.5,
        showTags: false,
      },
      globalGraph: {
        depth: -1,
        scale: 0.8,
        repelForce: 0.8,
        centerForce: 0.3,
        linkDistance: 50,
        fontSize: 0.5,
        showTags: false,
      },
    }),
  ],
}
