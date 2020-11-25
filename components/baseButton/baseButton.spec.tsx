import React from 'react'
import { render, screen, fireEvent } from '../../utils/test-utils'

import BaseButton from './baseButton'

const mockOnClick = jest.fn()

const propsDefault = {
  text: 'Text',
  onClick: mockOnClick,
}

describe('<BaseButton />', () => {
  it('renders correctly with button text', () => {
    render(<BaseButton {...propsDefault} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(propsDefault.text)
  })

  it('calls the onClick callback handler', async () => {
    render(<BaseButton {...propsDefault} />)

    await fireEvent.click(screen.getByRole('button'))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('matches snapshot', () => {
    render(<BaseButton {...propsDefault} />)

    expect(screen.getByRole('button')).toMatchSnapshot()
  })
})
