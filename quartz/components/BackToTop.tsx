import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/backToTop.scss"

const BackToTop: QuartzComponent = () => {
  return (
    <div class="back-to-top">
      <button id="back-to-top-btn" aria-label="Volver arriba" title="Volver arriba">
        ^ inicio
      </button>
    </div>
  )
}

BackToTop.css = style

// Quartz SPA: usar "nav" event para re-registrar en cada navegación
BackToTop.afterDOMLoaded = `
  function setupBackToTop() {
    const btn = document.getElementById("back-to-top-btn");
    if (!btn) return;

    // Limpiar listener anterior si existe
    const oldHandler = btn._scrollHandler;
    if (oldHandler) {
      window.removeEventListener("scroll", oldHandler);
    }

    // Comprobar estado inicial por si ya estamos scrolleados
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }

    const handler = () => {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    };

    // Guardar referencia para poder eliminarla luego
    btn._scrollHandler = handler;
    window.addEventListener("scroll", handler, { passive: true });

    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Primera carga
  setupBackToTop();

  // Cada navegación SPA de Quartz
  document.addEventListener("nav", setupBackToTop);
`

export default (() => BackToTop) satisfies QuartzComponentConstructor
