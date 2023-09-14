import ProjectCard from "../cards/projectCard";
import styles from "./page.module.css";
import { Variants, motion } from "framer-motion";
export default function Project() {
  const projects = [
    {
      image: "/media/projects/project1.png",
      title: "Rehau Asia - oyna romlar ishlab chuqaruvga oid web sayt ",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project2.png",
      title: "Magnet - onlayn bozor uchun ishlangan mobile ilova",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project3.png",
      title: "2clicks - Qarz oldi berish uchun ishlangan web sayt",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project4.png",
      title: "Home24 - Online elektron do’kon uchun chizilgan web sayt",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project5.png",
      title: "Cavsar tour - turistik agentligi uchun chizilgan web sayt",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project6.png",
      title: "Ar-global - Logistika uchun ishlangan web sayt",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project7.png",
      title: "Brand Jobs - bo’sh ishga ta’minlash uchun chizilgan mobil ilova",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project8.png",
      title:
        "Jahon invest plast - plastik, quvr va yoqilg’i quyish shahobchasi uchun chizilgan web sayt",
      link: "https://github.com/",
    },
    {
      image: "/media/projects/project11.png",
      title: "Hirelancer - frilanserlar uchun chizilgan web sayt",
      link: null,
    },
    {
      image: "/media/projects/project9.png",
      title:
        "Libos - Ayol va qizlar uchun online kiyim do’kon uchun chizilgan web sayt",
      link: null,
    },
    {
      image: "/media/projects/project10.png",
      title:
        "Polimer group asia - quvir ishlab chiqarish uchun chizilgan web sayt",
      link: null,
    },
  ];
  return (
    <section className={`box section ${styles.box}`}>
      <p className="section_title">Loyihalarimiz</p>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <motion.div
              initial="hide"
              whileInView="show"
              variants={{
                hide: {
                  opacity: 0,
                  x: 50,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: id * 0.2,
                    duration: 0.75,
                  },
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className={styles.card}
              key={id}
            >
              <ProjectCard project={project} key={id} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
