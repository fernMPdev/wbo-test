function RenderContent({ content }) {
  if (!content || !Array.isArray(content)) return null

  return content.map((block, index) => {
    try {
      const Tag = block?.tag || 'div'
      const attributes =
        block?.attributes && typeof block.attributes === 'object' ? block.attributes : {}

      if (block?.children && Array.isArray(block.children)) {
        return (
          <Tag key={index} {...attributes}>
            {block.children.map((child, i) => (
              <RenderContent key={i} content={[child]} />
            ))}
          </Tag>
        )
      }

      const contentHTML = typeof block?.content === 'string' ? block.content : ''

      return <Tag key={index} {...attributes} dangerouslySetInnerHTML={{ __html: contentHTML }} />
    } catch (error) {
      console.error('Error al renderizar bloque', block, error)
      return <div key={index}></div>
    }
  })
}

export default RenderContent
