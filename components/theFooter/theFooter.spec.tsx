import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import TheFooter from './theFooter'

describe('<TheFooter />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<TheFooter />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<TheFooter />)

    expect(el.container).toMatchSnapshot()
  })
})
