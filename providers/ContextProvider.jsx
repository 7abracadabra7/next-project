/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalContext = createContext();
const ContextProvider = ({ children }) => {
  const [modalStates, setModalStates] = useState({
    addModal: false,
    editModal: false,
    deleteModal: false,
  });
  const toggleModal = (modal) => {
    setModalStates((prev) => ({ ...prev, [modal]: !prev[modal] }));
  };

  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <ModalContext.Provider
      value={{
        modalStates,
        setModalStates,
        toggleModal,
        setSelectedProduct,
        selectedProduct,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
