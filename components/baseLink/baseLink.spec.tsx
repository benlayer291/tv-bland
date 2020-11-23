import React from 'react'
import { render, screen } from '../../utils/test-utils'

import BaseLink from './baseLink'

const children = 'Children'
const propsDefault = {
  href: '/',
}

describe('<BaseButton />', () => {
  it('renders correctly', () => {
    render(<BaseLink {...propsDefault} />)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<BaseLink {...propsDefault}>{children}</BaseLink>)

    expect(screen.getByRole('link')).toContainHTML(children)
  })

  it('matches snapshot', () => {
    render(<BaseLink {...propsDefault} />)

    expect(screen.getByRole('link')).toMatchSnapshot()
  })
})
