import { useEffect } from "react";
import { FaLessThan } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import PropertyCard from "../Components/PropertyCard";

const Search = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  });
  return (
    <div className="w-full grid">
      <div className="px-5 py-4 w-full">
        <h3 className="flex gap-2 items-center text-lg">
          <Link
            to="/feed"
            className="w-[40px] h-[40px] flex items-center justify-center bg-[#33b37b] rounded-[50%]"
          >
            <FaLessThan size={15} />
          </Link>
          <p>
            Search results for <b>“{id}”</b>
          </p>
        </h3>
      </div>
      <div className="grid my-2 w-full gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 px-5 py-4">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default Search;
