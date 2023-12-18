import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Login from "./views/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
