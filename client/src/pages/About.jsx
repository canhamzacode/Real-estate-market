import { FaHouse } from "react-icons/fa6";
import Button from "../Components/Button";
import aboutImg from "../assets/about.png";
import FocusCard from "../Components/FocusCard";

const About = () => {
  const naviate = () => {
    console.log("Navigate");
  };
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-5 py-3">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Find Your Dream House</h1>
          <div className="p-4 border-l-2 border-l-black">
            <p className="text-xl ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <Button text={"Get Started"} onClick={naviate} />
        </div>
        <div className="w-full flex items-center">
          <img src={aboutImg} alt="" className="w-[80%]" />
        </div>
      </div>
      <div className="px-5 py-3 bg-slate-200 w-full flex flex-col gap-6">
        <h3 className="text-3xl font-bold text-center">Our Main Focus</h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FocusCard />
          <FocusCard />
          <FocusCard />
        </div>
      </div>
    </div>
  );
};

export default About;
