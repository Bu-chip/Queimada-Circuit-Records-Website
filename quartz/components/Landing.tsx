import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
// @ts-ignore
import randomPageScript from "./scripts/randomPage.inline"
// @ts-ignore
import glitchScript from "./scripts/landingGlitch.inline"

// =====================================================================
// LANDING — QUEIMADA CIRCUIT RECORDS
// Tres componentes que solo se montan en el index (via ConditionalRender
// en quartz.layout.ts): LandingHero, LandingGrid, LandingDiscography.
// El CSS vive una sola vez en quartz/styles/custom.scss (sección LANDING).
// =====================================================================

// ---------------------------------------------------------------------
// RUTAS DE IMAGEN EDITABLES — cambia aquí la que no te guste (1 línea).
// Los tiles se guardan EN COLOR; el b/n lo pone el CSS (grayscale).
// ---------------------------------------------------------------------
const TILE_IMAGES: Record<string, string> = {
  catalogo: "/static/images/grad-catalogo.png",
  artistas: "/FILES/516781474_3619019381728328_4630991875414913642_n.png", // foto: Richie Scott
  fanzines: "/static/images/grad-fanzines.png",
  lab: "/04_LAB/FILES/Pasted-image-20260228052030.png", // flow field p5.js
  blog: "/static/images/grad-blog.png",
  eventos: "/static/images/grad-visuals.png",
}

// Covers de Bandcamp (en color) por slug de release.
const COVERS: Record<string, string> = {
  "Buenos-días,-Ansiedad": "/static/images/releases/buenos-dias-ansiedad.jpg",
  Aketxe: "/static/images/releases/aketxe-live-jam.jpg",
  "buchi-buchip-acto-i_FANZINE_ALBUM": "/static/images/releases/buchi-buchip-acto-i.jpg",
  "Aberración-Bológica": "/static/images/releases/aberracion-biologica.jpg",
  "Holy-Humpback-Whale": "/static/images/releases/holy-humpback-whale.jpg",
  breakmania: "/static/images/releases/breakmania.jpg",
  "guayaba-dondestas-tu": "/static/images/releases/guayaba-dondestas-tu.jpg",
  "sei-kitty-breakcore": "/static/images/releases/sei-kitty-breakcore.jpg",
  "txus-space": "/static/images/releases/txus-space.jpg",
}

const MEU_URL = "https://bu-chip.github.io/MEU/"
const GENRE_EXPLORER_URL = "https://genres.queimadacircuitrecords.com/"

// ---------------------------------------------------------------------
// Tarjeta reutilizable ÚNICA — la usan la cuadrícula-menú y la discografía.
// ---------------------------------------------------------------------
interface TileProps {
  href: string
  title: string
  img?: string
  subtitle?: string
  accent?: "green" | "violet"
  solid?: "green" | "violet"
  external?: boolean
  className?: string
}

const Tile = ({ href, title, img, subtitle, accent, solid, external, className }: TileProps) => {
  const classes = [
    "qz-tile",
    img ? "qz-tile--img" : solid ? "" : "qz-tile--plain",
    accent === "violet" ? "qz-tile--violet" : "",
    solid ? `qz-tile--solid-${solid}` : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ")
  return (
    <a
      class={classes}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {img && <span class="qz-tile__img" style={`background-image: url('${img}')`}></span>}
      <span class="qz-tile__title">
        {title}
        {subtitle && <span class="qz-tile__sub">{subtitle}</span>}
      </span>
    </a>
  )
}

// ---------------------------------------------------------------------
// 1. CABECERA — solo el titular; las herramientas viven en la barra superior
// ---------------------------------------------------------------------
const LandingHero: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <section class="landing-hero">
      <h1 class="landing-hero__title">
        <span class="landing-hero__w1">QUEIMADA</span>
        <span class="landing-hero__w2">CIRCUIT</span>
        <span class="landing-hero__w3">RECORDS</span>
      </h1>
      <p class="landing-hero__meta">sello diy experimental · bilbao</p>
    </section>
  )
}

LandingHero.afterDOMLoaded = glitchScript

// ---------------------------------------------------------------------
// Herramientas de exploración de la barra superior: ◈ GRAFO / ◈ AL AZAR.
// AL AZAR reutiliza el script de página aleatoria de Quartz
// (randomPage.inline busca .random-page-button y engancha el click).
// ---------------------------------------------------------------------
const LandingExplore: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="landing-explore" aria-label="Exploración">
      <a class="landing-explore__link landing-explore__link--grafo" href="/grafo" aria-label="Grafo">
        <span class="landing-explore__txt">Grafo</span>
      </a>
      <button
        class="landing-explore__link landing-explore__link--azar random-page-button"
        aria-label="Ir a una página aleatoria"
        title="Página aleatoria"
      >
        <span class="landing-explore__txt">Al azar</span>
      </button>
    </nav>
  )
}

