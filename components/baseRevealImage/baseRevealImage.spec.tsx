import React from 'react'
import { act, render, RenderResult } from '../../utils/test-utils'

import { mockImage } from '../../__mocks__/mockImage'

import BaseRevealImage from './baseRevealImage'

const propsDefault = {
  src: mockImage.medium,
  alt: 'Alt text',
  height: 295,
  width: 210,
}

jest.useFakeTimers()

describe('<BaseRevealImage />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<BaseRevealImage {...propsDefault} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<BaseRevealImage {...propsDefault} />)

    expect(el.container).toMatchSnapshot()
  })

  it('should reveal image after time delay', () => {
    el = render(<BaseRevealImage {...propsDefault} />)

    act(() => jest.advanceTimersByTime(10000))

    expect(el.getByTestId('base-reveal-image')).toHaveClass(
      'BaseRevealImage--revealed'
    )
  })

  describe('given no image src is passed', () => {
    it('should render', () => {
      el = render(<BaseRevealImage {...propsDefault} src={undefined} />)

      expect(el.container).toBeInTheDocument()
    })

    it('it should not contain image', () => {
      el = render(<BaseRevealImage {...propsDefault} src={undefined} />)

      expect(el.queryByRole('image')).not.toBeInTheDocument()
    })

    it('it should display fallback', () => {
      el = render(<BaseRevealImage {...propsDefault} src={undefined} />)

      expect(el.getByTestId('base-reveal-image')).toHaveClass(
        'BaseRevealImage--no-image'
      )
    })
  })
})
