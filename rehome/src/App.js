import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Police from "./pages/police-section/police";

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/police" element={<Police/>} />
        </Routes>
      </div>
  );
}
