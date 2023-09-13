import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EffectFade, Autoplay } from "swiper/modules";
import styles from "./page.module.css";
import Image from "next/image";
export default function Companies() {
  const companies = [
    [{ img: "/media/companies/1.svg" }, { img: "/media/companies/12.png" }],
    [{ img: "/media/companies/2.png" }, { img: "/media/companies/11.png" }],
    [{ img: "/media/companies/3.png" }, { img: "/media/companies/10.png" }],
    [{ img: "/media/companies/4.png" }, { img: "/media/companies/9.png" }],
    [{ img: "/media/companies/5.png" }, { img: "/media/companies/8.png" }],
    [{ img: "/media/companies/6.png" }, { img: "/media/companies/7.png" }],
    [{ img: "/media/companies/7.png" }, { img: "/media/companies/6.png" }],
    [{ img: "/media/companies/8.png" }, { img: "/media/companies/5.png" }],
    [{ img: "/media/companies/9.png" }, { img: "/media/companies/4.png" }],
    [{ img: "/media/companies/10.png" }, { img: "/media/companies/3.png" }],
    [{ img: "/media/companies/11.png" }, { img: "/media/companies/2.png" }],
    [{ img: "/media/companies/12.png" }, { img: "/media/companies/1.svg" }],
  ];
  return (
    <section className={`box section`}>
      <p className={`section_title ${styles.section_title}`}>
        Biz korporatsiyalar bilan
        <span>qanday ishlashni bilamiz</span>
      </p>
      <div className={styles.companies}>
        {companies.map((img, id) => {
          return (
            <div className={styles.company} key={id}>
              <Swiper
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                effect={"fade"}
                modules={[EffectFade, Autoplay]}
                className={styles.img_boxs}
                slidesPerView={1}
                spaceBetween={8}
              >
                {img.map((img, id) => {
                  return (
                    <SwiperSlide key={id} style={{ width: "100%" }}>
                      <div className={styles.img_box}>
                        <Image
                          src={img.img}
                          alt="company logo"
                          width={185}
                          height={52}
                          className={styles.img}
                        />
                        <p className={styles.id}>
                          {id < 9 ? `0${id + 1}` : id + 1}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          );
        })}
      </div>
    </section>
  );
}
