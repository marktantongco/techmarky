import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'
import '@testing-library/jest-dom'

// Mock react-google-recaptcha
jest.mock('react-google-recaptcha', () => {
  return function MockReCAPTCHA() {
    return <div data-testid="recaptcha-mock">ReCAPTCHA Mock</div>
  }
})

describe('ContactForm Component', () => {
  it('renders the contact form', () => {
    render(<ContactForm />)
    
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument()
    })
  })

  it('accepts valid input', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/Name/i), 'John Doe')
    await user.type(screen.getByLabelText(/Email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/i), 'This is a test message')
    
    expect(screen.getByLabelText(/Name/i)).toHaveValue('John Doe')
    expect(screen.getByLabelText(/Email/i)).toHaveValue('john@example.com')
    expect(screen.getByLabelText(/Message/i)).toHaveValue('This is a test message')
  })
})
