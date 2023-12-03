import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [user, setUser] = useState(true);
  const [navState, setNavState] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  const toggle = () => {
    setNavState(!navState);
    setDisableScroll(!disableScroll);
  };

  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [disableScroll]);

  return (
    <div className="w-full px-5 py-3 flex items-center justify-between gap-2 bg-white text-black shadow-md">
      <Link to="/">
        <h3 className="text-2xl font-bold">
          <span className="text-[#33b37b]">Realm</span>State
        </h3>
      </Link>

      <div className="hidden md:flex items-center gap-4">
        <p className="text-sm font-bold">Explore</p>
        <p className="text-sm font-bold">Community</p>
        <p className="text-sm font-bold">Apartments</p>
        <p className="text-sm font-bold">FAQ</p>
        <p className="text-sm font-bold">About us</p>
      </div>

      <div className="flex items-center justify-center gap-6">
        <p className="text-sm font-bold hidden md:flex">Hamzat Abdul-muizz</p>

        <Link to={user ? "/profile" : "/login"}>
          <button
            className={`px-[8px] py-[12px] bg-[#33b37b] ${
              user ? "rounded-[50%] h-[40px] w-[40px]" : "rounded-sm"
            } flex items-center justify-center cursor-pointer`}
          >
            {user ? <CgProfile size={30} /> : <p className="font-bold">JOIN</p>}
          </button>
        </Link>

        <button onClick={toggle} className="md:hidden">
          {navState ? <IoClose size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {navState && (
        <div className="md:hidden absolute top-[8vh] left-0 w-full h-[92vh] bg-black/80 z-10">
          <div className="flex flex-col gap-4 p-4 h-full">
            {/* Navigation Items */}
            <Link to="/" className="text-sm font-bold text-white">
              Home
            </Link>
            <Link to="/explore" className="text-sm font-bold text-white">
              Explore
            </Link>
            <Link to="/community" className="text-sm font-bold text-white">
              Community
            </Link>
            <Link to="/apartments" className="text-sm font-bold text-white">
              Apartments
            </Link>
            <Link to="/faq" className="text-sm font-bold text-white">
              FAQ
            </Link>
            <Link to="/about" className="text-sm font-bold text-white">
              About us
            </Link>

            {/* Conditional Buttons */}
            {user ? (
              <Link to="/profile" className="text-sm font-bold text-white">
                Profile
              </Link>
            ) : (
              <Link to="/login" className="text-sm font-bold text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
