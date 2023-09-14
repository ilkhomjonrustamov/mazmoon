import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

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
            <div className={styles.company_inner} key={id}>
              <Swiper
                loop
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                effect={"fade"}
                modules={[EffectFade, Autoplay]}
                slidesPerView={1}
                spaceBetween={8}
                className={styles.company_inner_swiper}
              >
                {img.map((img, idx) => {
                  return (
                    <SwiperSlide
                      key={idx}
                      className={styles.company_inner_swiper_slide}
                    >
                      <div className={styles.company_img_box}>
                        <Image
                          src={img.img}
                          alt="company logo"
                          width={185}
                          height={52}
                          className={styles.img}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <p className={styles.id}>{id < 9 ? `0${id + 1}` : id + 1}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
