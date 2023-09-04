import ProjectCard from "../cards/projectCard";
import styles from "./page.module.css";
export default function Project() {
  const projects = [
    {
      image: "/media/projects/project1.png",
      title: "Rehau Asia - oyna romlar ishlab chuqaruvga oid web sayt ",
    },
    {
      image: "/media/projects/project2.png",
      title: "2clicks - mobil ilova uchun ishlangan web sayt dizayni",
    },
    {
      image: "/media/projects/project3.png",
      title: "2clicks - mobil ilova uchun ishlangan web sayt dizayni",
    },
    {
      image: "/media/projects/project4.png",
      title: "Home24 - Online elektron do’kon uchun chizilgan web dizayn",
    },
    {
      image: "/media/projects/project5.png",
      title: "Cavsar tour - turistik agentligi uchun web sayt dizayni",
    },
    {
      image: "/media/projects/project6.png",
      title: "Ar-global - Logistika uchun ishlangan web sayt dizayni",
    },
    {
      image: "/media/projects/project7.png",
      title: "Brand Jobs- uchun ishlangan mobil ilova dizayni",
    },
    {
      image: "/media/projects/project8.png",
      title: "Home24 - Online elektron do’kon uchun chizilgan web dizayn",
    },
    {
      image: "/media/projects/project9.png",
      title: "2clicks - mobil ilova uchun ishlangan web sayt dizayni",
    },
    {
      image: "/media/projects/project10.png",
      title: "Rehau Asia - oyna romlar ishlab chuqaruvga oid web sayt ",
    },
    {
      image: "/media/projects/project11.png",
      title: "Hirelancer - frilanserlar uchun ishlangan web sayt dizayni",
    },
  ];
  return (
    <section className={`box section ${styles.box}`}>
      <p className="section_title">Loyihalarimiz</p>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard project={project} key={id} />;
        })}
      </div>
    </section>
  );
}
