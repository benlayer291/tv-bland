import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import { mockImage } from '../../__mocks__/mockImage'

import ShowInfoImage from './showInfoImage'

const propsDefault = {
  src: mockImage.medium,
  alt: 'Alt text',
  height: 295,
  width: 210,
}

describe('<ShowInfoImage />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<ShowInfoImage {...propsDefault} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<ShowInfoImage {...propsDefault} />)

    expect(el.container).toMatchSnapshot()
  })
})
