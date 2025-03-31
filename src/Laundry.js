import styles from "./Laundry.module.css";
import Cursor from "./Cursor";
import Header from "./Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      {/* Main Heading */}
      <h1 className={styles.mainHeading}>Laundry</h1>

      <main className={styles.mainContainer}>
        {/* Left Section - Laundry Complaints */}
        <div className={styles.leftSection}>
          <div className={styles.box}>
            <h2 className={styles.customTitle}>Laundry Complaints</h2>
            <textarea
              className={styles.feedbackInput}
              placeholder="Enter your complaints..."
            ></textarea>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </div>

        {/* Right Section - Laundry Suggestions */}
        <div className={styles.rightSection}>
          <div className={styles.box}>
            <h2 className={styles.customTitle}>Laundry Suggestions</h2>
            <textarea
              className={styles.feedbackInput}
              placeholder="Give your suggestions..."
            ></textarea>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </div>
      </main>

      <Cursor /> {/* Custom Cursor */}
    </div>
  );
}

export default App;