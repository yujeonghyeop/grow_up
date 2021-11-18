import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calender from "./component/Calender";
import Navbar from "./component/Navbar";
import Table from "./component/Table";
import Home from "./component/Home";
import Creategame from "./component/Creatgame";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/calender" element={<Calender />} />
        <Route path="/creategame" element={<Creategame />}/>
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;


