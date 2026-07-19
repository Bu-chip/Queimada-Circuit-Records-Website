import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Flex({
      components: [
        // ◈ GRAFO / ◈ AL AZAR (AL AZAR = página aleatoria; sustituye al dado)
        { Component: Component.LandingExplore() },
        { Component: Component.Search() },
      ],
    }),
  ],
  afterBody: [],
  // Footer de marca (3 columnas + cierre): estructura y enlaces viven en el
  // propio componente Footer.tsx.
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Landing (solo en el index): cabecera + cuadrícula-menú + discografía
    Component.ConditionalRender({
      component: Component.LandingHero(),
      condition: (props) => props.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.LandingGrid(),
      condition: (props) => props.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.LandingDiscography(),
      condition: (props) => props.fileData.slug === "index",
    }),
    // Breadcrumbs en todas las páginas excepto el index y /grafo (titular especial)
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        spacerSymbol: "◈",
        rootName: "QUEIMADA",
        resolveFrontmatterTitle: true,
        showCurrentPage: true,
      }),
      condition: (props) => props.fileData.slug !== "index" && props.fileData.slug !== "grafo",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    // /grafo: grafo GLOBAL (todos los nodos, depth -1) a pantalla completa en el
    // área central. Reutiliza el componente Graph nativo; el CSS de body[data-slug="grafo"]
    // en custom.scss lo agranda y oculta cabecera/botón del recuadro.
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: {
          depth: -1,
          scale: 0.9,
          repelForce: 0.9,
          centerForce: 0.55,
          linkDistance: 45,
          fontSize: 0.55,
          showTags: false,
          focusOnHover: true,
        },
      }),
      condition: (props) => props.fileData.slug === "grafo",
    }),
  ],
  left: [
    // Sin explorer en la landing ni en /grafo: la cuadrícula ES el menú
    Component.ConditionalRender({
      component: Component.Explorer({
        folderDefaultState: "collapsed",
        folderClickBehavior: "link",
      }),
      condition: (props) => props.fileData.slug !== "index" && props.fileData.slug !== "grafo",
    }),
  ],
  right: [
    // Grafo y retroenlaces solo en interiores (el grafo tendrá su página /grafo)
    Component.ConditionalRender({
      component: Component.Graph({
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
      condition: (props) => props.fileData.slug !== "index" && props.fileData.slug !== "grafo",
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (props) => props.fileData.slug !== "index" && props.fileData.slug !== "grafo",
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (props) => props.fileData.slug !== "index" && props.fileData.slug !== "grafo",
    }),
  ],
  afterBody: [
    // BackToTop solo en páginas que no sean el index
    Component.ConditionalRender({
      component: Component.BackToTop(),
      condition: (props) => props.fileData.slug !== "index",
    }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({
        spacerSymbol: "◈",
        rootName: "QUEIMADA",
        resolveFrontmatterTitle: true,
        showCurrentPage: true,
      }),
      condition: (props) => props.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
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
  ],
}
