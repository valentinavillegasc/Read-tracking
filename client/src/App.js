import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import Detail from "./views/Detail";
import CheckEmail from "./views/CheckEmail";
import ConfirmEmail from "./views/ConfirmEmail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/library" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/checkemail" element={<CheckEmail />} />
        <Route path="/confirm/:token" element={<ConfirmEmail />} />
      </Routes>
    </div>
  );
}

export default App;
