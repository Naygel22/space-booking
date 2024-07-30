import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from './Login'
import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from "../../context/NotificationContext";
import { SessionProvider } from "../../context/SessionProvider";


describe("Login", () => {
  test("should see error when email is not passed", async () => {
    render(<NotificationProvider><SessionProvider><BrowserRouter><Login /></BrowserRouter></SessionProvider ></NotificationProvider>)
    const loginBtn = screen.getByText("Log In")
    fireEvent.click(loginBtn)
    const emailrequiredText = await screen.findByText('Email is required')
    expect(emailrequiredText).toBeDefined()
  })

  test("should be able to log in", async () => {
    vi.mock("../../api/sendLoginValues", () => ({
      sendLoginValues: vi.fn(() => Promise.resolve({ user: "Piotr" }))
    }))
    render(<NotificationProvider><SessionProvider><BrowserRouter><Login /></BrowserRouter></SessionProvider ></NotificationProvider>)
    const emailInput = screen.getByLabelText("E-mail")
    const passwordInput = screen.getByLabelText("Password")
    const loginBtn = screen.getByText("Log In")

    fireEvent.change(emailInput, { target: { value: "test@test.pl" } })
    fireEvent.change(passwordInput, { target: { value: "password" } })

    fireEvent.click(loginBtn)


    const isText = await screen.findByText("You successfully logged in")
    expect(isText).toBeDefined()
    // expect(api.sendLoginValues).toHaveBeenCalled()

  })

  //   test("should see error when login failed", async () => {

  //     vi.mock("../../api/sendLoginValues", () => ({
  //       sendLoginValues: vi.fn(() => Promise.resolve())
  //     }))
  //     render(<NotificationProvider><SessionProvider><BrowserRouter><Login /></BrowserRouter></SessionProvider ></NotificationProvider>)
  //     const emailInput = screen.getByLabelText("E-mail")
  //     const passwordInput = screen.getByLabelText("Password")
  //     const loginBtn = screen.getByText("Log In")

  //     fireEvent.change(emailInput, { target: { value: "test@test.pl" } })
  //     fireEvent.change(passwordInput, { target: { value: "password" } })

  //     fireEvent.click(loginBtn)

  //     const isText = await screen.findByText("Invalid email or password. Please try again.")
  //     expect(isText).toBeDefined()

  //     // expect(api.sendLoginValues).toHaveBeenCalled()

  //   })
})