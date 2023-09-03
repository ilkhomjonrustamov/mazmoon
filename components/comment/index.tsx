import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { arrow_right, close2 } from "@/public/icons";
import styles from "./page.module.css";
import Image from "next/image";
export default function Comments() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [openComment, setOpenComment] = useState(false);
  const comments = [
    {
      video: "/media/brain.mp4",
      name: "Maftunaxon Xabibullayeva",
      position: "CEO-Safar-park",
      img: "/media/worker1.png",
      desc: "Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие",
    },
    {
      video: "/media/brain.mp4",
      name: "Maftunaxon Xabibullayeva",
      position: "CEO-Safar-park",
      img: "/media/worker1.png",
      desc: "Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие",
    },
    {
      video: "/media/brain.mp4",
      name: "Maftunaxon Xabibullayeva",
      position: "CEO-Safar-park",
      img: "/media/worker1.png",
      desc: "Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие",
    },
  ];
  return (
    <section className="section box">
      <div className={styles.navigation}>
        <p className={`section_title ${styles.section_title}`}>
          Biz eng zo’rimiz <span>faqat mijozlarimiz uchun</span>
        </p>
        <div className={styles.btns}>
          <button
            className={styles.prev_btn}
            ref={(node: any) => setPrevEl(node)}
          >
            {arrow_right}
          </button>
          <button
            className={styles.next_btn}
            ref={(node: any) => setNextEl(node)}
          >
            {arrow_right}
          </button>
        </div>
      </div>
      <div className={styles.feedbacks}>
        <Swiper
          navigation={{ prevEl, nextEl }}
          modules={[Navigation]}
          className="mySwiper"
          loop
        >
          {comments.map((data, key) => {
            return (
              <SwiperSlide className={styles.feedback} key={key}>
                <div className={styles.video}>
                  <video src={data.video} controls autoPlay muted></video>
                  <div className={styles.video_info}>
                    <p className={styles.video_info_name}>{data.name}</p>
                    <p className={styles.video_info_position}>
                      {data.position}
                    </p>
                  </div>
                </div>
                <div className={styles.comment}>
                  <div className={styles.top_info}>
                    <div className={styles.img}>
                      <Image
                        src="/media/worker1.png"
                        width={56}
                        height={56}
                        alt="pic of feedback giver"
                      />
                    </div>
                    <div className={styles.top_info_names}>
                      <p className={styles.video_info_name}>{data.name}</p>
                      <p className={styles.video_info_position}>
                        {data.position}
                      </p>
                    </div>
                  </div>
                  <div className={styles.feedback_desc}>
                    <p className={styles.desc}>{data.desc}</p>
                    <button
                      className={styles.read_more}
                      onClick={() => setOpenComment(!openComment)}
                    >
                      Читать Полный отзыв
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <SwiperSlide className={styles.feedback}>
            <div className={styles.video}>
              <video src="/media/brain.mp4" controls autoPlay muted></video>
              <div className={styles.video_info}>
                <p className={styles.video_info_name}>
                  Maftunaxon Xabibullayeva
                </p>
                <p className={styles.video_info_position}>CEO-Safar-park</p>
              </div>
            </div>
            <div className={styles.comment}>
              <div className={styles.top_info}>
                <div className={styles.img}>
                  <Image
                    src="/media/worker1.png"
                    width={56}
                    height={56}
                    alt="pic of feedback giver"
                  />
                </div>
                <div className={styles.top_info_names}>
                  <p className={styles.video_info_name}>
                    Maftunaxon Xabibullayeva
                  </p>
                  <p className={styles.video_info_position}>CEO-Safar-park</p>
                </div>
              </div>
              <div className={styles.feedback_desc}>
                <p className={styles.desc}>
                  Работаем с ребятами уже 2 года с момента старта нашего
                  маркетпелейса. У ребят из Crauch помимо хорошего дизайна,
                  развит продуктовый подход и исследование. Что нам сильно
                  помогло на этапе MVP и тестировния UX-гипотез. Более того, это
                  позволило частично зааутсорсить эту функцию и высвободило у
                  нас время на другие...
                </p>
                <button
                  className={styles.read_more}
                  onClick={() => setOpenComment(!openComment)}
                >
                  Читать Полный отзыв
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {openComment ? (
        <CommentOpen
          setOpenComment={setOpenComment}
          openComment={openComment}
        />
      ) : null}
    </section>
  );
}
const CommentOpen = ({
  setOpenComment,
  openComment,
}: {
  setOpenComment: any;
  openComment: any;
}) => {
  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     const target = e.target as Element;
  //     if (target?.className === styles.modal) {
  //       setOpenComment(false);
  //     } else if (target?.className === styles.modal_inner) {
  //       setOpenComment(true);
  //     }
  //   });
  // }, []);
  return (
    <section className={styles.modal}>
      <div className={styles.modal_inner}>
        <div className={styles.top_info}>
          <div className={styles.img}>
            <Image
              src="/media/worker1.png"
              width={56}
              height={56}
              alt="pic of feedback giver"
            />
          </div>
          <div className={styles.top_info_names}>
            <p className={styles.video_info_name}>Maftunaxon Xabibullayeva</p>
            <p className={styles.video_info_position}>CEO-Safar-park</p>
          </div>
        </div>

        <p className={styles.open_desc}>
          Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса.
          У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и
          исследование. Что нам сильно помогло на этапе MVP и тестировния
          UX-гипотез. Более того, это позволило частично зааутсорсить эту
          функцию и высвободило у нас время на другие задачи. Работаем с
          ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из
          Crauch помимо хорошего дизайна, развит продуктовый подход и
          исследование. Что нам сильно помогло на этапе MVP и тестировния
          UX-гипотез. Более того, это позволило частично зааутсорсить эту
          функцию и высвободило у нас время на другие задачи.Работаем с ребятами
          уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch
          помимо хорошего дизайна, развит продуктовый подход и исследование. Что
          нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того,
          это позволило частично зааутсорсить эту функцию и высвободило у нас
          время на другие задачи.
        </p>

        <button
          className={styles.close_btn}
          onClick={() => setOpenComment(!openComment)}
        >
          {close2}
        </button>
      </div>
    </section>
  );
};
