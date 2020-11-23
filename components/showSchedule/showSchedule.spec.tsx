import React from 'react'
import { render, RenderResult } from '../../utils/test-utils'

import { mockShow } from '../../__mocks__/mockShow'

import ShowSchedule from './showSchedule'

const mockShows = Array(12).fill(mockShow)

describe('<ShowSchedule />', () => {
  let el: RenderResult

  it('should render', () => {
    el = render(<ShowSchedule shows={mockShows} />)

    expect(el.container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    el = render(<ShowSchedule shows={mockShows} />)

    expect(el.container).toMatchSnapshot()
  })

  it('should render h2 with text', () => {
    el = render(<ShowSchedule shows={mockShows} />)

    expect(el.queryByText(/Last Added Shows/)).toBeInTheDocument()
  })

  it('should render all shows', () => {
    el = render(<ShowSchedule shows={mockShows} />)

    expect(el.getAllByTestId('show-schedule-show')).toHaveLength(
      mockShows.length
    )
  })

  describe('given no shows are passed', () => {
    it('should render', () => {
      el = render(<ShowSchedule shows={[]} />)

      expect(el.container).toBeInTheDocument()
    })

    it('should match no shows snapshot', () => {
      el = render(<ShowSchedule shows={[]} />)

      expect(el.container).toMatchSnapshot()
    })

    it('should not render any shows', () => {
      el = render(<ShowSchedule shows={[]} />)

      expect(el.queryByTestId('show-schedule-show')).not.toBeInTheDocument()
    })
  })
})
