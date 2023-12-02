import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [user, setuser] = useState(true);

  useEffect(() => {
    setuser(true);
  }, []);

  return (
    <div className="w-full px-5 py-3 flex items-center justify-between gap-2 bg-white text-black shadow-md">
      <Link to="/">
        <h3 className="text-2xl font-bold">
          <span className="text-[#33b37b]">Realm</span>State
        </h3>
      </Link>

      <div className="flex items-center gap-4  cursor-pointer">
        <p className="text-sm font-bold">Explore</p>
        <p className="text-sm font-bold">Community</p>
        <p className="text-sm font-bold">Apartments</p>
        <p className="text-sm font-bold">FAQ</p>
        <p className="text-sm font-bold">About us</p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <p className="text-sm font-bold">Hamzat ABdul-muizz</p>
        <Link to={`${user ? "/profile" : "/login"}`}>
          <button
            className={`px-[8px] py-[12px] bg-[#33b37b] ${
              user ? "rounded-[50%] h-[40px] w-[40px]" : "rounded-sm"
            } flex items-center justify-center cursor-pointer`}
          >
            {user ? <CgProfile size={30} /> : <p className="font-bold">JOIN</p>}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
