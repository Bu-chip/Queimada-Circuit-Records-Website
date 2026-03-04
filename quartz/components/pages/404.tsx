import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const css = `
@keyframes glitch1 {
  0% { transform: translate(0) rotate(0deg); }
  10% { transform: translate(-5px, 5px) rotate(2deg); }
  20% { transform: translate(5px, -5px) rotate(-2deg); }
  30% { transform: translate(-5px, -5px) rotate(3deg); }
  40% { transform: translate(5px, 5px) rotate(-3deg); }
  50% { transform: translate(-3px, 3px) rotate(1deg); }
  60% { transform: translate(3px, -3px) rotate(-1deg); }
  70% { transform: translate(-3px, -3px) rotate(2deg); }
  80% { transform: translate(3px, 3px) rotate(-2deg); }
  90% { transform: translate(-1px, 1px) rotate(1deg); }
  100% { transform: translate(0) rotate(0deg); }
}
@keyframes rgb {
  0%, 100% { color: #ff00ff; text-shadow: 3px 0 #00ffff, -3px 0 #ffff00; }
  25% { color: #00ff00; text-shadow: -3px 0 #ff00ff, 3px 0 #00ffff; }
  50% { color: #00ffff; text-shadow: 3px 0 #ffff00, -3px 0 #ff00ff; }
  75% { color: #ffff00; text-shadow: -3px 0 #00ff00, 3px 0 #ff00ff; }
}
.error-container {
  background: #000;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Courier Prime', monospace;
  padding: 2rem;
}
.error-code {
  font-size: 8rem;
  font-weight: bold;
  animation: rgb 1.5s infinite, glitch1 0.3s infinite;
  margin: 0;
  line-height: 1;
}
.error-symbols {
  font-size: 2rem;
  animation: rgb 1.8s infinite, glitch1 0.25s infinite;
  margin: 2rem 0;
}
.error-message {
  font-family: 'Syne', sans-serif;
  font-size: 1.3rem;
  color: #ccc;
  text-align: center;
  max-width: 600px;
  margin: 2rem 0;
  line-height: 1.6;
}
.nav-options {
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  max-width: 800px;
  width: 100%;
}
.nav-option {
  border: 2px solid;
  padding: 1.5rem;
  transition: all 0.3s;
  text-decoration: none;
  display: block;
}
.nav-option:nth-child(1) { border-color: #ff00ff; }
.nav-option:nth-child(1):hover { background: rgba(255,0,255,0.1); box-shadow: 4px 4px 0 rgba(255,0,255,0.3); }
.nav-option:nth-child(2) { border-color: #00ffff; }
.nav-option:nth-child(2):hover { background: rgba(0,255,255,0.1); box-shadow: 4px 4px 0 rgba(0,255,255,0.3); }
.nav-option:nth-child(3) { border-color: #00ff00; }
.nav-option:nth-child(3):hover { background: rgba(0,255,0,0.1); box-shadow: 4px 4px 0 rgba(0,255,0,0.3); }
.nav-option:nth-child(4) { border-color: #ffff00; }
.nav-option:nth-child(4):hover { background: rgba(255,255,0,0.1); box-shadow: 4px 4px 0 rgba(255,255,0,0.3); }
.nav-title {
  font-family: 'Azeret Mono', monospace;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.nav-option:nth-child(1) .nav-title { color: #ff00ff; }
.nav-option:nth-child(2) .nav-title { color: #00ffff; }
.nav-option:nth-child(3) .nav-title { color: #00ff00; }
.nav-option:nth-child(4) .nav-title { color: #ffff00; }
.nav-desc {
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  color: #999;
  line-height: 1.5;
}
@media (max-width: 768px) {
  .error-code { font-size: 4rem; }
  .error-message { font-size: 1.1rem; }
}
`

const NotFound: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div class="error-container">
        <div class="error-code">404</div>
        <div class="error-symbols">◢◣◤◥▞▚▙▟▛▜░▒▓█</div>
        <div class="error-message">Esta página no existe.</div>
        <div class="nav-options">
          <a href="/01_CATÁLOGO" class="nav-option">
            <div class="nav-title">→ CATÁLOGO</div>
            <div class="nav-desc">Toda la música publicada desde 2024. Álbumes, singles, fanzines, colaboraciones.</div>
          </a>
          <a href="/02_ARTISTAS" class="nav-option">
            <div class="nav-title">→ ARTISTAS</div>
            <div class="nav-desc">Quién hace la música. cuerpo pensante, 555 Kables, Cachalote Mecánico.</div>
          </a>
          <a href="/04_LAB" class="nav-option">
            <div class="nav-title">→ LAB</div>
            <div class="nav-desc">Proyectos DIY, hardware, visuales, código. Lo que se hace fuera del estudio.</div>
          </a>
          <a href="/05_BLOG" class="nav-option">
            <div class="nav-title">→ BLOG</div>
            <div class="nav-desc">Textos sobre hacer música, escuchar música, y todo lo que hay en medio.</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
