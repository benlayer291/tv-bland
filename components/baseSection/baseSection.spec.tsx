import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import BaseSection from './baseSection'

const children = 'Children'

const init = (props?: Record<string, unknown>): RenderResult => {
  const propsInit = { ...props, children }

  return render(<BaseSection {...propsInit} />)
}

describe('<BaseSection />', () => {
  let wrapper: RenderResult

  beforeEach(() => (wrapper = init()))

  it('renders correctly', () => {
    expect(wrapper.container).toBeInTheDocument()
  })

  it('renders children', () => {
    expect(wrapper.container).toContainHTML(children)
  })

  it('matches snapshot', () => {
    expect(wrapper.container).toMatchSnapshot()
  })
})
