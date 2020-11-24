import { createContext, useState } from 'react'

type Props = {
  children?: React.ReactElement
}

export const CursorContext = createContext([])

const CursorContextProvider: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  const [cursorIsActive, setCursorIsActive] = useState(false)

  return (
    <CursorContext.Provider value={[cursorIsActive, setCursorIsActive]}>
      {children}
    </CursorContext.Provider>
  )
}

export default CursorContextProvider
