import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Laundry from "./Laundry";
import MessFeedback from "./MessFeedback";
import RoomMaintenance from "./RoomMaintenance";
import CommunityEngagement from "./Community";
import Body from "./Body"; // Import the Body component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Body />} /> {/* Set Body as the main page */}
                <Route path="/home" element={<HomePage />} /> {/* Optional: Add HomePage as /home */}
                <Route path="/mess-feedback" element={<MessFeedback />} />
                <Route path="/room-maintenance" element={<RoomMaintenance />} />
                <Route path="/laundry" element={<Laundry />} />
                <Route path="/community-engagement" element={<CommunityEngagement />} />
            </Routes>
        </Router>
    );
}

export default App;