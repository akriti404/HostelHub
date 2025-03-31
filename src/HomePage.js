import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Header from "./Header";
import Cursor from "./Cursor";

function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className="home-container">
            <div className="content">
                <h1 className="title">HostelHub</h1>
                <h2 className="subtitle">A Comprehensive Hostel Feedback System</h2>

                <div className="buttons-container">
                    <button className="nav-button" onClick={() => navigate("/mess-feedback")}>
                        🍽 Mess Feedback
                    </button>
                    <button className="nav-button" onClick={() => navigate("/room-maintenance")}>
                        🛏 Room Maintenance
                    </button>
                    <button className="nav-button" onClick={() => navigate("/laundry")}>
                        👕 Laundry Services
                    </button>
                    <button className="nav-button" onClick={() => navigate("/community-engagement")}>
                        🎉 Community Engagement
                    </button>
                </div>
            </div>

            <div className="suggestion-box">
                <h3>Common Suggestions</h3>
                <textarea placeholder="Write your suggestion here..."></textarea>
                <button className="submit-btn">Submit</button>
            </div>
        </div>
        <Cursor/>
        </div>
    );
}

export default HomePage;