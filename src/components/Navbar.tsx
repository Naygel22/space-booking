import { Link, useNavigate } from "react-router-dom";
import { useSessionContext } from "./SessionProvider";
import { supabaseClient } from "../supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { getUserDataById } from "../api/getUserDataById";
import { UserOnNavbar } from "./UserOnNavbar";

export const Navbar = () => {
  const { session } = useSessionContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    }
    navigate('/');
  };

  const { data } = useQuery({
    queryKey: ['userName'],
    queryFn: () => getUserDataById(session),
    enabled: !!session, // Only run the query if session is available
  });

  console.log(data);

  return (
    <nav className="navbar">
      <Link to='/'>
        <div className="logoBar">
          <img className="flexDeskLogoNavbar" src="/assets/images/navbarLogo.jpeg" />
        </div>
      </Link>

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
        <>
          <UserOnNavbar
            userData={data}
            handleLogout={handleLogout}
          />
        </>
      }
    </nav>
  );
};
