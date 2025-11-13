function Anchor({ id, offset, children }) {
  return (
    <div id={id} data-anchor-offset={offset || 0}>
      {children}
    </div>
  )
}

export default Anchor
