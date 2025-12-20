import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import '@testing-library/jest-dom'

describe('Hero Component', () => {
  it('renders the hero section with title', () => {
    render(<Hero />)
    
    const heading = screen.getByText(/Welcome to/i)
    expect(heading).toBeInTheDocument()
    
    const techmarky = screen.getByText(/TechMarky/i)
    expect(techmarky).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)
    
    const getStartedButton = screen.getByRole('button', { name: /Get Started/i })
    const viewDemoButton = screen.getByRole('button', { name: /View Demo/i })
    
    expect(getStartedButton).toBeInTheDocument()
    expect(viewDemoButton).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    
    const description = screen.getByText(/Innovative solutions for modern businesses/i)
    expect(description).toBeInTheDocument()
  })
})
