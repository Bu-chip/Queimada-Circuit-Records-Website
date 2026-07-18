# LIMPIEZA EJECUTADA — 2026

Registro de la pasada mecánica de limpieza ejecutada sobre la auditoría `AUDITORIA-WEB-2026.md`.
Rama: `limpieza-auditoria-2026`. Un commit por bloque para poder revertir por pasos.
**No se ha escrito prosa nueva**: todo el texto fusionado se copió literal. Las únicas excepciones son las correcciones factuales de una línea del Bloque 6, explícitamente indicadas por el dueño.

## Verificación final
- ✅ `npx quartz build` compila sin errores: **62 archivos de entrada, 3 filtrados** (los 3 posts puestos en `draft: true`), 194 archivos emitidos.
- ✅ Cero wikilinks sin resolver (escaneo con detector consciente de alias y FolderPage de Quartz).
- ✅ Cero referencias a archivos borrados (`[[colaboradores/…]]`, `[[Acto-I]]`, `[[Los-Buchis]]`, tracks fusionados, fichas espejo, listados borrados).
- ✅ Todos los `![[…]]` y `src="…"` locales de imagen/vídeo resuelven a assets existentes.

---

## Archivos borrados (43)

**Bloque 1 — vacíos:**
- `01_CATÁLOGO/Acto-I.md` (0 bytes)
- `02_ARTISTAS/Queimada Circuit Records.md` (0 bytes)

**Bloque 3 — listados redundantes del catálogo + Proyectos-Externos + índice de fanzines:**
- `01_CATÁLOGO/Releases/index.md`
- `01_CATÁLOGO/Releases/Singles/singles.md`
- `01_CATÁLOGO/Releases/Albums/albumes.md`
- `01_CATÁLOGO/colaboraciones.md`
- `01_CATÁLOGO/Releases/Singles/index.md` (homepage vieja)
- `01_CATÁLOGO/Fanzines/index.md` (se conserva `fanzines.md` como índice)
- `04_LAB/Proyectos-Externos/index.md`
- `04_LAB/Proyectos-Externos/Bilbao-Underground.md`

**Bloque 4 — colaboradores (fusión 29 → 1):**
- `03_EVENTOS/colaboradores/` completa (23 stubs: 333modules, Andrea Jalon, anarkoeneko, camile-duhart, cecegaia, cenizasdb, cirkolepsia, dirty-tapes, elsalonenllamas, errekaleor, goikore, grishacecosas, irolairratia, kolektivokotxino, loobleart, lurrazpikoliga, misoginia-punk, origami-azul, rockbeer, tanta-tattoo, tbkmedialab, txarraska-gaztetxea, txirbilenea-sestao)
- 5 fichas espejo en `02_ARTISTAS/`: `anarkoeneko.md`, `camile-duhart.md`, `dirty-tapes.md`, `delirium-psychosis.md`, `drama-recorder.md`

**Bloque 5 — tracks de *Buenos días, Ansiedad* (fusión 5 → 1):**
- `01_CATÁLOGO/Releases/Singles/Airplanes for Murcia.md`
- `01_CATÁLOGO/Releases/Singles/Abismo, carente de límites.md`
- `01_CATÁLOGO/Releases/Singles/cómo calmar a una supernova.md`
- `01_CATÁLOGO/Releases/Singles/Marijaia o el fin del verano.md`
- `01_CATÁLOGO/Releases/Singles/Lluvia y piano.md` (draft con embed placeholder)

---

## Archivos modificados por bloque

**Bloque 1 — agujeros visibles:**
- `cronologico.md`, `cuerpo pensante.md`: repuntar `[[Acto-I]]` → `[[buchi-buchip-acto-i_FANZINE_ALBUM|…]]`.
- `Cachalote Mecánico.md`, `buchi-buchip_CINE EXTENDIDO.md`, `555-kables.md`, `fanzine-555k-queimada.md`, `cuerpo pensante.md`: repuntar `[[Queimada Circuit Records]]` / `[[Queimada-Circuit-Records]]` → `[[queimada-circuit-records|…]]`.
- `Holy Humpback Whale.md`: reemplazado el clon de AAAAH por ficha mínima (frontmatter katxalote mekaniko + fecha 2025 + embed real de Drama Recorder).
- `Aketxe.md`: quitada la línea `LINK_CUANDO_LO_TENGAS`. `Elowen_CORTOMETRAJE.md`: quitada la línea del href de YouTube vacío.

