import { useState } from "react";
import Step1 from "./Step1";

// eslint-disable-next-line react/prop-types
const PropertyFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    address: "",
    type: "",
    price: "",
    size: "",
    bedrooms: "",
    amenities: "",
    description: "",
    contact: "",
    location: "",
    recordings: "",
    pictures: "",
  });

  return (
    <div className="modal">
      <div className="modal-content">
        <Step1 />
      </div>
    </div>
  );
};

export default PropertyFormModal;
