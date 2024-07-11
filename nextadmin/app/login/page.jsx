import React from 'react'
import styles from '@/app/ui/login/login.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container} > 
    <form action="" className={styles.form} >
    <h1>welcome</h1>
      <input type="text"  placeholder='username' />
      <input type="password" placeholder='*********' />
      <button type='button'  >login</button>
    </form>
    </div>
  )
}

export default LoginPage;