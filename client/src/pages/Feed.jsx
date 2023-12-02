import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import PropertyCard from "../Components/PropertyCard";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";

const Feed = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="flex items-center justify-center px-5 py-4 w-full flex-col">
        <div className="flex justify-between my-4 w-full items-center">
          <h2 className="text-2xl font-bold">Property Feeds</h2>
          <div>
            <select name="" id="" className="min-w-[150px] p-3 bg-[#33b37b]">
              <option value="Trending">Trending</option>
              <option value="Recent">Recent</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="grid mt-2 w-full gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
      <footer className="w-full p-5 grid gap-3  bg-black text-white">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div>
            <Link to="/">
              <h3 className="text-2xl font-bold ">
                <span className="text-[#33b37b]">Realm</span>State
              </h3>
            </Link>
            <h3>Discover Your New Home</h3>
            <p>Helping millions find their perfect fit</p>
          </div>
        </div>
        <hr />
        <div className="w-full flex items-center justify-center gap-4 my-4">
          <FaSquareXTwitter size={25} />
        </div>
      </footer>
    </div>
  );
};

export default Feed;