**Bloque 2 — enlaces:**
- 14 fichas de `03_EVENTOS/`: `[[colaboradores/X]]` → `[[Colaboradores y sellos vinculados|X]]`.
- Correcciones de mayúsculas/typos en `Cachalote Mecánico.md`, `camile-duhart.md` (espejo, luego borrada), `cuerpo pensante.md`, `Colaboradores y sellos vinculados.md`, `cómo calmar a una supernova.md` (luego borrada), `Aberración Bológica.md`, `Cómo hacer música…_FANZINE.md`, `Un montón de links.md`.
- `04_LAB/index.md`: los 6 `src` de media apuntan a `FILES/`.

**Bloque 3 — listados:**
- `01_CATÁLOGO/index.md`: los enlaces de la rejilla a `albumes`/`singles`/`colaboraciones` repuntados a `cronologico`.
- `Aketxe.md`, `Buenos días, Ansiedad.md`: `[[…/Releases/index|Volver a Releases]]` → `[[cronologico|Volver a Releases]]`.
- `Cómo hacer música…_FANZINE.md`: quitado el bloque duplicado de `fanzines.md` y el enlace a sí misma.
- `05_BLOG/`: `draft: true` en los 3 posts (bug, synthwave, software libre) y quitadas sus líneas del `index.md` del blog (la sección «TECNOLOGÍA & RESISTENCIA» quedaba sin entradas → eliminada; en «NOSTALGIA» se mantuvo Eric Nord).

**Bloque 4 — colaboradores:**
- `Colaboradores y sellos vinculados.md`: enlaces internos a páginas borradas convertidos a texto plano; añadidos literales los datos que faltaban (Txirbilenea «hubo manifestación en noviembre 2025», goikore «Pareja de Miguel Borrajo (cuerpopensante)», línea nueva de Andrea Jalon).
- Repuntes al hub en `Sindicato Uber_VIDEOCLIP.md`, `buchi-buchip_CINE EXTENDIDO.md`, `Elowen_CORTOMETRAJE.md`, `auto-rave-txarraska-ene-2026.md`, `02_ARTISTAS/index.md` (lista en línea de 24 enlaces muertos eliminada; la cabecera `<h2>` ya enlaza al hub).

**Bloque 5 — tracks del álbum:**
- `Buenos días, Ansiedad.md`: una subsección `###` por track publicado (Airplanes, Abismo, ¿Cómo calmar a una supernova?, Marijaia) con su embed de track y su `## Historia` copiado literal.

**Bloque 6 — factuales:**
- `buchi-buchip_CINE EXTENDIDO.md` (aplicado en el commit del Bloque 4): autoría corregida a «alias de cuerpo pensante en colaboración con camile-duhart y Andrea Jalon; proyecto actualmente en pausa».
- `cuerpo pensante.md`: Breakmania quitado de su discografía; mención de *Buenos días, Ansiedad* corregida a (2026).
- `cronologico.md`: atribución de Breakmania corregida a `[[Cachalote Mecánico|cachalote mecánico]]`.
- `breakmania.md`: añadido `artista: "cachalote mecánico"` en frontmatter.

**Bloque 7 — recorte de plantilla:**
- `AAAAH.md` y `Aberración Bológica.md`: borradas las secciones `## Contexto`, `## Detalles técnicos` y `## Enlaces` redundantes; conservados título, embed, `## Sobre el tema`, y (en Aberración) `## Tracklist` y `## Video`.

**Verificación final (extra):**
- `Sindicato Uber_VIDEOCLIP.md`: `[[goikore]]` (stub borrado) repuntado al hub.
- `Buenos días, Ansiedad.md`: frontmatter `artista: "[[cuerpo-pensante]]"` → `"[[cuerpo pensante]]"` (enlace roto preexistente detectado en el escaneo).

---

## Decisiones y dudas (revisar)

1. **`Holy Humpback Whale.md` — fecha inventada.** El prompt pedía «date 2025». Un año pelado no es una fecha válida en YAML/Quartz, así que puse `date: 2025-01-01`. **El día y el mes son placeholder**, no un dato real. Corrige la fecha exacta del release en Drama Recorder si la tienes.