LandingExplore.afterDOMLoaded = randomPageScript

// ---------------------------------------------------------------------
// 2. LA CUADRÍCULA — el menú
// ---------------------------------------------------------------------
// Cuenta ficheros de una sección (excluye páginas índice/listado).
const countIn = (
  allFiles: QuartzPluginData[],
  prefix: string,
  exclude: string[] = [],
): number =>
  allFiles.filter(
    (f) =>
      f.slug?.startsWith(prefix) &&
      !f.slug!.endsWith("/index") &&
      !exclude.includes(f.slug!),
  ).length

const LandingGrid: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
  // Contadores REALES generados en build
  const nReleases = countIn(allFiles, "01_CATÁLOGO/Releases/")
  const nBlog = countIn(allFiles, "05_BLOG/")
  const nFanzines = countIn(allFiles, "01_CATÁLOGO/Fanzines/", ["01_CATÁLOGO/Fanzines/fanzines"])

  return (
    <nav class="landing-grid" aria-label="Menú principal">
      <Tile className="lt-catalogo" href="/01_CATÁLOGO/" title="CATÁLOGO" img={TILE_IMAGES.catalogo}
        subtitle={`${nReleases} releases`} />
      <Tile className="lt-artistas" href="/02_ARTISTAS/" title="ARTISTAS" img={TILE_IMAGES.artistas} accent="violet"
        subtitle="cuerpo pensante · cachalote mecánico · 555 kables…" />
      <Tile className="lt-meu" href={MEU_URL} title="MAPA EUSKADI UNDERGROUND" solid="violet" external
        subtitle="7.568 releases · 3.572 artistas" />
      <Tile className="lt-rge" href={GENRE_EXPLORER_URL} title="RANDOM GENRE EXPLORER" solid="green" external
        subtitle="tira un género" />
      <Tile className="lt-fanzines" href="/01_CATÁLOGO/Fanzines/fanzines" title="FANZINES" img={TILE_IMAGES.fanzines}
        subtitle={`${nFanzines} fanzines`} />
      <Tile className="lt-lab" href="/04_LAB/" title="LAB" img={TILE_IMAGES.lab}
        subtitle="sketches · shaders · cacharros" />
      <Tile className="lt-blog" href="/05_BLOG/" title="BLOG" img={TILE_IMAGES.blog} accent="violet"
        subtitle={`${nBlog} notas y procesos`} />
      <Tile className="lt-eventos" href="/03_EVENTOS/" title="EVENTOS" img={TILE_IMAGES.eventos}
        subtitle="próximos y pasados" />
    </nav>
  )
}

// ---------------------------------------------------------------------
// 3. DISCOGRAFÍA — contador real + 6 más recientes + VER TODO
// ---------------------------------------------------------------------
const releaseDate = (f: QuartzPluginData): number => {
  const d = f.dates?.created ?? f.dates?.modified
  return d ? new Date(d).getTime() : 0
}

const LandingDiscography: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
  const releases = allFiles.filter(
    (f) =>
      f.slug?.startsWith("01_CATÁLOGO/Releases/") &&
      !f.slug!.endsWith("/index") &&
      f.slug !== "01_CATÁLOGO/Releases/index",
  )
  const recent = [...releases].sort((a, b) => releaseDate(b) - releaseDate(a)).slice(0, 6)

  return (
    <section class="landing-disco">
      <header class="landing-disco__head">
        <h2 class="landing-disco__title">DISCOGRAFÍA</h2>
        <span class="landing-disco__count">
          {releases.length} referencia{releases.length === 1 ? "" : "s"}
        </span>
      </header>
      <div class="landing-disco__grid">
        {recent.map((f) => {
          const slugEnd = f.slug!.split("/").pop()!
          return (
            <Tile
              href={`/${f.slug}`}
              title={(f.frontmatter?.title as string) ?? slugEnd}
              img={COVERS[slugEnd]}
            />
          )
        })}
        <Tile className="lt-vertodo" href="/01_CATÁLOGO/" title="VER TODO →" />
      </div>
    </section>
  )
}

export const LandingHeroComponent = (() => LandingHero) satisfies QuartzComponentConstructor
export const LandingExploreComponent = (() => LandingExplore) satisfies QuartzComponentConstructor
export const LandingGridComponent = (() => LandingGrid) satisfies QuartzComponentConstructor
export const LandingDiscographyComponent = (() =>
  LandingDiscography) satisfies QuartzComponentConstructor
