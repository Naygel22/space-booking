import { Route, Routes } from "react-router-dom"
import { useSessionContext } from "../context/SessionProvider"
import { lazy, Suspense } from "react"
import { ROUTES } from "../routes";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const BookingPage = lazy(() => import("../pages/BookingPage/BookingPage"));
const PricingPage = lazy(() => import("../pages/PricingPage/PricingPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const UserDashboard = lazy(() => import("./UserDashboard/UserDashboard"));

export const Browse = () => {
  const { session } = useSessionContext()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.booking} element={<BookingPage />} />
        <Route path={ROUTES.pricing} element={<PricingPage />} />
        <Route path={ROUTES.contact} element={<ContactPage />} />
        {!session && (
          <>
            <Route path={ROUTES.register} element={<RegisterPage />} />
            <Route path={ROUTES.login} element={<LoginPage />} />
          </>
        )}
        {session && (
          <>
            <Route path={ROUTES.profile} element={<UserDashboard />} />
          </>
        )}
        <Route element={<div>404</div>} path="*" />
      </Routes>
    </Suspense>
  )
}
