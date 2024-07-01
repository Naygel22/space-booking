import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { SpaceViewer } from "./SpaceViewer"
import { LoginPage } from "../pages/LoginPage"
import { useSessionContext } from "./SessionProvider"
import { UserProfile } from "./UserProfile"

export const Browse = () => {
  const { session } = useSessionContext()

  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/booking" element={<SpaceViewer />} />
      <Route path='/pricing' element={<div>Pricing</div>} />
      <Route path='/contact' element={<div>Contact</div>} />
      {!session &&
        <>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </>
      }
      {session &&
        <Route path='/profile' element={<UserProfile />} />
      }

    </Routes>
  )
}
