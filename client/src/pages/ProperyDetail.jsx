import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProperyDetail = () => {
  const images = [
    "https://images.pexels.com/photos/19154096/pexels-photo-19154096/free-photo-of-people-riding-on-quad-bikes-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/396303/pexels-photo-396303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div>
      <div className="w-full h-[400px] relative">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="w-full h-full"
        />
        <div className="absolute h-full w-full top-0 flex items-center justify-center"></div>
      </div>
      <div className="px-5 py-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Title</h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            repellendus accusamus! In eos ex vitae cupiditate doloribus, quod
            harum quaerat eveniet sequi dicta, autem optio vero provident?
            Tempore, vero libero.
          </p>
          <p className="text-base">
            Location: <b>Ilorin Kwara</b>
          </p>
          <p className="text-base">
            Conatact:{" "}
            <Link to="mailto:user@mail.com">
              <b>user@mail.com</b>
            </Link>{" "}
          </p>
          <div>
            <button className="bg-[#33b37b] p-3 rounded-lg">Preview</button>
          </div>
        </div>
        <div className="w-full h-[300px] bg-red-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProperyDetail;
