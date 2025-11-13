export const onClickCross = {
  closed: {
    scale: 0.8,
    transition: { type: 'spring', bounce: 0.5 }
  },
  open: {
    scale: 1,
    transition: { type: 'spring', bounce: 0.5 }
  },
  rotation: { rotate: 180, transition: { type: 'spring', bounce: 0.1 } }
}

export const linkAnim = {
  notHovered: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', bounce: 0.1 }
  },
  hovered: {
    scale: 1.3,
    rotate: 5,
    transition: { type: 'spring', bounce: 0.1 }
  }
}
