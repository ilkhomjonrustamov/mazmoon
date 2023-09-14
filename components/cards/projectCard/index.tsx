import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { arrow_right_project } from "@/public/icons";

interface IProject {
  title: string;
  image: string;
  link: string | null;
}
export default function ProjectCard({ project }: { project: IProject }) {
  if (project.link != null) {
    return (
      <Link className={styles.card} href={project.link}>
        <div className={styles.image_box}>
          <Image
            src={project.image}
            width={612}
            alt="project image"
            height={458}
            className={styles.img}
          />
        </div>
        <div className={styles.card_title_box}>
          <p>{project.title}</p>
        </div>

        <div className={styles.hover_image}>
          <button className={`${styles.inner_hover_btn} ${styles.svg}`}>
            {arrow_right_project}
          </button>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={styles.card}>
        <div className={styles.image_box}>
          <Image
            src={project.image}
            width={612}
            alt="project image"
            height={458}
            className={styles.img}
          />
        </div>
        <div className={styles.card_title_box}>
          <p>{project.title}</p>
        </div>

        <div className={styles.hover_image}>
          <button className={styles.inner_hover_btn}>Tez kunda</button>
        </div>
      </div>
    );
  }
}
