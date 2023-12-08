import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductMap from "../Components/ProductMap";

const propertyData = {
  address: {
    street: "123 Main Street",
    city: "Cityville",
    state: "Stateville",
    postalCode: "12345",
  },
  type: "Apartment",
  price: "$500,000",
  size: "1200 sqft",
  bedrooms: "2",
  bathrooms: "2",
  amenities: ["Swimming Pool", "Gym", "Parking"],
  description:
    "Beautiful apartment with a stunning view, located in a prime area. Spacious living room, modern kitchen, and comfortable bedrooms.",
  contactEmail: "contact@example.com",
  pictures: [
    "https://images.pexels.com/photos/19154096/pexels-photo-19154096/free-photo-of-people-riding-on-quad-bikes-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/396303/pexels-photo-396303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
};

const PropertyDetail = () => {
  const images = propertyData.pictures;

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
      <div className="px-5 py-4 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{propertyData.type}</h2>
          <p className="text-base">{propertyData.description}</p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <p className="text-base">
              <b>Price:</b> {propertyData.price}
            </p>
            <p className="text-base">
              <b>Size:</b> {propertyData.size}
            </p>
            <p className="text-base">
              <b>Bedrooms:</b> {propertyData.bedrooms}
            </p>
            <p className="text-base">
              <b>Bathrooms</b> : {propertyData.bathrooms}
            </p>
            <p className="text-base">
              <b>Amenities:</b> {propertyData.amenities.join(", ")}
            </p>
            <p className="text-base">
              <b>Contact:</b>
              <Link to={`mailto:${propertyData.contactEmail}`}>
                {propertyData.contactEmail}
              </Link>
            </p>
          </div>
          <div>
            <button className="bg-[#33b37b] p-3 rounded-lg">Preview</button>
          </div>
        </div>
        <ProductMap />
      </div>
    </div>
  );
};

export default PropertyDetail;
