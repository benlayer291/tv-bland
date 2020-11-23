import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import ShowInfoRow from './showInfoRow'

const mockRow = {
  left: 'Left',
  right: 'Right',
}

describe('<ShowInfoRow />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<ShowInfoRow row={{ ...mockRow, image: 'imageSrc' }} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<ShowInfoRow row={{ ...mockRow, image: 'imageSrc' }} />)

    expect(el.container).toMatchSnapshot()
  })

  describe('given no image is passed', () => {
    it('should render', () => {
      el = render(<ShowInfoRow row={mockRow} />)

      expect(el.container).toBeInTheDocument()
    })

    it('should match snapshot', () => {
      el = render(<ShowInfoRow row={mockRow} />)

      expect(el.container).toMatchSnapshot()
    })

    it('it should not contain an image', () => {
      el = render(<ShowInfoRow row={mockRow} />)

      expect(el.queryByRole('image')).not.toBeInTheDocument()
    })
  })
})
