import React, { useState } from "react";
import styles from "./MessFeedback.module.css"; // Import the module CSS
import Cursor from "./Cursor";
import Header from "./Header";

function MessFeedback() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [explanation, setExplanation] = useState("");

  const handleVote = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option); // Remove if already selected
      } else {
        return [...prevOptions, option]; // Add new option
      }
    });
  };

  const handleSubmit = () => {
    if (explanation.trim() === "") {
      alert("Please provide an explanation before submitting.");
      return;
    }
    alert(`You voted for: ${selectedOptions.join(", ")}\nReason: ${explanation}`);
  };

  const handleCancel = () => {
    setSelectedOptions([]); // Clear selections
    setExplanation(""); // Clear explanation
  };

  return (
    <div className={styles.MessFeedback}>
      <Header />

      {/* Main Heading */}
      <h1 className={styles.mainHeading}>Food for Thought</h1>

      <main className={styles.mainContainer}>
        {/* Left Section - Mess Feedback & Suggestions */}
        <div className={styles.leftSection}>
          <div className={styles.box}>
            <h2 className={styles.customTitle}>Mess Feedback</h2>
            <textarea className={styles.feedbackInput} placeholder="Comments, Concerns, or Questions"></textarea>
            <button className={styles.submitButton}>Submit</button>
          </div>

          <div className={styles.box}>
            <h2 className={styles.customTitle}>Mess Food Suggestions</h2>
            <textarea className={styles.feedbackInput} placeholder="Suggest food items..."></textarea>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </div>

        {/* Right Section - Poll */}
        <div className={styles.rightSection}>
          <div className={styles.box}>
            <h2 className={styles.customTitle}>Common Thoughts</h2>
            <p>Here is what's common among students today</p>
            <div className={styles.pollOptions}>
              <button
                className={`${styles.pollButton} ${selectedOptions.includes("Food Quality") ? styles.selected : ""}`}
                onClick={() => handleVote("Food Quality")}
              >
                Food Quality Needs Improvement
              </button>
              <button
                className={`${styles.pollButton} ${selectedOptions.includes("More Variety") ? styles.selected : ""}`}
                onClick={() => handleVote("More Variety")}
              >
                We Need More Variety in Food
              </button>
              <button
                className={`${styles.pollButton} ${selectedOptions.includes("Better Timings") ? styles.selected : ""}`}
                onClick={() => handleVote("Better Timings")}
              >
                Meal Timings Should Be More Flexible
              </button>
            </div>

            {/* Explanation Section (Always Visible) */}
            <div className={styles.explanationSection}>
              <p className={styles.selectedOption}>
                You selected: <strong>{selectedOptions.length > 0 ? selectedOptions.join(", ") : "None"}</strong>
              </p>
              <textarea
                className={styles.feedbackInput}
                placeholder="Explain why you chose this option..."
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
              ></textarea>
              <div className={styles.buttonGroup}>
                <button className={styles.submitButton} onClick={handleSubmit}>
                  Submit
                </button>
                <button className={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Cursor /> {/* Custom Cursor */}
    </div>
  );
}

export default MessFeedback;