import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import The404 from './the404'

describe('<The404 />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<The404 />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<The404 />)

    expect(el.container).toMatchSnapshot()
  })
})
