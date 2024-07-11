import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container} >
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src='/noavatar.png' alt='' fill />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <label htmlFor="">Username</label>
                <input type="text" name='username' placeholder='John' />
                <label htmlFor="">Email</label>
                <input type="email" name='email' placeholder='Email' />
                <label htmlFor="">Password</label>
                <input type="password" name='' placeholder='***********' />
                <label htmlFor="">Password</label>
                <input type="password" name='password' placeholder='Enter your password' />
                <label htmlFor="">Phone</label>
                <input type="text" name='phone' placeholder='+12235867' />
                <label htmlFor="">Address</label>
                <textarea type="text" name='address' placeholder='USA' />
                <label htmlFor="">Is Admin?</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label htmlFor="">Is Active?</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button type='submit' > Update </button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage