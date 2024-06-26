import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>Logo</div>
      <div className="navbarButtons">
        <Link to='/'>Home</Link>
        <Link to='/booking'>Booking</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className="signButtons">
        <Link to='/login'>Sign in</Link>
        <Link to='/register'>Sign up</Link>
      </div>
    </nav>
  )
}