2. **`Holy Humpback Whale.md` — artista.** Puse `artista: "katxalote mekaniko"` (como pedía el prompt). Nota: el resto del sitio usa «cachalote mecánico» / «Cachalote Mecánico» (la ficha de artista es `Cachalote Mecánico.md`). No lo enlacé para no forzar una forma; decide si unificar la nomenclatura del alias en todo el sitio.

3. **`breakmania.md` — artista.** El prompt decía «katxalote mekaniko». Puse `artista: "cachalote mecánico"` para que coincida con el nombre de la ficha de artista enlazable (`[[Cachalote Mecánico|cachalote mecánico]]`), que es la forma usada en el resto del catálogo. Si prefieres «katxalote mekaniko» literal, cámbialo.

4. **`02_ARTISTAS/index.md` — lista de colaboradores eliminada.** El bloque de 24 enlaces en línea al pie apuntaba todos a páginas que se borraron en el Bloque 4; la cabecera `<h2>` de esa sección ya enlaza al hub (`Colaboradores y sellos vinculados`). Eliminé la lista muerta entera en lugar de generar 24 enlaces idénticos al mismo hub. La cabecera-puerta se conserva.

5. **Fanzines — se conservó `fanzines.md` y se borró `index.md`.** Quartz sirve la carpeta igual mediante su FolderPage automática, y el catálogo ya enlaza a `[[fanzines]]`. Si prefieres una `index.md` explícita, habría que volcar `fanzines.md` en `index.md` y borrar `fanzines.md` (opción B del prompt).

6. **Secciones `## Especificaciones técnicas` (Aketxe, Buenos días) NO tocadas.** El Bloque 7 nombraba `## Contexto`, `## Detalles técnicos`, `## Estética` y `## Enlaces` redundantes. «Especificaciones técnicas» no estaba en la lista y contiene datos concretos reales (hardware, locación), así que las dejé. Si quieres el mismo recorte ahí, dilo.

7. **Enlace `aketxe-live-jam` NO era un error.** El escaneo lo marcó, pero es un **alias válido** declarado en el frontmatter de `Aketxe.md` (`aliases: - aketxe-live-jam`), que Quartz resuelve vía AliasRedirects. No se tocó. (La auditoría lo había marcado como roto; era un falso positivo suyo.)

8. **`[[../index]]` en las fichas de Fanzines.** No estaba en el listado de tareas; Quartz lo resuelve como enlace relativo y el build no da error, así que se dejó tal cual.

9. **No se ha hecho merge ni push.** La rama `limpieza-auditoria-2026` queda lista para revisión.

---

# PASADA 2 — Despurga de scaffold visual generado por IA (2026-07-18)

Segunda tanda, posterior al informe de arriba. Objetivo: retirar el andamiaje HTML/CSS clonado (tell de generación automática) del **blog** y del **LAB**, para que las páginas vivan dentro del estilo propio del sitio (Quartz + `custom.scss`) en vez de traer cada una su propio universo neón.

**Regla de oro mantenida: no se escribió texto nuevo; el texto del autor se conserva literal.** Verificado con un diff de texto plano (prosa, ignorando maquetación) entre cada versión HEAD y la despurgada: **sin pérdida de prosa**. Lo único que "desaparece" son números decorativos de tarjeta y una frase de cierre que estaba duplicada (queda una vez).

Commits: `b0501e2` (blog, Bloque B) · `8e418c3` (LAB, Bloque C) · commit de frontmatter aparte al final.

## Scaffold retirado (común)
`<style>` embebidos y `@import` de Google Fonts (Azeret Mono / Syne / Courier Prime) · wrappers `<div class/style>` · cajas rotadas con `box-shadow` neón · cajas-cita magenta con frase centrada en negrita · tarjetas numeradas con nº gigante de fondo · badges `SNAKE_CASE` · paleta magenta/cian/lima/rojo · separadores `///`, `>>`, `* * *`, `/// END ///` · barras `▓▒░` · rutas de carpeta falsas · marcos con esquinas de corchete y bordes discontinuos.

