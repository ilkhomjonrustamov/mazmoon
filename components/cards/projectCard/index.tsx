import styles from "./page.module.css";
import Image from "next/image";

interface IProject {
  title: string;
  image: string;
}
export default function ProjectCard({ project }: { project: IProject }) {
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
    </div>
  );
}
