import styles from "./page.module.css";
import Image from "next/image";
export default function Wedo() {
  return (
    <section className={`box section ${styles.box}`}>
      <div className={styles.info}>
        <p className="section_title">
          Zamonaviy raqamli <span>yechimlarni yaratamiz</span>
        </p>
        <div className={styles.desc}>
          <p>
            Mazmoon был отмечен Akmal Abduyaminov за превосходную
            удовлетворенность клиентов в течение 4 лет. Мы также два раза подряд
            были удостоены награды «Агентство года».
          </p>
          <p>
            Мы также включены в список лучших агентств Clutch в области UX/UI и
            веб-дизайна. Наши клиенты говорят, что мы доставляем.
          </p>
        </div>
        <div className={styles.working_countries}>
          <div className={styles.working_country}>
            <p className={styles.number}>17+</p>
            <p className={styles.title}>
              Активно работаем в Центральной Азии и странах СНГ
            </p>
          </div>
          <div className={styles.working_country}>
            <p className={styles.number}>270+</p>
            <p className={styles.title}>
              Активно работаем в Центральной Азии и странах СНГ
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.images}>
          <Image
            src={"/media/wedo.png"}
            width={540}
            height={620}
            alt="wedo image"
            className={styles.image}
          />
        </div>
        <Image
          src="/media/mazmoon_white.svg"
          width={80}
          height={60}
          alt="logo company white"
          className={styles.logo}
        />
        <div className={styles.img_info}>
          <p className={styles.name}>Akmal</p>
          <p className={styles.position}>Art Director</p>
        </div>
      </div>
    </section>
  );
}
