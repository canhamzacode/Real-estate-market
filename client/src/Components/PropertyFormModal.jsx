import { useEffect, useState } from "react";
import GeneralInfo from "./GeneralInfo";
import MyMap from "./MyMap";

// eslint-disable-next-line react/prop-types
const PropertyFormModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: {
      long: "",
      lat: "",
    },
    type: "",
    price: "",
    size: "",
    bedrooms: "",
    amenities: "",
    description: "",
    email: "",
    recordings: [],
    pictures: [],
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="modal">
      {step === 1 && (
        <GeneralInfo
          formData={formData}
          onFormChange={handleFormChange}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <MyMap
          formData={formData}
          onFormChange={handleFormChange}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default PropertyFormModal;
