# Queimada Circuit Records

Web del sello discografico experimental desde Bilbao.

## Stack

- [Quartz 4](https://quartz.jzhao.xyz/) - Generador de sitio estatico
- Markdown + Wikilinks para contenido
- SCSS para estilos personalizados

## Desarrollo local

```bash
npm install
npx quartz build --serve
```

La web estara disponible en `http://localhost:8080`

## Estructura

```
content/
├── index.md           # Pagina principal
├── Releases/          # Discografia
│   ├── Albums/
│   └── Singles/
├── Blog/              # Notas y reflexiones
├── Fanzines/          # Publicaciones DIY
├── Visual/            # Arte y portadas
├── Media/             # Videos y sesiones
├── DIY/               # Hardware y electronica
├── Eventos/           # Conciertos
└── Proyectos-Externos/
```

## Estetica

- Fondo negro (#0a0a0a)
- Violeta principal (#a855f7)
- Rosa secundario (#ec4899)
- Tipografia monoespaciada (Space Mono)

## Contacto

queimadacircuit@gmail.com
