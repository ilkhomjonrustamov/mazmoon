import { createContext, useState } from "react";
export const ModalContext = createContext();
export default function ModalContextProvider({ children }) {
  const [isModal, setIsModal] = useState(false);
  const [variant, setVariant] = useState(""); // store | view
  const [comment, setComment] = useState("");
  const [form, setForm] = useState("");

  const value = {
    isModal,
    setIsModal,
    variant,
    setVariant,
    comment,
    setComment,
    form,
    setForm,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
