import React, { useState } from "react";
import styles from "./Room.module.css"; // Import the module CSS
import Cursor from "./Cursor";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Room() {
  const [cleaningRequests, setCleaningRequests] = useState([]);
  const [equipmentIssues, setEquipmentIssues] = useState([]);
  const [newCleaningRequest, setNewCleaningRequest] = useState("");
  const [newEquipmentIssue, setNewEquipmentIssue] = useState("");
  const [equipmentType, setEquipmentType] = useState("AC");
  const [requestDate, setRequestDate] = useState(null);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCleaningSubmit = () => {
    if (newCleaningRequest.trim() !== "" && requestDate) {
      setCleaningRequests([
        ...cleaningRequests,
        {
          id: Date.now(),
          request: newCleaningRequest,
          status: "Pending",
          date: new Date().toLocaleString(),
          scheduledDate: formatDate(requestDate),
        },
      ]);
      setNewCleaningRequest("");
      setRequestDate(null);
    }
  };

  const handleEquipmentSubmit = () => {
    if (newEquipmentIssue.trim() !== "" && requestDate) {
      setEquipmentIssues([
        ...equipmentIssues,
        {
          id: Date.now(),
          equipment: equipmentType,
          issue: newEquipmentIssue,
          status: "Pending",
          date: new Date().toLocaleString(),
          scheduledDate: formatDate(requestDate),
        },
      ]);
      setNewEquipmentIssue("");
      setRequestDate(null);
    }
  };

  const updateStatus = (type, id, newStatus) => {
    if (type === "cleaning") {
      setCleaningRequests(
        cleaningRequests.map((request) =>
          request.id === id ? { ...request, status: newStatus } : request
        )
      );
    } else {
      setEquipmentIssues(
        equipmentIssues.map((issue) =>
          issue.id === id ? { ...issue, status: newStatus } : issue
        )
      );
    }
  };

  return (
    <div>
      <Cursor />
      <Header />

      <div className={styles.mainContainer}>
        <h1 className={styles.mainHeading}>Room Maintenance</h1>

        <div className={styles.commonDatePicker}>
          <label>Preferred Service Date</label>
          <DatePicker
            selected={requestDate}
            onChange={(date) => setRequestDate(date)}
            minDate={new Date()}
            placeholderText="Select a date"
            className={styles.datePickerInput}
            dateFormat="MMMM d, yyyy"
            required
            withPortal
          />
        </div>

        <div className={styles.sectionsRow}>
          <div className={styles.box}>
            <h2>Cleaning Requests</h2>
            <p>Request room cleaning or report unsatisfactory services</p>
            <textarea
              className={styles.inputBox}
              placeholder="Describe your cleaning request..."
              value={newCleaningRequest}
              onChange={(e) => setNewCleaningRequest(e.target.value)}
              required
            />
            <button
              className={styles.submitButton}
              onClick={handleCleaningSubmit}
              disabled={!newCleaningRequest.trim() || !requestDate}
            >
              Submit Request
            </button>

            {cleaningRequests.length > 0 && (
              <div className={styles.requestList}>
                <h3>Recent Cleaning Requests</h3>
                <ul>
                  {cleaningRequests.map((request) => (
                    <li key={request.id} className={styles.requestItem}>
                      <div className={styles.requestInfo}>
                        <span className={styles.requestText}>{request.request}</span>
                        <span className={styles.requestDate}>Submitted: {request.date}</span>
                        <span className={styles.scheduledDate}>
                          Scheduled for: <strong>{request.scheduledDate}</strong>
                        </span>
                      </div>
                      <div className={styles.requestStatus}>
                        Status: {request.status}
                        {request.status === "Pending" && (
                          <button
                            className={`${styles.statusButton} ${styles.resolved}`}
                            onClick={() => updateStatus("cleaning", request.id, "Resolved")}
                          >
                            Mark Resolved
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.box}>
            <h2 className={styles.texth2} >Equipment Issues</h2>
            <p>Report broken or malfunctioning room equipment</p>
            <select
              className={styles.inputBox}
              value={equipmentType}
              onChange={(e) => setEquipmentType(e.target.value)}
            >
              <option value="AC">AC</option>
              <option value="Light">Light</option>
              <option value="Fan">Fan</option>
              <option value="Furniture">Furniture</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              className={styles.inputBox}
              placeholder="Describe the equipment issue..."
              value={newEquipmentIssue}
              onChange={(e) => setNewEquipmentIssue(e.target.value)}
              required
            />
            <button
              className={styles.submitButton}
              onClick={handleEquipmentSubmit}
              disabled={!newEquipmentIssue.trim() || !requestDate}
            >
              Report Issue
            </button>

            {equipmentIssues.length > 0 && (
              <div className={styles.requestList}>
                <h3>Recent Equipment Issues</h3>
                <ul>
                  {equipmentIssues.map((issue) => (
                    <li key={issue.id} className={styles.requestItem}>
                      <div className={styles.requestInfo}>
                        <span className={styles.equipmentType}>{issue.equipment}: </span>
                        <span className={styles.requestText}>{issue.issue}</span>
                        <span className={styles.requestDate}>Submitted: {issue.date}</span>
                        <span className={styles.scheduledDate}>
                          Scheduled for: <strong>{issue.scheduledDate}</strong>
                        </span>
                      </div>
                      <div className={styles.requestStatus}>
                        Status: {issue.status}
                        {issue.status === "Pending" && (
                          <button
                            className={`${styles.statusButton} ${styles.resolved}`}
                            onClick={() => updateStatus("equipment", issue.id, "Resolved")}
                          >
                            Mark Resolved
                          </button>
                        )}
                      </div>
                    </li>
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

export default Room;