import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css"; // Import the module CSS
import Header from "./Header";
import Cursor from "./Cursor";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>HostelHub</h1>
          <h2 className={styles.subtitle}>A Comprehensive Hostel Feedback System</h2>

          <div className={styles.buttonsContainer}>
            <button className={styles.navButton} onClick={() => navigate("/mess-feedback")}>
              🍽 Mess Feedback
            </button>
            <button className={styles.navButton} onClick={() => navigate("/room-maintenance")}>
              🛏 Room Maintenance
            </button>
            <button className={styles.navButton} onClick={() => navigate("/laundry")}>
              👕 Laundry Services
            </button>
            <button className={styles.navButton} onClick={() => navigate("/community-engagement")}>
              🎉 Community Engagement
            </button>
          </div>
        </div>

        <div className={styles.suggestionBox}>
          <h3>Common Suggestions</h3>
          <textarea placeholder="Write your suggestion here..."></textarea>
          <button className={styles.submitBtn}>Submit</button>
        </div>
      </div>
      <Cursor />
    </div>
  );
}

export default HomePage;