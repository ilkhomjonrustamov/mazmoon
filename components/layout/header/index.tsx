import { feather } from "@/public/icons";
import styles from "./page.module.css";
import Image from "next/image";
import { ModalContext } from "@/store/modal";
import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
export default function Header() {
  const { setVariant, setIsModal, isModal } = useContext(ModalContext);

  const header = useRef<any>();
  let lastScrollTop = 0;
  const headerShowhide = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.current.style.top = "-124px";
    } else {
      header.current.style.top = "0";
    }
    lastScrollTop = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", headerShowhide);
    return () => {
      window.removeEventListener("scroll", headerShowhide);
    };
  }, []);

  return (
    <header ref={header} className={styles.header}>
      <div className={styles.container}>
        <div className={styles.image_div}>
          <Image
            src="/media/logo.svg"
            alt="Company Logo"
            width={80}
            height={60}
            className={styles.logo}
          />
        </div>
        <div className={styles.right}>
          <a
            href={`mailto: mazmoongr@gmail.com`}
            target={"_blank"}
            rel="noreferrer"
            className={styles.email}
          >
            mazmoongr@gmail.com
          </a>
          <Link href="/" className={styles.telegram}>
            Написать в телеграм
          </Link>

          <button className={styles.btn} onClick={() => setIsModal(true)}>
            <span>Заявка</span> {feather}
          </button>
        </div>
      </div>
    </header>
  );
}
