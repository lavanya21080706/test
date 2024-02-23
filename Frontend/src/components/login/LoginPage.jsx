import React from 'react'
import styles from "./LoginPage.module.css"
import mailIcon from '../../assets/images/mailIcon.png'
import lock from '../../assets/images/lock.png'
import view from '../../assets/images/view.png'
import LeftContainer from '../leftContainer/LeftContainer'

function LoginPage() {
  return (
    <div className={styles.container}>
      <LeftContainer/>
      <div className={styles.rightContainer}>
        <p className={styles.loginText}>Login</p>
        <div className={styles.emailContainer}>
          <input type='text' placeholder='Email' className={styles.email} />
          <img src={mailIcon} alt='mail_icon' className={styles.mailIcon} />
        </div>
        <div className={styles.passwordContainer}>
          <img src={lock}  alt="lock_icon" className={styles.lockIcon}/>
          <input type="text" placeholder="Password" className={styles.password} />
          <img src={view} alt="view_icon" className={styles.viewIcon}  />
        </div>
        <button className={styles.loginButton}>Log in</button>
        <p className={styles.noAccount}>Have no account yet?</p>
        <button className={styles.registerButton}>Register</button>
      </div>
    </div>
  )
}

export default LoginPage;