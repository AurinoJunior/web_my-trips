import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  test('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  test('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument()
  })
})
