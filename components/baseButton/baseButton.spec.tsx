import React from 'react'
import { render, RenderResult, screen } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'

import BaseButton from './baseButton'

const onClick = jest.fn()
const propsDefault = {
  text: 'Text',
  onClick,
}

const init = (props?: Record<string, unknown>): RenderResult => {
  const propsInit = { ...propsDefault, ...props }

  return render(<BaseButton {...propsInit} />)
}

describe('<BaseButton />', () => {
  beforeEach(() => init())

  it('renders correctly with button text', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(propsDefault.text)
  })

  it('calls the onClick callback handler', async () => {
    await userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('matches snapshot', () => {
    expect(screen.getByRole('button')).toMatchSnapshot()
  })
})
