import React from 'react'
import { render, screen } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'

import BaseButton from './baseButton'

const onClick = jest.fn()
const propsDefault = {
  text: 'Text',
  onClick,
}

describe('<BaseButton />', () => {
  it('renders correctly with button text', () => {
    render(<BaseButton {...propsDefault} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(propsDefault.text)
  })

  it('calls the onClick callback handler', async () => {
    render(<BaseButton {...propsDefault} />)

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('matches snapshot', () => {
    render(<BaseButton {...propsDefault} />)

    expect(screen.getByRole('button')).toMatchSnapshot()
  })
})
