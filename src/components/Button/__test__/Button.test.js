import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'

describe('modal buttons test', () => {
  test('onClick open login modal', () => {
    const handleOpenLogin = jest.fn()
    fireEvent.click(loginButton)
    expect(handleOpenLogin).toHaveBeenCalledTimes(1)
  })

  test('onClick open signup modal', () => {
    const handleOpenSignup = jest.fn()
    fireEvent.click(signupButton)
    expect(handleOpenSignup).toHaveBeenCalledTimes(1)
  })
})