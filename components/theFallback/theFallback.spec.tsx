import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import TheFallback from './theFallback'

describe('<TheFallback />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<TheFallback />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<TheFallback />)

    expect(el.container).toMatchSnapshot()
  })
})
