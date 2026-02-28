// Secciones principales navegables del sello.
// Actualiza este array si añades nuevas secciones al content/.
const SECTIONS = [
  "01_CATÁLOGO",
  "02_ARTISTAS",
  "03_EVENTOS",
  "04_LAB",
  "05_BLOG",
]

function getBaseUrl(): string {
  return (
    window.location.origin +
    (window.location.pathname.startsWith("/Queimada-Circuit-Records-Website")
      ? "/Queimada-Circuit-Records-Website"
      : "")
  )
}

async function fetchAllSlugs(): Promise<string[]> {
  try {
    // Quartz genera /search-index.json con todos los slugs del sitio en build time
    const base = getBaseUrl()
    const res = await fetch(`${base}/search-index.json`)
    if (!res.ok) throw new Error("no index")
    const data: Array<{ slug: string }> = await res.json()
    const slugs = data
      .map((d) => d.slug)
      .filter((slug) => {
        if (slug === "index" || slug === "404") return false
        if (slug.startsWith("tags/")) return false
        return true
      })
    return slugs.length > 0 ? slugs : SECTIONS.map((s) => s + "/index")
  } catch {
    // Fallback a secciones principales si el índice no carga
    return SECTIONS.map((s) => s + "/index")
  }
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function navigate(slug: string): void {
  const base = getBaseUrl()
  const url = `${base}/${slug}`
  if (typeof window.spaNavigate === "function") {
    window.spaNavigate(new URL(url))
  } else {
    window.location.href = url
  }
}

function setupRandomPage(): void {
  const btn = document.querySelector<HTMLButtonElement>(".random-page-button")
  if (!btn) return

  // Clonar para limpiar listeners anteriores (evita duplicados en navegación SPA)
  const fresh = btn.cloneNode(true) as HTMLButtonElement
  btn.replaceWith(fresh)

  fresh.addEventListener("click", async () => {
    fresh.classList.add("spinning")
    const slugs = await fetchAllSlugs()
    const slug = pickRandom(slugs)
    setTimeout(() => {
      fresh.classList.remove("spinning")
      navigate(slug)
    }, 350)
  })
}

// Re-inicializa en cada navegación SPA y en carga inicial
document.addEventListener("nav", setupRandomPage)
setupRandomPage()
