import { useContext } from "react";
import PropertyCard from "../Components/PropertyCard";
import { FaPowerOff } from "react-icons/fa6";
import { AuthContext } from "../AuthProvider/AuthContext";
import { CgAdd } from "react-icons/cg";
import SplitMail from "../utils/SplitMail";

const Profile = () => {
  const { signUserOut, user } = useContext(AuthContext);
  return (
    <div className="px-5 py-4 w-full">
      <div className="max-w-[800px] mx-auto bg-slate-200 rounded-md">
        <div className=" mx-auto items-center p-4 w-full flex flex-wrap justify-center gap-[30px]  rounded-md">
          <div className="h-[200px] w-[200px] bg-slate-600 rounded-[50%]"></div>
          <div className="flex flex-col gap-3 items-center ">
            <div>
              <h3 className="text-xl font-bold capitalize">
                {user && user.email && SplitMail(user.email)}
              </h3>
            </div>
            <div className="flex gap-4 w-full">
              <button className="text-base font-bold bg-black rounded-lg text-white p-2">
                4 Properties
              </button>
              <button className="text-base font-bold bg-black rounded-lg text-white p-2">
                200 Likes
              </button>
            </div>
            <div className="flex gap-4 w-full items-center justify-center">
              <button
                onClick={signUserOut}
                className="font-bold text-base bg-black rounded-lg text-white p-2"
              >
                <FaPowerOff size={20} />
              </button>
              <button className="text-base font-bold bg-black rounded-lg text-white p-2 flex gap-2 items-center">
                <CgAdd size={20} /> Add Property
              </button>
            </div>
          </div>
        </div>
        <hr className="h-1 w-full bg-black" />
        <div className="max-w-[800px] mx-auto p-4 w-full  grid md:grid-cols-2 grid-cols-1 gap-4">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
