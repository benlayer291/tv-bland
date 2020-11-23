import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import { mockShow } from '../../__mocks__/mockShow'

import ShowInfo from './showInfo'

describe('<ShowInfo />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<ShowInfo show={mockShow} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<ShowInfo show={mockShow} />)

    expect(el.container).toMatchSnapshot()
  })

  it('should render two h2 with text', () => {
    el = render(<ShowInfo show={mockShow} />)

    expect(el.queryByText(/Show info/)).toBeInTheDocument()
    expect(el.queryByText(/Starring/)).toBeInTheDocument()
  })
})
