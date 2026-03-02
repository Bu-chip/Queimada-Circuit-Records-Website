import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/backToTop.scss"

const BackToTop: QuartzComponent = () => {
  return (
    <div class="back-to-top">
      <button id="back-to-top-btn" aria-label="Volver arriba" title="Volver arriba">
        ↑ arriba
      </button>
    </div>
  )
}

BackToTop.css = style

BackToTop.afterDOMLoaded = `
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  // Mostrar solo cuando se ha bajado más de 400px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
`

export default (() => BackToTop) satisfies QuartzComponentConstructor
