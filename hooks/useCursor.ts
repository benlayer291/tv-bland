import { useContext, useCallback } from 'react'
import { CursorContext } from '../context/cursorContext'

type UseCursor = {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const useCursor = (): UseCursor => {
  const [cursorIsActive, setCursorIsActive] = useContext(CursorContext)

  const onMouseEnter = useCallback(() => {
    setCursorIsActive(true)
  }, [cursorIsActive])

  const onMouseLeave = useCallback(() => {
    setCursorIsActive(false)
  }, [cursorIsActive])

  return { onMouseEnter, onMouseLeave }
}
