import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { IoAdd } from "react-icons/io5";
import { useState, useEffect } from "react";
import PropertyFormModal from "./PropertyFormModal";
import { CgClose } from "react-icons/cg";

const AppLayout = () => {
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
    <div className="w-full min-h-screen relative">
      {modal && (
        <div className="fixed top-0 left-0 h-full w-full bg-black/90 text-white overflow-y-auto z-10 items-center justify-center">
          <div className="p-4">
            <button
              className="absolute top-5 right-5 bg-[#33b37b] rounded-[50%] text-black p-2"
              onClick={toggleModal}
            >
              <CgClose size={25} />
            </button>
            <PropertyFormModal onClose={toggleModal} />
          </div>
        </div>
      )}
      <NavBar />
      <Outlet />
      <Footer />
      <button
        onClick={toggleModal}
        className="fixed bottom-4 right-4 bg-[#33b37b] p-2 rounded-[50%] shadow-xl"
      >
        <IoAdd size={30} />
      </button>
    </div>
  );
};

export default AppLayout;
