import styles from "./page.module.css";
import Image from "next/image";
export default function Workers() {
  return (
    <section className={`box section ${styles.box}`}>
      <div className={styles.top_workers}>
        <p className={`section_title ${styles.section_title}`}>
          Qobilyatli jaydari <span>ishchilarimiz</span>
        </p>
        <div className={styles.workers}>
          <div className={styles.worker}>
            <div className={styles.worker_imgs}>
              <Image
                src="/media/worker1.png"
                alt="worker"
                className={styles.worker_img}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.worker_info}>
              <p className={styles.name}>Jamshid</p>
              <p className={styles.position}>Loyiha menejeri</p>
            </div>
          </div>
          <div className={styles.worker}>
            <div className={styles.worker_imgs}>
              <Image
                src="/media/worker2.png"
                alt="worker"
                className={styles.worker_img}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.worker_info}>
              <p className={styles.name}>Baxtjon</p>
              <p className={styles.position}>Maxsulot dizayner</p>
            </div>
          </div>
          <div className={styles.worker}>
            <div className={styles.worker_imgs}>
              <Image
                src="/media/worker3.png"
                alt="worker"
                className={styles.worker_img}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.worker_info}>
              <p className={styles.name}>Abdulloh</p>
              <p className={styles.position}>UX/UI dizayner</p>
            </div>
          </div>
          <div className={styles.worker}>
            <div className={styles.worker_imgs}>
              <Image
                src="/media/worker4.png"
                alt="worker"
                className={styles.worker_img}
                width={300}
                height={300}
              />
            </div>
            <div className={styles.worker_info}>
              <p className={styles.name}>Shamsiddin</p>
              <p className={styles.position}>UX/UI dizayner</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_workers}>
        <p className={`section_title ${styles.section_title}`}>
          Bizga qobilyatli jaydari <span> ishchilar kerak</span>
        </p>
        <div className={styles.jobs}>
          <div className={styles.job}>
            <p className={styles.job_title}>Art direktor</p>
            <p className={styles.job_level}>Senior</p>
          </div>
          <div className={styles.job}>
            <p className={styles.job_title}>Web dizayner</p>
            <p className={styles.job_level}>Amaliyot</p>
          </div>
          <div className={styles.job}>
            <p className={styles.job_title}>Illustration</p>
            <p className={styles.job_level}>Junior</p>
          </div>
          <div className={styles.job}>
            <p className={styles.job_title}>Art direktor</p>
            <p className={styles.job_level}>Midlle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
