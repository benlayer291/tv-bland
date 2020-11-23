import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import { mockShow } from '../../__mocks__/mockShow'

import ShowCard from './showCard'

describe('<ShowCard />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<ShowCard show={mockShow} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<ShowCard show={mockShow} />)

    expect(el.container).toMatchSnapshot()
  })
})
