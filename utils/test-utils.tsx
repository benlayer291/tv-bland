import { render, RenderOptions } from '@testing-library/react'

type Props = {
  children: React.ReactElement
}

const Providers: React.FunctionComponent<Props> = ({ children }: Props) => {
  return <>{children}</>
}

const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {}
) => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
