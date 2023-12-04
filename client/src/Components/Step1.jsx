import { CgMail, CgNametag, CgPlayList, CgSize } from "react-icons/cg";
import { FaAudioDescription, FaBed, FaLocationArrow } from "react-icons/fa6";
import Button from "./Button";
import { IoPricetag } from "react-icons/io5";

const Step1 = () => {
  return (
    <div className="w-full justify-center p-4 max-w-[700px] mx-auto gap-[30px] flex flex-col text-black">
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-white text-center">
          Step 1: General Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <FaLocationArrow size={25} />
            <input
              type="text"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Location..."
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgNametag size={25} />
            <input
              type="text"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Type e.g: Appratment, Commercial"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <IoPricetag size={25} />
            <input
              type="text"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Price"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgSize size={25} />
            <input
              type="text"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Size eg 5plot"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <FaBed size={25} />
            <input
              type="number"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Number of Bed"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgPlayList size={25} />
            <input
              type="text"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Ammenities e.g Play-ground"
            />
          </div>
          <div className="flex items-start gap-2 w-full bg-slate-50 p-2 rounded-md">
            <FaAudioDescription size={25} />
            <textarea
              type="text"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Description"
            />
          </div>
          <div className="flex items-start gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgMail size={25} />
            <input
              type="email"
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="email"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 items-center justify-center mt-6">
        <Button text="Next" />
        <Button text="Prev" />
      </div>
    </div>
  );
};

export default Step1;
