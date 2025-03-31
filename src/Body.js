import React, { useEffect } from "react";
import styles from "./Body.module.css";
import HeaderL from "./HeaderL.js";
import Cursor from "./Cursor.js";
import styles1 from "./Button.module.css";

function Body() {
  useEffect(() => {
    // Apply scroll animation to both Features and Reviews sections
    const revealElements = document.querySelectorAll(`.${styles.scrollReveal}`);

    const scrollReveal = () => {
      revealElements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add(styles.show);
        }
      });
    };

    window.addEventListener("scroll", scrollReveal);
    scrollReveal(); // Run on load in case elements are already in view

    return () => window.removeEventListener("scroll", scrollReveal);
  }, []);

  return (
    <div className={styles.body}>
      <HeaderL />
      <div className={styles.mainText}>
        <h1 className={styles.title}>Welcome to HostelHub</h1>
        <p className={styles.supp}>Your one-stop solution for all your hostel needs.</p>
        <button className={styles1.btn}>Get Started</button>
      </div>

      <div className={`${styles.features} ${styles.scrollReveal}`}>
        <h2 className={styles.featureTitle}>Features</h2>
        <div className={styles.featuresContainer}>
          <div className={`${styles.box} ${styles.scrollReveal}`}>
            <h2>Room Cleaning</h2>
            <p>Keep your space neat and tidy with scheduled cleaning services.</p>
          </div>
          <div className={`${styles.box} ${styles.scrollReveal}`}>
            <h2>Mess</h2>
            <p>Enjoy balanced meals with customizable menu options.</p>
          </div>
          <div className={`${styles.box} ${styles.scrollReveal}`}>
            <h2>Laundry</h2>
            <p>Hassle-free laundry services at your convenience.</p>
          </div>
          <div className={`${styles.box} ${styles.scrollReveal}`}>
            <h2>Community Suggestions</h2>
            <p>Share ideas and feedback to improve hostel life.</p>
          </div>
        </div>
      </div>

      <div className={`${styles.reviews} ${styles.scrollReveal}`}>
        <h2 className={styles.reviewTitle}>What Our Users Say</h2>
        <div className={styles.reviewsContainer}>
          <div className={`${styles.reviewBox} ${styles.scrollReveal}`}>
            <div className={styles.reviewLeft}>
              <img
                src="https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg"
                alt="John Doe"
                className={styles.reviewImg}
              />
              <h3>John Doe</h3>
            </div>
            <p className={styles.reviewText}>
              "HostelHub has made my hostel life so much easier! The mess menu customization is a game-changer."
            </p>
          </div>

          <div className={`${styles.reviewBox} ${styles.scrollReveal}`}>
            <div className={styles.reviewLeft}>
              <img
                src="https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg"
                alt="Sarah Lee"
                className={styles.reviewImg}
              />
              <h3>Sarah Lee</h3>
            </div>
            <p className={styles.reviewText}>
              "I love the cleaning services. The app is smooth and easy to use!"
            </p>
          </div>

          <div className={`${styles.reviewBox} ${styles.scrollReveal}`}>
            <div className={styles.reviewLeft}>
              <img
                src="https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg"
                alt="David Kumar"
                className={styles.reviewImg}
              />
              <h3>David Kumar</h3>
            </div>
            <p className={styles.reviewText}>
              "The community suggestions feature helped me connect with others and improve our living experience."
            </p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2025 HostelHub. All rights reserved.</p>
      </footer>
      <Cursor />
    </div>
  );
}

export default Body;