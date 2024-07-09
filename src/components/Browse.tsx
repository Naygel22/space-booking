import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { useSessionContext } from "./SessionProvider"
import { BookingPage } from "../pages/BookingPage/BookingPage"
import { Reservations } from "./Reservations/Reservations"
import { UserDashboard } from "./UserDashboard/UserDashboard"

export const Browse = () => {
  const { session } = useSessionContext()

  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path='/pricing' element={<div>Pricing</div>} />
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
