import React from 'react'
import { render, RenderResult, screen } from '../../utils/test-utils'

import BaseLink from './baseLink'

const children = 'Children'
const propsDefault = {
  href: '/',
}

const init = (props?: Record<string, unknown>): RenderResult => {
  const propsInit = { ...propsDefault, ...props, children }

  return render(<BaseLink {...propsInit} />)
}

describe('<BaseButton />', () => {
  beforeEach(() => init())

  it('renders correctly', () => {
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('renders children', () => {
    expect(screen.getByRole('link')).toContainHTML(children)
  })

  it('matches snapshot', () => {
    expect(screen.getByRole('link')).toMatchSnapshot()
  })
})
