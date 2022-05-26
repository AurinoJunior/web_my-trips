import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  test('should render without any marker', () => {
    render(<Map />)

    screen.logTestingPlaygroundURL()
    // expect()
  })
})
