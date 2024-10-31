import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../../App.css";

export const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fbbf24" : "#d1d5db", // Active and inactive link colors
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <header className="section-navbar bg-gradient-to-r from-purple-800 via-black to-purple-800 bg-gray-800 py-8"> {/* Changed background color */}
      <div className="max-w-screen-xl px-6 mx-auto flex justify-between items-center">
        <div className="navbar-brand">
          <NavLink to="/" className="text-2xl font-semibold text-white">
            AqsFlicks
          </NavLink>
        </div>

        <nav className="flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `nav-link text-white hover:text-yellow-400 ${isActive ? "text-yellow-400" : "text-gray-300"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) => 
              `nav-link text-white hover:text-yellow-400 ${isActive ? "text-yellow-400" : "text-gray-300"}`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `nav-link text-white hover:text-yellow-400 ${isActive ? "text-yellow-400" : "text-gray-300"}`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="ml-">
          {isAuthenticated ? (
            <button
              className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-semibold py-6 px-8 rounded-full text-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" // Changed to yellow
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Log Out
            </button>
          ) : (
            <button
             className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-semibold py-6 px-8 rounded-full text-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg" // Changed to yellow
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
