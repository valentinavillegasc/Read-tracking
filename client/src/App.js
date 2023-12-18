import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Register from "./views/Register";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
