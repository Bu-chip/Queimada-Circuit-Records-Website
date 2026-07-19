import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

// Footer de marca de Queimada: 3 columnas (ESCUCHA / EXPLORA / SELLO) + línea de
// cierre con el crédito de foto y el huevo de pascua (¿¿¿¿). Los enlaces externos
// abren en pestaña nueva; los internos son rutas absolutas desde la raíz.
export default (() => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-cols">
          <div class="footer-col">
            <h3 class="footer-col__head">Escúchanos</h3>
            <ul>
              <li>
                <a href="https://queimada-circuit-records.bandcamp.com" target="_blank" rel="noopener">
                  Bandcamp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/queimada.circuit.records/"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram @queimada.circuit.records
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h3 class="footer-col__head">Explora</h3>
            <ul>
              <li>
                <a href="/01_CATÁLOGO/">Catálogo</a>
              </li>
              <li>
                <a href="/02_ARTISTAS/">Artistas</a>
              </li>
              <li>
                <a href="/Cómo-se-usa-esta-web">¿Cómo se usa esta web?</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h3 class="footer-col__head">Sobre el sello</h3>
            <ul>
              <li>
                <a href="/02_ARTISTAS/queimada-circuit-records">¿Qué es Queimada?</a>
              </li>
              <li>
                <a href="mailto:queimadacircuitrecords@gmail.com">Contacto</a>
              </li>
              <li>
                <a href="/anticopyright">Anticopyright</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-sep" aria-hidden="true">◈ ◈ ◈</div>

        <div class="footer-end">
          <span class="footer-credit">
            Foto de Artistas:{" "}
            <a href="https://richiescott.onfabrik.com/" target="_blank" rel="noopener">
              Richie Scott
            </a>
          </span>
          <p class="footer-colophon">
            QUEIMADA CIRCUIT RECORDS // BILBAO · © {year}
            <a class="footer-egg" href="/¿¿¿¿" aria-label="¿¿¿¿">
              ¿
            </a>
          </p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
