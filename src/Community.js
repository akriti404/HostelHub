import React, { useState } from "react";
import styles from "./Community.module.css";
import Cursor from "./Cursor";
import Header from "./Header";
import styles1 from "./Button.module.css";

function Community() {
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const [djSuggestions, setDJSuggestions] = useState([]);
  const [eventSuggestions, setEventSuggestions] = useState([]);
  const [themes, setThemes] = useState([
    { name: "Bollywood", votes: 0 },
    { name: "EDM", votes: 0 },
    { name: "Retro", votes: 0 },
    { name: "Gothic", votes: 0 },
    { name: "Masquerade", votes: 0 },
    { name: "Pyjama Party", votes: 0 }
  ]);

  const [movieInput, setMovieInput] = useState("");
  const [djInput, setDJInput] = useState("");
  const [eventInput, setEventInput] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleMovieSubmit = () => {
    if (movieInput.trim() !== "") {
      setMovieSuggestions([...movieSuggestions, { name: movieInput, votes: 0 }]);
      setMovieInput("");
    }
  };

  const handleVote = (index) => {
    const updatedMovies = [...movieSuggestions];
    updatedMovies[index].votes += 1;
    setMovieSuggestions(updatedMovies);
  };

  const handleDJSubmit = () => {
    if (djInput.trim() !== "") {
      setDJSuggestions([...djSuggestions, djInput]);
      setDJInput("");
    }
  };

  const handleThemeVote = (index) => {
    const updatedThemes = [...themes];
    updatedThemes[index].votes += 1;
    setThemes(updatedThemes);
  };

  const handleEventSubmit = () => {
    if (eventInput.trim() !== "" && eventDescription.trim() !== "") {
      setEventSuggestions([...eventSuggestions, { name: eventInput, description: eventDescription }]);
      setEventInput("");
      setEventDescription("");
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <h1 className={styles.mainHeading}>Community Engagement</h1>
        <div className={styles.sectionsRow}>
          <div className={styles.box}>
            <h2>Movie Night Screening</h2>
            <p>Suggest a movie or vote for existing ones!</p>
            <input
              type="text"
              className={styles.inputBox}
              placeholder="Suggest a movie..."
              value={movieInput}
              onChange={(e) => setMovieInput(e.target.value)}
            />
            <button className={styles1.btn} onClick={handleMovieSubmit}>Submit</button>
            <ul className={styles.suggestionList}>
              {movieSuggestions.map((movie, index) => (
                <li key={index} className={styles.suggestionItem}>
                  {movie.name} - Votes: {movie.votes}
                  <button className={styles.voteButton} onClick={() => handleVote(index)}>Vote</button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.box}>
            <h2>DJ Night</h2>
            <p>Suggest songs or choose a party theme!</p>
            <input
              type="text"
              className={styles.inputBox}
              placeholder="Suggest songs..."
              value={djInput}
              onChange={(e) => setDJInput(e.target.value)}
            />
            <button className={styles1.btn} onClick={handleDJSubmit}>Submit</button>
            <div className={styles.themeButtons}>
              {themes.map((theme, index) => (
                <div key={index} className={styles.themeButtonContainer}>
                  <button
                    className={styles.themeButton}
                    onClick={() => handleThemeVote(index)}
                  >
                    {theme.name}
                  </button>
                  <span className={styles.themeVotes}>Votes: {theme.votes}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.box}>
            <h2>Suggest an Event</h2>
            <p>Have an idea for an event? Let us know!</p>
            <input
              type="text"
              className={styles.inputBox}
              placeholder="Event Name..."
              value={eventInput}
              onChange={(e) => setEventInput(e.target.value)}
            />
            <textarea
              className={styles.inputBox}
              placeholder="Event Description..."
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <button className={styles1.btn} onClick={handleEventSubmit}>Submit</button>
            {eventSuggestions.length > 0 && (
              <div className={styles.previousEvents}>
                <h3>Previously Suggested Events</h3>
                <ul className={styles.eventList}>
                  {eventSuggestions.map((event, index) => (
                    <li key={index}>{event.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;