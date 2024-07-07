import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgcontainer}>
          <Image src="/astronaut.png" alt="" fill  className={styles.bg}/>
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥Available Now</span>
          <h3 className={styles.title} > How to use the new version of the admin dashboard </h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            aperiam quam repudiandae molestias recusandae.
          </p>
          <button className={styles.button} >
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        {/* <div className={styles.bgcontainer}>
          <Image src="/astronaut.png" alt="" fill  className={styles.bg}/>
        </div> */}
        <div className={styles.text}>
          <span className={styles.notification}>🔥Available Now</span>
          <h3 className={styles.title} > How to use the new version of the admin dashboard </h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            aperiam quam repudiandae molestias recusandae.
          </p>
          <button className={styles.button} >
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </main>
  );
};

export default Rightbar;
