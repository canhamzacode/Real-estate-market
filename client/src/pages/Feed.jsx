import Header from "../Components/Header";
import PropertyCard from "../Components/PropertyCard";
import Faq from "../Components/Faq";

const Feed = () => {
  return (
    <div>
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
      <Faq />
    </div>
  );
};

export default Feed;
