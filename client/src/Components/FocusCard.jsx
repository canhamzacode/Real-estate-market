import { FaHouse } from "react-icons/fa6";

const FocusCard = () => {
  return (
    <div className="w-full shadow-md p-6 rounded-lg bg-white flex gap-6 text-center flex-col items-center justify-center mb-4">
      <div className="w-full flex items-center flex-col justify-center">
        <FaHouse size={30} />
        <h3 className="text-2xl font-bold capitalize">Buy a home</h3>
      </div>
      <div>
        <p className="capitalize">
          over 1 million+ homes for sale available on the website, we can match
          you with a house you will want to call home.
        </p>
      </div>
    </div>
  );
};

export default FocusCard;
