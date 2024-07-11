import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { useSessionContext } from "./SessionProvider"
import { BookingPage } from "../pages/BookingPage/BookingPage"
import { Reservations } from "./Reservations/Reservations"
import { UserDashboard } from "./UserDashboard/UserDashboard"
import { HomePage } from "../pages/HomePage/HomePage"
import { PricingPage } from "../pages/PricingPage/PricingPage"

export const Browse = () => {
  const { session } = useSessionContext()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/contact' element={<div>Contact</div>} />
      {!session &&
        <>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </>
      }
      {session &&
        <>
          <Route path='/profile' element={<UserDashboard />} />
          <Route path='/myreservations' element={<Reservations />} />
        </>
      }

    </Routes>
  )
}
