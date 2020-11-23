import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'

import { mockShow } from '../../__mocks__/mockShow'

import ShowHero from './showHero'

describe('<ShowHero />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<ShowHero show={mockShow} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<ShowHero show={mockShow} />)

    expect(el.container).toMatchSnapshot()
  })

  describe('given show has long decription', () => {
    it('should render with "Read More" button', () => {
      el = render(<ShowHero show={mockShow} />)

      expect(el.queryByText(/Read More/)).toBeInTheDocument()
    })
  })

  describe('given show has "Read More" button', () => {
    it('should toggle "Read More" to "Read Less" ', async () => {
      el = render(<ShowHero show={mockShow} />)

      await userEvent.click(el.getByRole('button'))

      expect(el.queryByText(/Read Less/)).toBeInTheDocument()
    })
  })
})
