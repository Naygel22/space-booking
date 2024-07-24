import { Route, Routes } from "react-router-dom"
import { useSessionContext } from "./SessionProvider"
import { lazy, Suspense } from "react"

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const BookingPage = lazy(() => import("../pages/BookingPage/BookingPage"));
const PricingPage = lazy(() => import("../pages/PricingPage/PricingPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const UserDashboard = lazy(() => import("./UserDashboard/UserDashboard"));
const Reservations = lazy(() => import("./Reservations/Reservations"));

export const Browse = () => {
  const { session } = useSessionContext()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {!session && (
          <>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
        {session && (
          <>
            <Route path="/profile" element={<UserDashboard />} />
            <Route path="/myreservations" element={<Reservations />} />
          </>
        )}
        <Route element={<div>404</div>} path="*" />
      </Routes>
    </Suspense>
  )
}
