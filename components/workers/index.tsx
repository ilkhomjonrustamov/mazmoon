import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
export default function Workers() {
  const workers = [
    {
      img: "/media/worker1.png",
      name: "Jamshid",
      position: "Loyiha menejeri",
    },
    {
      img: "/media/worker2.png",
      name: "Baxtjon",
      position: "Maxsulot dizayner",
    },
    {
      img: "/media/worker3.png",
      name: "Abdulloh",
      position: "UX/UI dizayner",
    },
    {
      img: "/media/worker4.png",
      name: "Shamsiddin",
      position: "UX/UI dizayner",
    },
  ];
  const worker_need = [
    {
      name: "Art direktor",
      position: "Senior",
    },
    {
      name: "Web dizayner",
      position: "Amaliyot",
    },
    {
      name: "Illustration",
      position: "Junior",
    },
    {
      name: "Art direktor",
      position: "Midlle",
    },
  ];
  return (
    <section className={`box section ${styles.box}`}>
      <div className={styles.top_workers}>
        <p className={`section_title ${styles.section_title}`}>
          Qobilyatli jaydari <span> ishchilarimiz</span>
        </p>
        <div className={styles.workers}>
          {workers.map((worker, id) => {
            return (
              <motion.div
                initial="hide"
                whileInView="show"
                variants={{
                  hide: {
                    opacity: 0,
                    x: -50,
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
                key={id}
              >
                <div className={styles.worker}>
                  <div className={styles.worker_imgs}>
                    <Image
                      src={worker.img}
                      alt="worker"
                      className={styles.worker_img}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className={styles.worker_info}>
                    <p className={styles.name}>{worker.name}</p>
                    <p className={styles.position}>{worker.position}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className={styles.bottom_workers}>
        <p className={`section_title ${styles.section_title}`}>
          Bizga qobilyatli jaydari <span> ishchilar kerak</span>
        </p>
        <div className={styles.jobs}>
          {worker_need.map((worker, id) => {
            return (
              <motion.div
                initial="hide"
                whileInView="show"
                variants={{
                  hide: {
                    opacity: 0,
                    x: -50,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: id * 0.1,
                      duration: 0.75,
                    },
                  },
                }}
                viewport={{ once: true, amount: 0.8 }}
                key={id}
                className={styles.motion}
              >
                <div className={styles.job}>
                  <p className={styles.job_title}>{worker.name}</p>
                  <p className={styles.job_level}>{worker.position}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
