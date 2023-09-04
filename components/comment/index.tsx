import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { arrow_right, close2 } from "@/public/icons";
import styles from "./page.module.css";
import Image from "next/image";
interface Comment {
  video: string;
  name: string;
  img: string;
  desc: string;
}
export default function Comments() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [openComment, setOpenComment] = useState(false);
  const [video, setVideo] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [position, setPosition] = useState("");
  const comments = [
    {
      video: "/media/brain.mp4",
      name: "Maftunaxon Xabibullayeva",
      position: "CEO-Safar-park",
      img: "/media/comment1.png",
      desc: "Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи. Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи.Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи.",
    },
    {
      video: "/media/commentvideo.mp4",
      name: "Maftunaxon ",
      position: "CEO-Safar-park",
      img: "/media/worker1.png",
      desc: "Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи. Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи.Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи.",
    },
    {
      video: "/media/brain.mp4",
      name: "Maftunaxon Xabibullayeva",
      position: "CEO-Safar-park",
      img: "/media/comment1.png",
      desc: "Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи. Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи.Работаем с ребятами уже 2 года с момента старта нашего маркетпелейса. У ребят из Crauch помимо хорошего дизайна, развит продуктовый подход и исследование. Что нам сильно помогло на этапе MVP и тестировния UX-гипотез. Более того, это позволило частично зааутсорсить эту функцию и высвободило у нас время на другие задачи.",
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
                        src={data.img}
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
                      onClick={() => {
                        setOpenComment(!openComment);
                        setVideo(data.video);
                        setName(data.name);
                        setImg(data.img);
                        setDesc(data.desc);
                        setPosition(data.position);
                      }}
                    >
                      Читать Полный отзыв
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {openComment ? (
        <CommentOpen
          setOpenComment={setOpenComment}
          openComment={openComment}
          Videos={video}
          Names={name}
          Imgs={img}
          Descs={desc}
          Positions={position}
        />
      ) : null}
    </section>
  );
}
const CommentOpen = ({
  setOpenComment,
  openComment,
  Videos,
  Names,
  Imgs,
  Descs,
  Positions,
}: {
  setOpenComment: any;
  openComment: any;
  Videos: string;
  Names: string;
  Imgs: string;
  Descs: string;
  Positions: string;
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
              src={Imgs}
              width={56}
              height={56}
              alt="pic of feedback giver"
            />
          </div>
          <div className={styles.top_info_names}>
            <p className={styles.video_info_name}>{Names}</p>
            <p className={styles.video_info_position}>{Positions}</p>
          </div>
        </div>

        <p className={styles.open_desc}>{Descs}</p>

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
