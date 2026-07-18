# AUDITORÍA WEB QUEIMADA CIRCUIT RECORDS — Julio 2026

> Diagnóstico solo-lectura. Ningún archivo de `content/` ha sido tocado. Todo lo que se afirma aquí está verificado contra los archivos del repo y contra el código de resolución de enlaces de Quartz (`quartz/util/path.ts`, estrategia `shortest`).

## Resumen ejecutivo

La web tiene un núcleo excelente y pequeño (las historias de *Buenos días, Ansiedad*, el LAB, los eventos telegráficos, 3-4 posts del blog) enterrado bajo una capa de burocracia generada por IA que triplica el trabajo de mantenimiento sin aportar valor: **5 listados de catálogo que dicen lo mismo, 24 stubs de colaboradores que duplican una página que ya existe, y una plantilla de ficha ("Contexto / Detalles técnicos / Estética") que reformula en lista lo que el párrafo de arriba ya decía**. Hay además errores visibles en producción: una ficha que es copy-paste literal de otra (`Holy Humpback Whale.md` = `AAAAH.md`), dos páginas en blanco que capturan enlaces (`Acto-I.md` y `02_ARTISTAS/Queimada Circuit Records.md`), ~25 wikilinks rotos por el mecanismo de resolución de Quartz, y placeholders sin rellenar ("LINK_CUANDO_LO_TENGAS", "[URL del proyecto]"). Tu intuición es correcta: el formato "título + embed + 2-3 líneas tuyas" ya existe en tus mejores fichas — el trabajo no es escribir más, es **borrar la mitad del sitio y dejar de mantener seis copias de cada dato**.

---

## 1. Inventario

105 archivos Markdown + 50 de media. Ninguna carpeta totalmente vacía, pero dos secciones son cascarón (`Proyectos-Externos/`, `colaboradores/`).

| Sección | .md | Fichas reales | Stubs / placeholders | Índices/listados | Notas |
|---|---|---|---|---|---|
| Raíz `content/` | 4 | 3 (`index`, `Cómo se usa esta web`, `anticopyright`) | — | — | `¿¿¿¿.md` es arte glitch (249 líneas de CSS/ASCII), intencional |
| `01_CATÁLOGO/` (raíz) | 7 | 3 (`AAAAH`, `Elowen`, `Sindicato Uber`) | **1 vacío: `Acto-I.md` (0 líneas)** | 3 (`index`, `cronologico`, `colaboraciones`) | `AAAAH` es un single pero vive en la raíz, no en `Releases/Singles/` |
| `01_CATÁLOGO/Releases/` | 18 | 13 | 1 (`Lluvia y piano`, `draft: true` con embed placeholder `album=XXXXXXXX`) | 4 | **`Singles/index.md` es una copia de una portada antigua del sitio** ("Próximos bolos", "Nuestra bitácora") — contenido equivocado |
| `01_CATÁLOGO/Fanzines/` | 5 | 3 | 1 (`fanzine-555k-queimada`, 7 líneas) | 2 (`index` + `fanzines`) — redundantes entre sí | `Una Conversación con ChatGPT AM.md` no tiene frontmatter |
| `02_ARTISTAS/` | 13 | 10 | **1 vacío: `Queimada Circuit Records.md` (0 líneas)** + 2 casi-stubs (`delirium-psychosis`, `drama-recorder`, 4 líneas) | 1 | Convive el vacío con el real `queimada-circuit-records.md` — mismo nombre, distinta capitalización |
| `03_EVENTOS/` (raíz) | 16 | 15 (plantilla mínima: 5-6 líneas, 1-2 frases de cuerpo) | — | 1 | Sanas como archivo; ninguna pasa de 46 palabras |
| `03_EVENTOS/colaboradores/` | 23 | 0 | **23 stubs** (1 frase de cuerpo cada uno; 3 huérfanos que ningún evento enlaza: `cecegaia`, `loobleart`, `origami-azul`) | — | Duplican `Colaboradores y sellos vinculados.md` línea a línea |
| `04_LAB/` | 4 | 2 (`index`, `Un montón de links`) | 1 (`Bilbao-Underground` con placeholder literal `[URL del proyecto]`) | 1 (`Proyectos-Externos/index`, 2 de sus 3 enlaces no existen) | La sección con más voz propia del sitio |
| `05_BLOG/` | 15 | 14 posts | — | 1 | Ver §2: 3 posts son íntegramente IA |

