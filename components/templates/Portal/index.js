import _isString from 'lodash/isString'
import { useMemo } from 'react'
import ReactDOM from 'react-dom'

/**
 * @param {{
 *   container: ("drawers-portal" | "modals-portal" | "low-portal" | "tooltips-portal" | "header-portal") & string,
 *   children: ReactNode
 * }} props
 */

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
)

function Portal(props) {
  const { container, children } = props

  const containerEl = useMemo(() => {
    if (canUseDOM) {
      if (!container) return document.body
      if (_isString(container)) return document.getElementById(container)
      else return container
    } else return undefined
  }, [container])

  return containerEl ? ReactDOM.createPortal(children, containerEl) : children
}

export default Portal
