import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import ShowInfoText from './showInfoText'

const propsDefault = {
  left: 'Left',
  right: 'Right',
}

describe('<ShowInfoText />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<ShowInfoText {...propsDefault} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<ShowInfoText {...propsDefault} />)

    expect(el.container).toMatchSnapshot()
  })

  describe('given "reverse" is true', () => {
    it('should render in reverse', () => {
      el = render(<ShowInfoText {...propsDefault} reverse />)

      expect(el.container).toBeInTheDocument()
    })

    it('should match snapshot in reverse', () => {
      el = render(<ShowInfoText {...propsDefault} reverse />)

      expect(el.container).toMatchSnapshot()
    })
  })
})
