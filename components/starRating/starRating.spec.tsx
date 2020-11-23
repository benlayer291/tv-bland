import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import StarRating from './starRating'

const propsDefault = {
  rating: 8,
}

describe('<StarRating />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<StarRating {...propsDefault} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<StarRating {...propsDefault} />)

    expect(el.container).toMatchSnapshot()
  })

  describe('given "withText" is true', () => {
    it('should render with text', () => {
      el = render(<StarRating {...propsDefault} withText={true} />)

      expect(el.queryByTestId('rating-text')).toBeInTheDocument()
    })
  })

  describe('given "islarge" is true', () => {
    it('should render with "large" styles', () => {
      el = render(<StarRating {...propsDefault} isLarge={true} />)

      expect(el.queryByTestId('rating')).toHaveClass('StarRating--is-large')
    })
  })
})
