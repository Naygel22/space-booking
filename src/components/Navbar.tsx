import { Link, useNavigate } from "react-router-dom"
import { useSessionContext } from "./SessionProvider";
import { supabaseClient } from "../supabaseClient";

export const Navbar = () => {
  const { session } = useSessionContext();
  const navigate = useNavigate()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    }
    navigate('/')
  };

  return (
    <nav className="navbar">
      <div>Logo</div>
      <div className="navbarButtons">
        <Link to='/'>Home</Link>
        <Link to='/booking'>Booking</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      {!session &&
        <div className="signButtons">
          <Link to='/login'>Sign in</Link>
          <Link to='/register'>Sign up</Link>
        </div>
      }
      {session &&
        <button onClick={handleLogout}>Log out</button>
      }
    </nav>
  );
};

