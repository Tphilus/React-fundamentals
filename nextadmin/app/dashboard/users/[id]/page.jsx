import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container} >
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src='/avatar.png' alt='' fill />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
            <label htmlFor="">Username</label>
            <input type="text" name='username' placeholder='John' />
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Email' />
            <label htmlFor="">Password</label>
            <input type="password" name='' placeholder='Enter your passwor' />
            <label htmlFor="">Password</label>
            <input type="password" name='' placeholder='Enter your passwor' />
        </div>
    </div>
  )
}

export default SingleUserPage