## Blog — `05_BLOG/` (9 posts)
| Archivo | Cómo quedó |
|---|---|
| `la ciudad como instrumento` | caja-poema cian rotada → 4 versos en párrafos |
| `como hacer música..._BLOG` | `<div>`/`.fanzine-content` → texto plano; 6 `![[FILES/fanzine-N.png]]` conservados; caja final → enlace al fanzine |
| `el sonido solo se cuida...` | 6 tipos de caja → párrafos/blockquote; `<ul class>` → lista; iframe YouTube conservado |
| `cambia el método...` | tesis/gordon/affordance/ejemplo/ejercicio → encabezados+párrafos+listas; **frase de cierre duplicada retirada (queda 1 vez)** |
| `comienzos de queimada` | 5 `.capitulo` con nº de fondo → `##`; timeline → lista; highlights → negrita |
| `hay mil maneras...` | 8 `.ruta` con nº → `####`; ejemplos → blockquote; `<ul class>` → lista |
| `lo que sientes en las backrooms...` | tesis-dual/polo/zona-mezcla/capitalismo → encabezados/párrafos; fichas de disco → **título en negrita + descripción** |
| `no hay un método...` | 10 `.juego-card` → **lista numerada 1–10**; gordon-quote → blockquote; enlace bandlab conservado |
| `quince preguntas...` | 15 `.pregunta-critica` con nº → **lista numerada 1–15**; highlights → negrita; `....` conservado |

Convenciones: cajas-cita → blockquote (citas externas: Eno, Mick Gordon) o párrafo (voz del autor); tarjetas numeradas → lista numerada; `<span class="highlight-*">` → **negrita** (si había >2 en un párrafo, solo la más importante en negrita, el resto plano). Conservados imágenes, iframe de YouTube y enlaces.

## LAB — `04_LAB/index.md`
- Retirados: título glitch `>> LAB`, separador "scroll" con barritas, `▓▒░...`, `/// END ///`, ruta falsa `/experiments/sketches/`, caja entera `/touchdesigner/ [WIP]`, números de tarjeta, marcos (bordes magenta, esquinas de corchete, box-shadow, bordes discontinuos), CTA `>> CLICK_PARA_EXPLORAR`, tagline `/// RECURSOS // HERRAMIENTAS // UNDERGROUND`.
- Badges `BILBAO_UNDERGROUND_EXPLORER` / `P5.JS` / `SHADERTOY` → encabezados `##`.
- **Mapa Euskadi Underground conservado intacto**: iframe `bu-chip.github.io/MEU/` + enlace + texto descriptivo, sin la caja magenta.
- Imágenes p5.js (4) y vídeos Shadertoy (2): a tamaño completo, sin marco.
- **CRÍTICO — los 6 `src` de media no se tocaron** (byte a byte idénticos a HEAD; solo cambió el atributo `style`). Verificado contra el HTML de producción: rutas generadas `../04_LAB/FILES/...` idénticas. (Lección del commit `acb9b28`.)

## `04_LAB/Un montón de links.md` — NO tocado
El diagnóstico esperaba un "marco de terminal falso", pero el archivo ya es Markdown plano. Sin scaffold.

## Archivos limpios no tocados
`05_BLOG/index.md`, `el synthwave...`, `el software libre...`, `el primer concierto...`, `el bug era un fantasma...`, `Eric Nord y la máquina...` — sin HTML/scaffold.

## Dudas / decisiones (revisar)
1. **Doble frontmatter (bug preexistente).** Los posts tenían dos bloques `---` (uno `Estatus/Tema`, otro `title:`); Quartz solo lee el primero, así que el `title:` se renderizaba como cuerpo. **Arreglado en commit aparte** (fusión de los dos bloques usando el título ya existente, sin inventar texto). En 3 posts (`backrooms`, `no hay un método`, `quince preguntas`) NO había `title` en el frontmatter → **no se inventó** (caen al slug del nombre de archivo). Decide si quieres darles título propio.
2. **LAB — tagline y CTA descartados.** `/// RECURSOS // HERRAMIENTAS // UNDERGROUND` y `>> CLICK_PARA_EXPLORAR` se juzgaron decoración de navegación y se quitaron. Si quieres conservar esas palabras como subtítulo del enlace, dilo.
3. **LAB — media a `width:100%`.** Para "lo más grandes posible sin marco" cambié solo el `style` de display (nunca el `src`).
4. **Frase duplicada** en `cambia el método` retirada (aparecía 2 veces idéntica; queda 1).
5. **`....`** en `quince preguntas` conservado como línea suelta (silencio retórico).

---

