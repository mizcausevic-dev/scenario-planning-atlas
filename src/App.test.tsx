import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the strategy surface headline', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /three possible futures\. one cleaner way to decide which moves deserve commitment\./i,
      }),
    ).toBeInTheDocument()
  })

  it('renders all three scenario columns', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { name: 'Downside' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Base case' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('heading', { name: 'Upside' }).length).toBeGreaterThan(0)
  })
})
