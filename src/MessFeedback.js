import React, { useState } from "react";
import "./MessFeedback.css";
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
    <div className="MessFeedback">
        <Header/>

      {/* Main Heading */}
      <h1 className="main-heading">Food for Thought</h1>

      <main className="main-container">
        {/* Left Section - Mess Feedback & Suggestions */}
        <div className="left-section">
          <div className="box">
            <h2 className="custom-title">Mess Feedback</h2>
            <textarea className="feedback-input" placeholder="Comments, Concerns, or Questions"></textarea>
            <button className="submit-button">Submit</button>
          </div>

          <div className="box">
            <h2 className="custom-title">Mess Food Suggestions</h2>
            <textarea className="feedback-input" placeholder="Suggest food items..."></textarea>
            <button className="submit-button">Submit</button>
          </div>
        </div>

        {/* Right Section - Poll */}
        <div className="right-section">
          <div className="box">
            <h2 className="custom-title">Common Thoughts</h2>
            <p>Here is what's common among students today</p>
            <div className="poll-options">
              <button
                className={`poll-button ${selectedOptions.includes("Food Quality") ? "selected" : ""}`}
                onClick={() => handleVote("Food Quality")}
              >
                Food Quality Needs Improvement
              </button>
              <button
                className={`poll-button ${selectedOptions.includes("More Variety") ? "selected" : ""}`}
                onClick={() => handleVote("More Variety")}
              >
                We Need More Variety in Food
              </button>
              <button
                className={`poll-button ${selectedOptions.includes("Better Timings") ? "selected" : ""}`}
                onClick={() => handleVote("Better Timings")}
              >
                Meal Timings Should Be More Flexible
              </button>
            </div>

            {/* Explanation Section (Always Visible) */}
            <div className="explanation-section">
              <p className="selected-option">
                You selected: <strong>{selectedOptions.length > 0 ? selectedOptions.join(", ") : "None"}</strong>
              </p>
              <textarea
                className="feedback-input"
                placeholder="Explain why you chose this option..."
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
              ></textarea>
              <div className="button-group">
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
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
