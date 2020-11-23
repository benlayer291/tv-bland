import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import TheHeader from './theHeader'

describe('<TheHeader />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<TheHeader />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<TheHeader />)

    expect(el.container).toMatchSnapshot()
  })
})
