import breakpoints from './breakpoints'

export const mediaConditions = {}
breakpoints.forEach(({ name, width }) => {
  mediaConditions[name] = 'screen and (min-width: ' + width + 'px)'
})
mediaConditions.pointer = '(hover: hover) and (pointer: fine)'
mediaConditions.touch = '(hover: none) and (pointer: coarse)'
mediaConditions.ie = '(-ms-high-contrast: none), (-ms-high-contrast: active)'

// Generate object with breakpoint-named functions to insert mobile-first media queries in styled-components CSS
const media = {}
breakpoints.forEach(({ name }) => {
  media[name] = `@media ${mediaConditions[name]}`
})

/* Extra functions to generate media queries */
// Desktop-first query. Accepts both breakpoint name or px number
// *** CANNOT be composed with media.all
media.below = (value) => `@media screen and (max-width: ${(breakpoints.get(value) || value) - 1}px)`

// Device is operated with mouse
media.pointer = `@media ${mediaConditions.pointer}`

// Device is operated with finger
media.touch = `@media ${mediaConditions.touch}`

// Browser is IE
media.ie = `@media ${mediaConditions.ie}`

// Generate custom media queries with the conditions in the mediaConditions object above
media.all = (...conditions) =>
  `@media ${conditions.reduce(
    (out, condition) => out + (out ? ' and ' : '') + mediaConditions[condition],
    ''
  )}`

export default media