**Total: ~29 archivos son stubs, vacíos o listados redundantes — el 28% del sitio.**

---

## 2. Detección de texto IA

### El patrón general

Hay **una plantilla de ficha de release clonada** en media docena de archivos: `## Contexto` (frase idéntica repetida), `## Sobre el tema`, `## Escuchar`, `## Detalles técnicos` (lista con **Proceso / Concepto / Estética / Sello**), `## Enlaces`. La sección "Detalles técnicos" es el tell más claro: reformula en bullets lo que el párrafo anterior ya contaba, con líneas tipo `**Estética:** Cybergrind, digital hardcore, harsh noise, gabber, grindcore` que son metadata de scraping, no escritura. Los cinco tracks de *Buenos días, Ansiedad* comparten literalmente la misma frase de apertura: *"Tema del álbum [[Buenos días, Ansiedad]], grabado durante 2024 como parte del proceso de lidiar con la ansiedad mediante composición ambient."*

En el blog el patrón es doble: (1) un scaffold visual idéntico en 8 posts (mismas Google Fonts, misma paleta neón, cajas rotadas, caja-tesis → tarjetas numeradas → caja-conclusión) y (2) contenido reciclado entre posts (King Tubby en 3 posts, Mick Gordon/DOOM en 2 con la misma cita, el ejercicio del autobús→MIDI en 3, Eno/*Music for Airports* en 3).

**El dato más incriminatorio: los dos posts marcados "Estatus: Listo" son los más IA del sitio, y los marcados "en bruto" son los más humanos.** El criterio de "listo" está invertido: listo = pulido por máquina.

### Nivel A — suena a ficha/ensayo generado (con evidencia literal)

| Entrada | Evidencia |
|---|---|
| `05_BLOG/el synthwave no es nostalgia...` (1.340 palabras, "Listo") | *"Hay algo profundamente extraño en la nostalgia que articula el synthwave, y esa extrañeza merece tomarse en serio antes de disolver el fenómeno en narrativas demasiado simples sobre autenticidad traicionada o capitalismo depredador."* · Cierre: *"¿Es esto un final o un nuevo comienzo? Probablemente un ciclo."* Cero Bilbao, cero primera persona real. |
| `05_BLOG/el bug era un fantasma...` ("Listo") | Es una respuesta de chatbot pegada tal cual — arranca contestando una pregunta que no está en el texto: *"Sí, el término **"bug"** ya se usaba antes del incidente con Grace Hopper."* · Cierre-síntesis: *"...una evolución de esta tradición lingüística, que mezcla superstición, problemas técnicos y la experiencia directa de fallos imprevistos."* El index promete vaporwave; el vaporwave no aparece. |
| `05_BLOG/el software libre como acto de resistencia` | *"Söderberg ve en el software libre una manifestación moderna de este intelecto general, ya que el código abierto permite a cualquiera acceder, modificar y redistribuir software sin estar sujeto a las restricciones impuestas por la propiedad privada."* El propio archivo lo confiesa en nota: el cuerpo es resumen académico. El index promete "por qué importa en la música": la música no aparece ni una vez. |
| `01_CATÁLOGO/AAAAH.md` (y su clon `Holy Humpback Whale.md`) | *"Un tema que desarrolla sonidos y procesos de ruido intentando expresar la frustración y la hostilidad de vivir en un mundo capitalista."* + la lista `**Estética:** Cybergrind, digital hardcore, harsh noise, gabber, grindcore`. Valdría para cualquier track de noise del mundo. |
| `02_ARTISTAS/cuerpo pensante.md` (bio) | *"Su trabajo transita entre el ambient, el IDM conceptual, el noise experimental y la creación audiovisual, desarrollando proyectos que combinan sonido, narrativa, artes plásticas, animación y procesos colaborativos."* Frase de dossier de subvención. |
| `02_ARTISTAS/Cachalote Mecánico.md` | *"...convierte el nombre en una imagen de poder y de opacidad semiótica simultánea."* Ensayo de crítico inventado sobre tu propio alias. |
| `02_ARTISTAS/camile-duhart.md` | *"Su trabajo atraviesa la imagen procesada y la distorsión digital como lenguaje."* — valdría para cualquier videoartista. |
| ~8 stubs de `colaboradores/` (`cenizasdb`, `cirkolepsia`, `elsalonenllamas`, `errekaleor`, `kolektivokotxino`, `misoginia-punk`, `rockbeer`, `tbkmedialab`) | *"Proyecto musical de Bilbao. Comparten espacio y han coincidido en eventos con QCR."* (cenizasdb) — la misma plantilla con las palabras cambiadas. El colaborador más recurrente del sello (kolektivokotxino, 5 eventos) tiene la ficha más genérica. |

### Nivel B — mixto (núcleo humano + envoltorio IA)

- **Los 4 tracks publicados de *Buenos días, Ansiedad*** (`Abismo`, `Airplanes for Murcia`, `Marijaia`, `cómo calmar a una supernova`): la sección `## Historia` es de lo mejor del sitio (voz propia, concreta, emocionante). Todo lo demás de cada ficha — "Contexto" clonado, "Detalles técnicos" que re-cuentan la historia en bullets — es relleno de plantilla.
- **`02_ARTISTAS/555-kables.md`**: datos buenos + análisis de crítico externo: *"Esto lo coloca en una posición interesante dentro del catálogo de QCR."*
- **`queimada-circuit-records.md`**: la sección Origen (la queimada gallega, "nació porque había mucha música acumulada") es tuya; la sección "Contexto" con su *"hilo conceptual que atraviesa el catálogo — sin nombrarse explícitamente — es la comunicación como problema sonoro y filosófico"* es ensayo generado.
- **Blog**: `cambia el método`, `no hay un método`, `mil maneras de aprender un cacharro`, `backrooms vs Eno`, `quince preguntas`, `el sonido solo se cuida`, `primer concierto noise`, `Eric Nord` — todos tienen transcripción de voz tuya genuina dentro de un scaffold de tarjetas simétricas generado. En `quince preguntas`, los casos son tropo de catálogo decolonial (*"mi mayor preocupación es llenar un teatro en Berlín"*) y no hay ni un caso propio del entorno QCR.
- **`sei-kitty-breakcore.md`, `guayaba-dondestas-tu.md`**: detalle concreto real (la gata, el pedal de metal) con redacción de nota de prensa (*"El resultado es una mezcla de jazz, breakcore y experimentación sonora"*, *"texturas que se desintegran y se reconstruyen"*).

### Nivel C — voz propia (esto es lo que hay que proteger)

`Buenos días, Ansiedad` (ficha de álbum: *"hasta caérseme cachos de barba"*), las 4 `## Historia` de sus tracks, `Aketxe` (*"una Crave con problemas técnicos que solo dejó escapar algunos sonidos"*), `breakmania`, `txus-space`, `buchi-buchip-acto-i` (el texto del congreso buchi), `fanzines.md` y `Una Conversación con ChatGPT AM` (*"la energía de alguien que no debería estar despierto tomando decisiones creativas"*), casi todas las fichas de eventos (*"Grishacecosas dirigió un cadáver exquisito"*, *"recién bautizados ese mismo Halloween"*), `04_LAB/index` y `Un montón de links` (*"Blog de sándwiches giratorios"*), y en el blog: `comienzos de queimada`, `como hacer música sin tener ni puta idea`, `la ciudad como instrumento`, y `Eric Nord` (con pulido IA leve encima).

**Marcadores de tu voz reconocibles y consistentes**: cacharro/cacharreo, "ni puta idea", nombres reales (Nere, Eneko, Luci, Javi), lugares (Katakomba, Txirbilenea, Aste Nagusia), sintaxis que se tuerce a mitad de frase. Cuando eso falta, es IA. Es un test fiable al 100% en este corpus.

---

## 3. Coherencia estructural y navegabilidad

### 3.1 Enlaces rotos (verificados contra la lógica real de Quartz)

Tu config usa `markdownLinkResolution: "shortest"`, que **solo resuelve por nombre de archivo exacto, sensible a mayúsculas, y no resuelve rutas con subcarpeta** salvo que coincidan desde la raíz. Consecuencias en producción:

| Roto | Dónde | Por qué |
|---|---|---|
| `[[colaboradores/anarkoeneko]]` y **~19 enlaces más** `[[colaboradores/*]]` | Casi todas las fichas de evento | Con subcarpeta no hay match "shortest"; caen a `/colaboradores/x`, que no existe (la ruta real es `/03_EVENTOS/colaboradores/x`). **La red de colaboradores está rota entera desde los eventos.** |
| `[[colaboradores/]]` | `03_EVENTOS/index.md` ("Ver colaboradores externos") | Mismo problema; no hay `colaboradores/index.md`. |
| `[[Txus-Space]]` (×3), `[[Breakmania]]` (×2) | `cuerpo pensante`, `Cachalote Mecánico`, `Colaboradores y sellos vinculados` | El archivo es `txus-space.md` / `breakmania.md`: mismatch de mayúsculas → 404. |
| `[[01_CATALOGO/index]]` | Pie de `Aberración Bológica` y `Holy Humpback Whale` | Sin tilde; la carpeta real es `01_CATÁLOGO`. |
| `[[cuerpopensante]]` | Frontmatter del fanzine "Cómo hacer música..." | El archivo es `cuerpo pensante.md`. |
| `[[Los-Buchis]]` (×2) | `cómo calmar a una supernova` | No existe en el vault. |
| `[[Lista-555]]`, `[[Mapa-Euskadi-Underground]]` | `Proyectos-Externos/index.md` | 2 de los 3 enlaces del índice no existen. |
| `[[Filosofía del arte generativo inconvergent]]` | `Un montón de links` | No existe. |
| `[[555-kables\]]` | `Cachalote Mecánico.md` | Barra invertida colada en el wikilink. |
| `[[Lluvia y piano]]` | Tracklist de `Buenos días, Ansiedad` | El track está `draft: true` → Quartz no lo publica → enlace muerto en el tracklist del álbum publicado. |
| 4 PNG + 2 MOV del LAB | `04_LAB/index.md` | `src` en HTML crudo apunta a `04_LAB/` pero los archivos viven en `04_LAB/FILES/` → 404. |
| `hackertyper.jcom` | `Un montón de links` | Typo (`.jcom`). |

### 3.2 Páginas vacías que capturan tráfico

- **`Acto-I.md` (0 bytes)** captura `[[Acto-I]]` desde `cronologico`, `cuerpo pensante` (×2) y `anarkoeneko`. Quien clica en tu primer disco desde el archivo cronológico aterriza en una página en blanco. La ficha real (`buchi-buchip-acto-i_FANZINE_ALBUM.md`) queda huérfana de esos enlaces.
- **`02_ARTISTAS/Queimada Circuit Records.md` (0 bytes)** captura `[[Queimada Circuit Records]]` desde `555-kables`, `Cachalote Mecánico`, `buchi-buchip` y `fanzine-555k-queimada`, y `[[Queimada-Circuit-Records]]` desde `cuerpo pensante` — por coincidencia exacta de mayúsculas gana el archivo vacío frente al real `queimada-circuit-records.md`. **La página "¿qué es el sello?" enlazada desde todas las fichas de artista está en blanco.**

### 3.3 Duplicación de contenido

1. **El catálogo existe 5 veces**: `cronologico.md`, `Releases/index.md`, `Singles/singles.md`, `Albums/albumes.md`, `colaboraciones.md` — más el "Último release" del índice y las discografías embebidas en cada ficha de artista y en las tarjetas de `02_ARTISTAS/index.md`. Publicar un single implica tocar **6-7 páginas**.
2. **`Holy Humpback Whale.md` es un copy-paste íntegro de `AAAAH.md`**: mismo título ("Cachalote Mecánico - AAAAH"), misma fecha, mismo texto, mismo embed de *Digital Intifada* — el track de Drama Recorder no tiene ficha real.
3. **Colaboradores por triplicado**: los 23 stubs de `colaboradores/` ≈ las líneas de "Órbita extendida" de `Colaboradores y sellos vinculados.md` ≈ las fichas de `02_ARTISTAS/` (`anarkoeneko`, `camile-duhart`, `dirty-tapes` existen en ambos sitios con el mismo texto; las listas "Aparece en" de los dos `anarkoeneko` son idénticas — doble mantenimiento garantizado a desincronizarse). Y como los eventos enlazan siempre a `[[colaboradores/x]]` (roto, ver arriba), las fichas buenas ni siquiera reciben el tráfico.
4. **El fanzine "Cómo hacer música..." está contado 3 veces** (ficha propia, `fanzines.md`, post del blog), y la ficha propia contiene pegado el texto de `fanzines.md` incluyendo un "→ Ver ficha completa" **que enlaza a sí misma**.
5. **Bilbao Underground Explorer** descrito en `04_LAB/index` (bien) y en `Proyectos-Externos/Bilbao-Underground.md` (peor, con placeholder).
6. La anécdota de los chips 555 en Txarraska aparece literal en 3 páginas; el cadáver exquisito de Grishacecosas en 3; el datamoshing de Camile en 3.

### 3.4 Contradicciones y nomenclatura

- **buchi.buchip tiene dos autorías incompatibles**: "proyecto colaborativo de camile-duhart y Andrea Jalon" (`buchi-buchip_CINE EXTENDIDO.md`) vs "alias de síntesis de su fundador [cuerpo pensante]" (`queimada-circuit-records.md`, `cronologico.md`, Bandcamp).
- **Breakmania** está listado como release de cuerpo pensante en su ficha y como release de cachalote mecánico en la suya.
- **Fechas bailando**: *Buenos días, Ansiedad* es 2026 en el índice del catálogo, 2025 en `Releases/index.md` y `date: 2025-01-21` en frontmatter. *Holy Humpback Whale*: 2026 en `Releases/index.md`, 2025 en `cronologico` y `singles.md`.
- **Errekaleor figura como "Bilbao"** en evento y stub; Errekaleor es el barrio okupado de Vitoria-Gasteiz.
- Nomenclatura sin convención: kebab-case (`sei-kitty-breakcore`), Título Con Espacios (`Holy Humpback Whale`), sufijos gritados (`_FANZINE`, `_VIDEOCLIP`, `_CINE EXTENDIDO`, `_BLOG`), un typo fosilizado en nombre de archivo (`Aberración Bológica.md`), y la colisión `Queimada Circuit Records.md` / `queimada-circuit-records.md`.
- Jerarquía incoherente con lo que ve el visitante: `AAAAH` (single) vive en la raíz del catálogo y no aparece en `Releases/index.md`; `Elowen` y `Sindicato Uber` están etiquetados `lab` pero viven en `01_CATÁLOGO/`; `Fanzines/` tiene dos índices (`index.md` y `fanzines.md`); `Singles/index.md` es una homepage vieja.
- Placeholders publicados: `LINK_CUANDO_LO_TENGAS` (Aketxe), `*(añade aquí el link exacto)*` con href vacío (Elowen), `[URL del proyecto]` (Bilbao-Underground), embed `album=XXXXXXXX/track=TRACK_ID` (Lluvia y piano).

---

## 4. Coste de mantenimiento por sección

| Sección | ¿Caduca? | Pasos reales para añadir una entrada hoy | Veredicto coste/valor |
|---|---|---|---|
| **Catálogo** | No (archivo estable) | **6-7 ediciones por release**: ficha nueva + `cronologico` + `singles.md`/`albumes.md` + `Releases/index.md` + discografía en ficha de artista + tarjeta en `02_ARTISTAS/index.md` + "Último release" del índice del catálogo | El contenido es estable pero la estructura lo vuelve carísimo. Es la causa nº 1 de que te cueste actualizar la web. |
| **Artistas** | Poco | 1 ficha + tarjeta HTML a mano en el index (HTML inline, frágil) + posible stub espejo en `colaboradores/` | Coste medio inflado por la duplicación con colaboradores. |
| **Eventos** | **Sí** — es la única sección con reloj. Último evento: ene 2026 (hace 6 meses). `Singles/index.md` aún promete "Próximos bolos" | 1 ficha (plantilla de 6 líneas, barata) + línea en el index + hasta N stubs nuevos de colaboradores | La ficha en sí es barata y buena. Lo caro es la expectativa de crear stub por cada colaborador nuevo. La promesa de "agenda" es incumplible; como *registro* funciona. |
| **`colaboradores/`** | Sí (acumula) | 1 stub + línea en Órbita extendida + a veces ficha espejo en Artistas + actualizar "Aparece en" a mano (que Quartz ya genera solo como backlinks) | **Coste supera claramente el valor.** 23 archivos para sostener información que cabe en una página y cuyos enlaces entrantes además están rotos. |
| **LAB** | No — es cuaderno, se actualiza cuando te apetece | Pegar un bloque HTML en el index | Coste bajo, valor identitario alto. La mejor relación del sitio. |
| **Blog** | No caduca si se asume como archivo; caduca si promete ritmo | Escribir el post + scaffold CSS + entrada manual en el index con categoría y fecha | Coste altísimo por post con el scaffold actual. El valor real está en 5-6 posts; el resto diluye. |
| **Fichas por track** (álbum) | No | 1 ficha por track con plantilla de 6 secciones | Las Historias valen oro; el envoltorio (Contexto/Detalles/Enlaces clonados) es puro coste. |

---

## 5. Propuesta de simplificación

### Veredictos por sección

| Sección / página | Veredicto | Justificación |
|---|---|---|
| Raíz (`index`, `Cómo se usa`, `anticopyright`, `¿¿¿¿`) | **MANTENER** | Poco, claro y con personalidad. `¿¿¿¿` es identidad, no ruido. |
| `01_CATÁLOGO/cronologico.md` | **MANTENER como única vista del catálogo** | Ya es la mejor página del catálogo: todo en orden cronológico con embed y una línea. Es exactamente tu formato ideal. |
| `Releases/index.md`, `singles.md`, `albumes.md`, `colaboraciones.md`, `Singles/index.md` | **QUITAR** | Cuatro copias del cronológico y una homepage vieja. Cada una es un sitio más donde olvidarte de añadir el próximo release. |
| Fichas de release | **MANTENER en formato reducido**: título + embed + la Historia (2-10 líneas tuyas). Quitar en todas: "Contexto" clonado, "Detalles técnicos", "Estética", "Enlaces" redundantes | Tu intuición exacta. Las Historias de *Buenos días, Ansiedad*, Aketxe o breakmania ya son eso; solo hay que quitarles el andamio. |
| Fichas por track de *Buenos días, Ansiedad* | **FUSIONAR en la página del álbum** (5→1): cada Historia como sección con su embed de track | Las historias se leen mejor juntas, eliminas el problema del draft roto de "Lluvia y piano" y bajas 5 archivos de mantenimiento. |
| `Acto-I.md` y `02_ARTISTAS/Queimada Circuit Records.md` (vacíos) | **QUITAR** (y redirigir sus enlaces a las fichas reales) | Son agujeros negros de navegación: capturan clics y muestran páginas en blanco. |
| `Fanzines/` | **MANTENER, un solo índice** (`fanzines.md`; quitar `index.md` o al revés) y desduplicar la ficha del fanzine | El contenido es bueno y estable; sobra un índice y una copia. |
| `02_ARTISTAS/` (4 proyectos propios + página del sello) | **MANTENER, reescribiendo las bios**: 3-5 líneas tuyas por proyecto, fuera el ensayo de crítico ("opacidad semiótica", "posición interesante dentro del catálogo") | Es lo primero que ve quien quiere saber quién eres; ahora mismo suena a dossier ajeno. Resolver ahí la contradicción buchi.buchip y el Breakmania duplicado. |
| `02_ARTISTAS/` fichas de colaboradores/sellos (`anarkoeneko`, `camile-duhart`, `dirty-tapes`, `delirium`, `drama-recorder`) + `Colaboradores y sellos vinculados.md` + **toda** `03_EVENTOS/colaboradores/` | **FUSIONAR en una sola página**: `Colaboradores y sellos vinculados.md`, que ya hace ese trabajo mejor (formato órbita, con voz) | 29 archivos → 1. Los backlinks "Aparece en" los genera Quartz solo. Rescatar antes las 4 frases con textura (chips 555, cierre de Txirbilenea, goikore, Andrea Jalon). Arregla de paso los ~20 enlaces rotos `[[colaboradores/*]]` apuntándolos a la página única. |
| `03_EVENTOS/` | **CONGELAR como "Archivo de eventos"** | El formato telegráfico es perfecto y barato; solo hay que quitar toda promesa de "agenda/próximos bolos" para que 6 meses sin bolos no sea una web muerta sino un archivo. |
| `04_LAB/` | **MANTENER** (arreglando las 6 rutas de media rotas) | La sección más viva y más tuya. |
| `04_LAB/Proyectos-Externos/` | **QUITAR** | 2 de 3 enlaces del índice no existen y lo único real (Bilbao Underground) ya está mejor contado en el index del LAB. |
| `05_BLOG/` | **CONGELAR + podar** | Sin promesa de ritmo es un archivo de textos, que es lo que ya es. Podar según la tabla siguiente. |

### Blog: poda concreta

| Post | Acción |
|---|---|
| `el bug era un fantasma` | **QUITAR** (o reescribir de cero). Es una respuesta de chatbot pegada; delata al blog entero. |
| `el synthwave no es nostalgia` | **QUITAR** o reducir a un tercio partiendo del único tramo con personalidad (el "nodo interdimensional"). |
| `el software libre` | **QUITAR hasta reescritura** (despublicar con `draft: true`). |
| `cambia el método` + `no hay un método` | **FUSIONAR** en un solo post de métodos/juegos: comparten Mick Gordon, ejercicios y tesis. |
| `quince preguntas` | Recortar a 6-8 preguntas y anclar 2 en casos propios (vuestros samples, el fanzine, la Katakomba). |
| `backrooms vs Eno` | Recortar las 17 fichas de discos a 5-6 contadas en primera persona. |
| `mil maneras de aprender un cacharro` | Quedarse con la mitad personal (la Digitakt) y 3-4 rutas. |
| `el sonido solo se cuida` | Recortar el bloque Eno (repetido en otros 2 posts) y desarrollar lo del juicio, que es lo mejor. |
| `la ciudad como instrumento` | Sacar del index (es un apunte de 4 líneas vendido como ensayo) o desarrollar. |
| `comienzos de queimada`, `como hacer música`, `Eric Nord`, `primer concierto noise` | **MANTENER** (retoques mínimos). |

### Estimación de trabajo de texto

- **Borrar sin reescribir nada**: ~35 archivos (23 stubs colaboradores + 2 vacíos + 5 listados de catálogo + 2 Proyectos-Externos + 1 índice duplicado de Fanzines + 2-3 posts A del blog).
- **Reescribir/recortar**: ~15 piezas — 5 bios de artistas (cortas), 6-7 fichas de release (recorte, no escritura: quitar secciones), 1 ficha nueva real para *Holy Humpback Whale* (2 líneas + embed correcto), y la fusión de 2 posts del blog.
- **Prioridad de reescritura**: (1º) `Holy Humpback Whale` — es contenido *erróneo* publicado, no solo feo; (2º) bios de los 4 proyectos propios — es la cara del sello; (3º) recorte de plantilla en fichas de release — mecánico y rápido; (4º) blog — sin prisa, está congelado.

Resultado estimado: **de 105 archivos a ~65**, con un flujo de publicación de release de 6-7 ediciones a **2** (ficha nueva + línea en cronológico).

---

## Plan de acción por impacto/esfuerzo

**Si solo tienes una tarde (en este orden):**

1. **(30 min) Tapar los agujeros visibles**: borrar `Acto-I.md` y `02_ARTISTAS/Queimada Circuit Records.md` vacíos y repuntar sus enlaces a las fichas reales; sustituir el contenido clonado de `Holy Humpback Whale.md` por título + embed de Drama Recorder + 2 líneas; quitar `[[Lluvia y piano]]` del tracklist (o quitarle el draft y arreglar su embed); rellenar los 3 placeholders (Elowen, Aketxe, o borrar la línea).
2. **(30 min) Reparación masiva de enlaces**: buscar-y-reemplazar `[[colaboradores/` → `[[` en `03_EVENTOS/` (~20 enlaces rotos), corregir `[[Txus-Space]]`→`[[txus-space]]`, `[[Breakmania]]`→`[[breakmania]]`, `[[01_CATALOGO/index]]`→`[[01_CATÁLOGO/index]]`, y las 6 rutas de media del LAB (`FILES/...`).
3. **(20 min) Matar los listados redundantes del catálogo**: borrar `singles.md`, `albumes.md`, `colaboraciones.md`, `Releases/index.md`, `Singles/index.md`; que todo apunte a `cronologico`.
4. **(10 min) Despublicar los 3 posts A del blog** con `draft: true` y quitar sus líneas del index del blog.
5. **(45 min) Fusionar colaboradores**: volcar las 4 frases con textura en `Colaboradores y sellos vinculados.md` y borrar la carpeta `colaboradores/` entera.
6. **(lo que quede) Empezar el recorte de plantilla en fichas de release**: borrar las secciones "Contexto"/"Detalles técnicos"/"Estética"/"Enlaces" de AAAAH y los tracks del álbum. Es borrar, no escribir.

Lo que NO haría esa tarde: reescribir bios ni tocar el blog B — eso es escritura con calma, no limpieza.
