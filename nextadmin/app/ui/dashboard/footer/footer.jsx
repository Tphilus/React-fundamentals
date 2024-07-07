import React from 'react'
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container} >
      <div className={styles.logo}> Tphilus </div>
      <span className={styles.text}> All right reserved. </span>
    </div>
  )
}

export default Footer