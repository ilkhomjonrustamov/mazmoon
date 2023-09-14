import { Variants, motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
export default function Wedo() {
  const left: Variants = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  };
  const right: Variants = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.75,
      },
    },
  };
  return (
    <section className={`box section ${styles.box}`}>
      <motion.div
        initial="hide"
        whileInView="show"
        variants={left}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className={styles.info}>
          <p className="section_title">
            Zamonaviy raqamli <span> yechimlarni yaratamiz</span>
          </p>
          <div className={styles.desc}>
            <p>
              Bizning dizayn agentligimiz o&apos;zingizning proyektlaringizni
              o&apos;z ichiga olgan yaratuvchilar jamoasidir. Bizning vazifamiz
              - sizning fikrlaringizni, brandingingizni va innovatsiyalaringizni
              rivojlantirishda yordam beramiz.
            </p>
            <p>
              Bizning mijozlarimizga unikal, ko&apos;rib chiqaruvchi va turli
              sohalar uchun yaratilgan dizaynlarni taqdim qilish orqali ularning
              muvaffaqiyatini ta&apos;minlashdir.
            </p>
          </div>
          <div className={styles.working_countries}>
            <div className={styles.working_country}>
              <p className={styles.number}>2021 </p>
              <p className={styles.title}>
                yildan beri biz Markaziy Osiyo va MDH davlatlarida faol
                ishlaymiz
              </p>
            </div>
            <div className={styles.working_country}>
              <p className={styles.number}>270+</p>
              <p className={styles.title}>
                loyihalarni muvaffaqiyat orqali tugatkanmiz
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        variants={right}
        viewport={{ once: true, amount: 0.8 }}
      >
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
      </motion.div>
    </section>
  );
}
