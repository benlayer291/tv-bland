import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import BaseSection from './baseSection'

const children = 'Children'

describe('<BaseSection />', () => {
  let el: RenderResult

  it('renders correctly', () => {
    el = render(<BaseSection />)

    expect(el.container).toBeInTheDocument()
  })

  it('renders children', () => {
    el = render(<BaseSection>{children}</BaseSection>)

    expect(el.container).toContainHTML(children)
  })

  it('matches snapshot', () => {
    el = render(<BaseSection />)

    expect(el.container).toMatchSnapshot()
  })
})
