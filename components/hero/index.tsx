import { dot } from "@/public/icons";
import styles from "./page.module.css";
export default function Hero() {
  const plusses = [
    {
      title: "UX/UI dizayni",
    },
    {
      title: "UX/UI dizayni",
    },
    {
      title: "UX/UI dizayni",
    },
    {
      title: "UX/UI dizayni",
    },
    {
      title: "UX/UI dizayni",
    },
  ];
  return (
    <section className={`box ${styles.hero} section`}>
      <div className={styles.left}>
        <p className={styles.hero_title}>
          Millionlab insonlar
          <span>uchun raqamli mahsulotlarni loyihalashtiramiz</span>
        </p>
        <div className={styles.plusses}>
          {plusses.map((plus, i) => {
            return (
              <div className={styles.plus} key={i}>
                {dot}
                <p>{plus.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.dids}>
          <p className={styles.dids_title}>400</p>
          <p className={styles.dids_desc}>Web sayt loyihalarimiz</p>
        </div>
        <div className={styles.dids}>
          <p className={styles.dids_title}>67</p>
          <p className={styles.dids_desc}>Mobile ilova loyihalarimiz</p>
        </div>
      </div>
    </section>
  );
}