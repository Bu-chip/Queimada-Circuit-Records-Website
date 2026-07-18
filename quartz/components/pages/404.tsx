import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const css = `
.error-container {
  background: #0c0e11;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  color: #e8e4da;
}
.error-cat {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #6f7680;
  margin-bottom: 3rem;
}
.error-mark {
  position: relative;
  font-size: clamp(4.5rem, 17vw, 9rem);
  line-height: 1;
  color: #e8e4da;
}
.error-mark .ghost {
  position: absolute;
  inset: 0;
  color: #8f93bd;
  animation: markShiver 6.5s steps(1) infinite;
}
@keyframes markShiver {
  0%, 84% { transform: translate(0, 0); opacity: 0.45; }
  86% { transform: translate(7px, -3px); opacity: 0.9; }
  89% { transform: translate(-4px, 2px); opacity: 0.65; }
  93% { transform: translate(2px, 0); opacity: 0.45; }
  100% { transform: translate(0, 0); opacity: 0.45; }
}
.error-message {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #a9a59a;
  margin-top: 3rem;
  letter-spacing: 0.01em;
}
.nav-options {
  margin-top: 3.5rem;
  max-width: 800px;
  width: 100%;
}
.nav-option {
  display: block;
  text-decoration: none;
  padding: 1.1rem 0;
  border-bottom: 1px solid #1a1d22;
}
.nav-option:hover .nav-title {
  text-decoration: underline;
}
.nav-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.05rem;
  font-weight: bold;
  color: #e8e4da;
  margin-bottom: 0.35rem;
}
.nav-desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #8b9099;
  line-height: 1.5;
}
@media (max-width: 768px) {
  .error-mark { font-size: 4rem; }
  .error-message { font-size: 1rem; }
}
@media (prefers-reduced-motion: reduce) {
  .error-mark .ghost { animation: none; }
}
`

const NotFound: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div class="error-container">
        <div class="error-cat">404 · página no hallada</div>
        <div class="error-mark">
          ☞<span class="ghost" aria-hidden="true">☞</span>
        </div>
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
