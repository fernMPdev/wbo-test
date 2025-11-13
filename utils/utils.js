import slugify from 'slugify'

export function generateSlug(id, name) {
  const formattedName = slugify(name, {
    lower: true,
    strict: true,
    trim: true
  })

  return `${id}-${formattedName}`
}

export function getIdFromSlug(slug) {
  const id = slug.split('-')[0]
  return Number(id) || null
}

export function scrollToAnchor(anchorId, isMobile = false) {
  if (!anchorId) return

  let anchorElement = document.getElementById(anchorId)
  if (!anchorElement) return

  const offset = parseInt(anchorElement.getAttribute('data-anchor-offset')) || 0

  let top = 0
  let current = anchorElement

  while (current.offsetParent) {
    top += current.offsetTop
    current = current.offsetParent
  }

  const headerHeight =
    parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0
  let scrollBehavior = 'smooth'
  if (isMobile) {
    scrollBehavior = 'instant'
  }

  window.scroll({
    top: top - offset - headerHeight,
    behavior: scrollBehavior
  })
}
