import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import styles from '../ui/dashboard/dashboard.module.css'
import Footer from '../ui/dashboard/footer/footer'

const Layout = ({children}) => {
  return (
    <main className={styles.container} >
        <div className={styles.menu} >
            <Sidebar />
        </div>
        <div className={styles.content} >
            <Navbar /> 
            {children}
            <Footer />
        </div>
    </main>
  )
}

export default Layout