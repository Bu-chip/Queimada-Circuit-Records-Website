import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function MobileOnlyNav({ displayClass }: QuartzComponentProps) {
  return (
    <div class={classNames(displayClass, "mobile-only-nav-container")}>
      <button id="mobile-nav-btn" type="button" aria-label="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="5 8 14 8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* This button is styled to only appear when body.mobile-nav-open is active */}
      <button id="mobile-nav-close-stable" type="button" aria-label="Close Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  )
}

const script = `
// Mobile nav handlers - using onclick for simplicity and reliability
const openBtn = document.getElementById("mobile-nav-btn")
const closeBtn = document.getElementById("mobile-nav-close-stable")

if (openBtn) {
  openBtn.onclick = function(e) {
    e.preventDefault()
    e.stopPropagation()
    document.body.classList.add("mobile-nav-open")
    document.documentElement.classList.add("mobile-no-scroll")
  }
}

if (closeBtn) {
  closeBtn.onclick = function(e) {
    e.preventDefault()
    e.stopPropagation()
    document.body.classList.remove("mobile-nav-open")
    document.documentElement.classList.remove("mobile-no-scroll")
  }
}

// Close menu when clicking on links inside explorer
document.addEventListener("click", function(e) {
  if (document.body.classList.contains("mobile-nav-open")) {
    const target = e.target
    if (target.tagName === 'A' && target.closest('.explorer-content')) {
      document.body.classList.remove("mobile-nav-open")
      document.documentElement.classList.remove("mobile-no-scroll")
    }
  }
})
`

MobileOnlyNav.afterDOMLoaded = script

export default (() => MobileOnlyNav) satisfies QuartzComponentConstructor
