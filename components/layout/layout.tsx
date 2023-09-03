import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ModalContext } from "../../store/modal";
import Modal from "../modal/Modal";
// import Modal from "../utils/modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const { isModal } = useContext(ModalContext);

  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
      {isModal ? <Modal /> : null}
    </div>
  );
}
