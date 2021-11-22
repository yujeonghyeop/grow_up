import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calender from "./component/Calender";
import Navbar from "./component/Navbar";
import Table from "./component/Table";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/calender" element={<Calender />} />
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
