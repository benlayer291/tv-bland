import React from 'react'
import { render, screen } from '../../utils/test-utils'

import Star from './star'

describe('<Star />', () => {
  it('renders correctly inactive', () => {
    render(<Star />)

    expect(screen.getByTestId('star')).toBeInTheDocument()
  })

  it('renders correctly active', () => {
    render(<Star isActive={true} />)

    expect(screen.getByTestId('star')).toBeInTheDocument()
    expect(screen.getByTestId('star')).toHaveClass('Star--is-active')
  })

  it('matches snapshot', () => {
    render(<Star />)

    expect(screen.getByTestId('star')).toMatchSnapshot()
  })
})
