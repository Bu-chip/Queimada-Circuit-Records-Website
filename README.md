# Queimada Circuit Records — Web

Web oficial de QCR, sello DIY de música electrónica experimental desde Bilbao.

**→ [queimadacircuitrecords.com](https://queimadacircuitrecords.com)**

---

## Stack

- **[Quartz 4](https://quartz.jzhao.xyz/)** — generador de sitio estático basado en Markdown
- **Markdown + Wikilinks** — gestión de contenido compatible con Obsidian
- **SCSS** — estilos personalizados sobre el tema base de Quartz
- **GitHub Pages** — despliegue automático vía GitHub Actions

---

## Estructura del repositorio

```
content/            # Todo el contenido de la web (markdown)
│
├── 01_CATÁLOGO/    # Releases y fanzines del sello
├── 02_ARTISTAS/    # Páginas de artistas
├── 03_EVENTOS/     # Eventos y colaboradores
├── 04_LAB/         # Proyectos experimentales y externos
└── 05_BLOG/        # Entradas de blog

quartz/             # Framework Quartz (no tocar salvo personalización)
├── components/     # Componentes Preact de la interfaz
├── plugins/        # Plugins de transformación y emisión
└── styles/         # SCSS — custom.scss es el principal a editar

static/             # Assets estáticos (imágenes, CNAME, og-image)

quartz.config.ts    # Configuración principal: título, URL, plugins, tema
quartz.layout.ts    # Layout: sidebar, breadcrumbs, footer, componentes
```

---

## Arrancar en local

Requisitos: **Node >= 22**, **npm >= 10.9.2**

```bash
# Clonar el repo
git clone https://github.com/bu-chip/Queimada-Circuit-Records-Website.git
cd Queimada-Circuit-Records-Website

# Instalar dependencias
npm ci

# Levantar servidor local con hot-reload
npx quartz build --serve
```

La web estará en `http://localhost:8080`.

> El contenido en `content/` puede editarse directamente o desde Obsidian apuntando a esa carpeta como vault.

---

## Hacer un cambio y subirlo

### Contenido (lo habitual)

1. Editar o crear archivos `.md` dentro de `content/`
2. Comprobar en local con `npx quartz build --serve`
3. Commit y push a `main`

```bash
git add content/
git commit -m "content: descripción del cambio"
git push origin main
```

El deploy es automático. GitHub Actions construye el sitio y lo publica en GitHub Pages. En 1-2 minutos está live en [queimadacircuitrecords.com](https://queimadacircuitrecords.com).

### Estilos y layout

- Estilos → `quartz/styles/custom.scss`
- Distribución de componentes → `quartz.layout.ts`
- Configuración global (URL, tema, plugins) → `quartz.config.ts`

---

## Deploy

El workflow `.github/workflows/deploy.yml` se ejecuta en cada push a `main`:

1. `npm ci` — instala dependencias
2. `npx quartz build` — genera el sitio en `/public`
3. Publica en GitHub Pages con `actions/deploy-pages`

No hay que hacer nada manual. Push a main = deploy.
