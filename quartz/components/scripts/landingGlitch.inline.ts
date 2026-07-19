// Scramble "desencriptado" del titular de la landing.
// Las letras se resuelven de una en una en cascada (izq→der): en cada momento
// solo unas pocas están cifradas (símbolo aleatorio) y el resto ya es texto real.
// Se dispara al cargar, al hover y cada 8-12s. Respeta prefers-reduced-motion.

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________"
const CIPHER_WINDOW = 4 // nº de letras "cifradas" a la vez en el frente de la cascada
const STEP_MS = 34 // avance por fotograma
const RESOLVE_EVERY = 2 // cada cuántos fotogramas se resuelve una letra nueva

let rescheduleTimer: ReturnType<typeof setTimeout> | undefined
let running = false

function stopScheduling(): void {
  if (rescheduleTimer !== undefined) {
    clearTimeout(rescheduleTimer)
    rescheduleTimer = undefined
  }
}

function randGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
}

// Anima un único <span> (una línea del titular) resolviendo letra a letra.
function scrambleLine(el: HTMLElement, done: () => void): void {
  const finalText = el.dataset.text ?? el.textContent ?? ""
  const chars = Array.from(finalText)
  let frame = 0

  const render = () => {
    const resolved = Math.floor(frame / RESOLVE_EVERY) // letras ya fijadas
    let out = ""
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === " ") {
        out += " "
      } else if (i < resolved) {
        out += chars[i] // ya resuelta
      } else if (i < resolved + CIPHER_WINDOW) {
        out += randGlyph() // frente cifrado
      } else {
        out += " " // aún no ha llegado la cascada: hueco
      }
    }
    el.textContent = out
    frame++
    if (resolved <= chars.length) {
      requestAnimationFrame(() => setTimeout(render, STEP_MS))
    } else {
      el.textContent = finalText
      done()
    }
  }
  render()
}

function runScramble(title: HTMLElement): void {
  if (running) return
  running = true
  const lines = Array.from(title.querySelectorAll<HTMLElement>("span"))
  if (lines.length === 0) {
    running = false
    return
  }
  // Guarda el texto real la primera vez
  lines.forEach((l) => {
    if (!l.dataset.text) l.dataset.text = l.textContent ?? ""
  })
  let pending = lines.length
  const finishOne = () => {
    pending--
    if (pending === 0) running = false
  }
  // Las líneas arrancan escalonadas para que el barrido fluya de arriba abajo
  lines.forEach((line, idx) => {
    setTimeout(() => scrambleLine(line, finishOne), idx * 90)
  })
}

function scheduleNext(title: HTMLElement): void {
  const delay = 8000 + Math.random() * 4000 // 8-12s
  rescheduleTimer = setTimeout(() => {
    runScramble(title)
    scheduleNext(title)
  }, delay)
}

function setupGlitch(): void {
  stopScheduling()
  running = false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const title = document.querySelector<HTMLElement>(".landing-hero__title")
  if (!title) return

  // Hover: relanza el scramble
  title.addEventListener("mouseenter", () => runScramble(title))

  // Al cargar
  runScramble(title)
  // Cada 8-12s
  scheduleNext(title)
}

document.addEventListener("nav", setupGlitch)
setupGlitch()
