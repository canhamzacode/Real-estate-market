import { CgMail, CgNametag, CgPlayList, CgSize } from "react-icons/cg";
import { FaAudioDescription, FaBed } from "react-icons/fa6";
import Button from "./Button";
import { IoPricetag } from "react-icons/io5";

const GeneralInfo = ({ formData, onFormChange, onNext }) => {
  const handleChange = (field, e) => {
    onFormChange(field, e.target.value);
  };

  const nextStep = () => {
    if (
      !formData.type ||
      !formData.price ||
      !formData.size ||
      !formData.bedrooms ||
      !formData.amenities ||
      !formData.email ||
      !formData.description
    ) {
      console.log("All fields are required");
      return;
    }
    onNext();
  };

  return (
    <div className="w-full justify-center p-4 max-w-[700px] mx-auto gap-[30px] flex flex-col text-black">
      <div className="w-full flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-white text-center">
          Step 1: General Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgNametag size={25} />
            <input
              type="text"
              value={formData.type}
              onChange={(e) => handleChange("type", e)}
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Type e.g: Apartment, Commercial"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <IoPricetag size={25} />
            <input
              type="text"
              value={formData.price}
              onChange={(e) => handleChange("price", e)}
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Price"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgSize size={25} />
            <input
              type="text"
              value={formData.size}
              onChange={(e) => handleChange("size", e)}
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Size e.g. 5 plots"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <FaBed size={25} />
            <input
              type="number"
              value={formData.bedrooms}
              onChange={(e) => handleChange("bedrooms", e)}
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Number of Bedrooms"
            />
          </div>
          <div className="flex items-center gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgPlayList size={25} />
            <input
              type="text"
              value={formData.amenities}
              onChange={(e) => handleChange("amenities", e)}
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Amenities e.g. Play-ground"
            />
          </div>
          <div className="flex items-start gap-2 w-full bg-slate-50 p-2 rounded-md">
            <CgMail size={25} />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e)}
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Email"
            />
          </div>
          <div className="flex items-start gap-2 w-full bg-slate-50 p-2 rounded-md">
            <FaAudioDescription size={25} />
            <textarea
              value={formData.description}
              onChange={(e) => handleChange("description", e)}
              className="w-full border-none outline-none placeholder:text-black"
              placeholder="Description"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 items-center justify-center mt-6">
        <Button text="Next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default GeneralInfo;
