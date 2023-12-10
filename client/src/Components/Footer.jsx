import { FaInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full p-5 grid gap-3  bg-black text-white">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center text-center md:text-left">
        <div>
          <Link to="/">
            <h3 className="text-2xl font-bold ">
              <span className="text-[#33b37b]">Realm</span>State
            </h3>
          </Link>
          <h3>© 2023 RealmState. All rights reserved.</h3>
        </div>
        <div className="w-full flex items-center justify-center gap-4 my-4">
          <Link to="">
            <FaSquareXTwitter size={25} />
          </Link>
          <Link to="">
            <FaYoutube size={25} />
          </Link>
          <Link to="">
            <FaInstagram size={25} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
