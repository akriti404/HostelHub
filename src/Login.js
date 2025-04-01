import React from "react";
import styles from "./Login.module.css";
import Cursor from "./Cursor";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.loginContainer}>
        <div className={styles.loginLeft}>
          <img src="/Loginpage.png" alt="Login Visual" className={styles.loginImage} />
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
            <h2 className={styles.loginTitle}><b>Your second home!</b></h2>
            <input type="text" placeholder="Enter Reg No" className={styles.loginInput} required/>
            <input type="password" placeholder="Enter VTOP password" className={styles.loginInput} required />
            <div className={styles.buttonDiv}>
            <button className={styles.loginButton} onClick={() => navigate("/home")}>
                Login
            </button>
            </div>
            <div className={styles.loginDivider}></div>
            <p className={styles.loginText}>
              Please reset password from VTOP if you have forgotten
            </p>
            <p className={styles.adminLogin}>
              <a href="#" className={styles.adminLoginLink}>Admin Login</a>
            </p>
          </div>
        </div>
      </main>
      <Cursor />
    </div>
  );
}

export default Login;
