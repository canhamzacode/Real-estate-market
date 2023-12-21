import { createContext, useEffect, useState } from "react";

const ToggleContext = createContext();
const ToggleProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((prevModal) => !prevModal);

    if (!modal) {
      document.body.style.overflow = "hidden";
      document.body.scrollTo({ top: 0, behavior: "auto" });
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <ToggleContext.Provider value={{ modal, toggleModal }}>
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleContext, ToggleProvider };
