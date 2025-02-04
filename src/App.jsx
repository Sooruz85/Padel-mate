import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Matchmaking from "./pages/Matchmaking";
import Reservation from "./pages/Reservation";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
