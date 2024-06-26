import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { SpaceViewer } from "./SpaceViewer"
import { LoginPage } from "../pages/LoginPage"

export const Browse = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/booking" element={<SpaceViewer />} />
      <Route path='/pricing' element={<div>Pricing</div>} />
      <Route path='/contact' element={<div>Contact</div>} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}
