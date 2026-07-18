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
