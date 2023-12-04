import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchQuery}`);
    }
  };
  return (
    <div className="w-full h-[600px] bg-red-600 relative">
      <img
        src="https://images.pexels.com/photos/19154096/pexels-photo-19154096/free-photo-of-people-riding-on-quad-bikes-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-full h-full"
      />
      <div className="absolute bg-radial h-full w-full top-0 flex items-center justify-center">
        <div className="w-full max-w-[700px] p-[20px] flex items-center flex-col gap-5">
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold">Discover Your New Home</h1>
            <p className="text-xl">Helping millions find their perfect fit</p>
          </div>
          <div className="w-full">
            <div className=" h-[44px] w-full flex items-center gap-2 border-black border bg-slate-50 p-3 rounded">
              <IoSearchSharp size={20} color="black" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-none outline-none bg-transparent text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="w-full flex items-center justify-center gap-4  mt-2">
              <h3>Trending:</h3>
              <div className="flex gap-2">
                <Link to="/search/avatar">
                  <button className="bg-black text-white font-bold p-2 rounded-sm">
                    Avatar
                  </button>
                </Link>
                <Link to="/search/avatar">
                  <button className="bg-black text-white font-bold p-2 rounded-sm">
                    Avatar
                  </button>
                </Link>
                <Link to="/search/avatar">
                  <button className="bg-black text-white font-bold p-2 rounded-sm">
                    Avatar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
