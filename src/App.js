import { Route, Routes } from "react-router-dom";
import Planets from "./components/Planets";
import Resident from "./components/Resident";
import Residents from "./components/Residents";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Planets />} />
      <Route path="/Residents" element={<Residents />} />
      <Route path="/Resident/:id" element={<Resident />} />
    </Routes>
  );
}

export default App;
