import React from 'react'
import { render, screen } from '../../utils/test-utils'

import Star from './star'

describe('<Star />', () => {
  it('should render inactive', () => {
    render(<Star />)

    expect(screen.getByTestId('star')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    render(<Star />)

    expect(screen.getByTestId('star')).toMatchSnapshot()
  })

  describe('given "isActive" is true', () => {
    it('should render active', () => {
      render(<Star isActive={true} />)

      expect(screen.getByTestId('star')).toBeInTheDocument()
      expect(screen.getByTestId('star')).toHaveClass('Star--is-active')
    })

    it('matches snapshot', () => {
      render(<Star isActive={true} />)

      expect(screen.getByTestId('star')).toMatchSnapshot()
    })
  })
})
