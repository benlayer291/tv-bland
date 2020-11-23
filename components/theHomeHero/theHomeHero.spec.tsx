import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import TheHomeHero from './theHomeHero'

describe('<TheHomeHero />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<TheHomeHero />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<TheHomeHero />)

    expect(el.container).toMatchSnapshot()
  })
})
