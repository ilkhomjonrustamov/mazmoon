import { feather, instagram, linkedin, twitter, youtube } from "@/public/icons";
import styles from "./page.module.css";
import { ModalContext } from "@/store/modal";
import { useContext } from "react";
export default function Footer() {
  const { setVariant, setIsModal, isModal } = useContext(ModalContext);
  return (
    <section className={`box section ${styles.section}`}>
      <div className={styles.contact}>
        <div className={styles.contact_title}>
          <p> Keling, sizga qanday yordam berishimizni ko&apos;rib chiqamiz!</p>
          <span>
            va shu bo&apos;yicha suhbatlashib narximizni va shartlarimizni
            tushuntirib beramiz
          </span>
        </div>
        <div className={styles.btn_box}>
          <button
            className={styles.contact_btn}
            onClick={() => setIsModal(true)}
          >
            {feather}Arizangizni yuboring
          </button>
          <p className={styles.without_payment}>
            Biz oldindan to&apos;lovsiz ishlaymiz
          </p>
        </div>
      </div>
      <div className={styles.btm_contacts}>
        <div className={styles.left}>
          <div className={styles.info}>
            <p className={styles.info_title}>Manzilimiz</p>
            <p className={styles.info_desc}>Ziyolilar 4G, Tashkent 100170</p>
          </div>
          <div className={styles.info}>
            <p className={styles.info_title}>Elektron pochtamiz</p>
            <a
              href={`mailto: mazmoongr@gmail.com`}
              target={"_blank"}
              rel="noreferrer"
              className={styles.info_desc}
            >
              mazmoongr@gmail.com
            </a>
          </div>
          <div className={styles.info}>
            <p className={styles.info_title}>Telefon raqamimiz</p>

            <a
              href={`tel: +998335714656`}
              target={"_blank"}
              rel="noreferrer"
              className={styles.info_desc}
            >
              +998 33 571 46 56
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <a
            className={styles.social}
            href="https://instagram.com/mazmoon_group?igshid=NjIwNzIyMDk2Mg=="
            target={"_blank"}
            rel="noreferrer"
          >
            {instagram}
          </a>
          <a
            className={styles.social}
            href="https://www.youtube.com"
            target={"_blank"}
            rel="noreferrer"
          >
            {youtube}
          </a>
          <a
            className={styles.social}
            href="https://www.youtube.com"
            target={"_blank"}
            rel="noreferrer"
          >
            {linkedin}
          </a>
          <a
            className={styles.social}
            href="https://www.youtube.com"
            target={"_blank"}
            rel="noreferrer"
          >
            {twitter}
          </a>
        </div>
      </div>
    </section>
  );
}
