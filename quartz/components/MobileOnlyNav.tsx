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
function setupMobileNav() {
  const openBtn = document.getElementById("mobile-nav-btn")
  const closeBtn = document.getElementById("mobile-nav-close-stable")

  function openMenu() {
    document.body.classList.add("mobile-nav-open")
  }

  function closeMenu() {
    document.body.classList.remove("mobile-nav-open")
  }

  function handleLinkClick(e) {
    if (document.body.classList.contains("mobile-nav-open")) {
      const target = e.target
      if (target.tagName === 'A' && target.closest('.explorer-content')) {
        closeMenu()
      }
    }
  }

  if (openBtn) {
    openBtn.removeEventListener("click", openMenu)
    openBtn.addEventListener("click", openMenu)
    window.addCleanup(() => openBtn.removeEventListener("click", openMenu))
  }

  if (closeBtn) {
    closeBtn.removeEventListener("click", closeMenu)
    closeBtn.addEventListener("click", closeMenu)
    window.addCleanup(() => closeBtn.removeEventListener("click", closeMenu))
  }

  document.removeEventListener("click", handleLinkClick)
  document.addEventListener("click", handleLinkClick)
  window.addCleanup(() => document.removeEventListener("click", handleLinkClick))

  // Close menu on navigation
  document.body.classList.remove("mobile-nav-open")
}

document.addEventListener("nav", setupMobileNav)
setupMobileNav()
`

MobileOnlyNav.afterDOMLoaded = script

export default (() => MobileOnlyNav) satisfies QuartzComponentConstructor
