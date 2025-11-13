import _isString from 'lodash/isString'

const breakpoints = [
  {
    name: 'xs',
    width: 0
  },
  {
    name: 'sm',
    width: 480
  },
  {
    name: 'md',
    width: 600
  },
  {
    name: 'lg',
    width: 900
  },
  {
    name: 'xl',
    width: 1200
  },
  {
    name: 'xxl',
    width: 1400
  },
  {
    name: 'xl3',
    width: 2200
  },
  {
    name: 'xl4',
    width: 2540
  },
  {
    name: 'xl5',
    width: 3210
  }
]

export function getBreakpoint(nameOrIndex) {
  if (_isString(nameOrIndex)) {
    const name = nameOrIndex
    return breakpoints.find((breakpoint) => breakpoint.name === name)
  }
  const index = nameOrIndex
  return breakpoints[index]
}

export function getBreakpointIndex(name) {
  return breakpoints.findIndex((breakpoint) => breakpoint.name === name)
}

// Returns largest possible breakpoint for the passed width.
export function getBreakpointForWidth(width) {
  for (let i = breakpoints.length - 1; i >= 0; i--) {
    if (breakpoints[i].width <= width) {
      return breakpoints[i]
    }
  }
}

export default breakpoints