# PASADA 3 — Fixes de bugs + presencia visual del LAB + 404 (2026-07-18)

Tercera tanda tras revisar el resultado en local. Regla de oro vigente. Un commit por bloque.

## Bloque 1 — Fechas del blog (BUG diagnosticado, NO era lo que parecía)
La sospecha (que `82007bc` perdió el campo `date`) es **falsa**. Comparado el frontmatter de los 15 posts en `origin/main` vs actual: **ninguno tenía `date`** salvo `como hacer música` (`date: 2024-03-15`), que sigue **intacto**. Nada perdido; el frontmatter ya coincide con `origin/main`.
Causa real: `defaultDateType: "modified"` con prioridad `frontmatter → git → filesystem`. Los 8 posts sin `date` caen a la **fecha de git**; producción muestra `20.03.26` (commit del lote en `main`) y local muestra hoy porque la limpieza los recommiteó. `como hacer música` sale bien justo porque es el único con `date` en frontmatter.
**Restaurar valores de origin/main = no-op** (ya coinciden) y no arregla el síntoma. Arreglarlo requiere **añadir `date`**, que los originales no tenían → decisión del dueño pendiente (no se inventan fechas).

## Bloque 2 — Enlaces internos del índice del blog (BUG, arreglado)
Los 11 enlaces de `05_BLOG/index.md` eran URLs absolutas a `https://queimadacircuitrecords.com/...` (se pintaban externos ↗; el de `como hacer música` daba 404 por faltarle el sufijo `_BLOG`). Convertidos a wikilinks `[[archivo|texto]]` (resolución `shortest`, nombre exacto). Verificado: 11 destinos internos, 0 externos, 0 rotos. Texto visible literal. Commit `d75d386`.

## Bloque 6a — Cajas de sección de la 404 (arreglado)
`quartz/components/pages/404.tsx`: las 4 cajas (Catálogo/Artistas/LAB/Blog) con borde neón + color por sección + box-shadow → **lista simple** con divisor sutil, enlaces y texto literales. El bloque glitch de arriba se mantiene (6b pendiente). Commit `17f35fe`.

## Bloque 4 — Altura del iframe MEU (hecho)
`04_LAB/index.md`: iframe del Mapa Euskadi Underground `height: 300px → 820px`. Solo dimensión; src e interior intactos. **A confirmar en local** que muestra cabecera + filtros + 2 filas de portadas (no verificable en el preview headless, que sandboxea el iframe externo). Commit `156d0fe`.

## Bloque 5 — "Un montón de links" destacado (hecho)
`04_LAB/index.md`: flechas `<<<<<<<<<` junto al enlace (decisión puntual, no patrón). Texto del enlace intacto; flechas como decoración, sin caja. Commit `f9ed1eb`.

## Bloque 3 — Pies de foto del LAB (PROPUESTA, NO aplicada)
Descripciones técnicas propuestas para los 6 media (tabla en el chat). Pendiente de que el dueño apruebe/reescriba antes de aplicar. Hallazgo: el vídeo `...5.24.46.mov` **no es un shader**, es una captura de pantalla del perfil de Shadertoy del autor (dashboard con lista de shaders) — quizá convenga sustituirlo.

## Bloque 6b — Rediseño del bloque glitch de la 404 (PROPUESTA, NO aplicada)
3 direcciones (A · Errata/misregistro de imprenta · B · Sigilo/sello oculto · C · Vacío/marca corrupta), renderizadas en un Artifact. Fuera neón; negro + hueso + un acento apagado; símbolos alquímicos/astrales/de imprenta; glitch desde el material. Referente: paleta y tipos reales del Random Genre Explorer (Barlow Condensed + IBM Plex Mono; grises casi-negros → hueso, acentos desaturados). Pendiente de que el dueño elija dirección.

## Verificación (Bloque V)
- ✅ `npx quartz build` sin errores (62 entrada, 194 emitidos).
- ✅ Los 6 `src` de media del LAB siguen **sin ruta, solo nombre** (idénticos a `origin/main`) — comprobado explícitamente (3ª vez).
- ✅ Diff de texto plano del índice del blog: cero prosa perdida (solo cambió el destino del enlace).
- ✅ Commit por bloque (2, 6a, 4, 5). Los bloques 3 y 6b no se commitean hasta aprobación. Sin push ni merge.
