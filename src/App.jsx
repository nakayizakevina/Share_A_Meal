import { Routes, Route } from "react-router-dom";

import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

import './Theme/Global.css'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
   </Routes>
  );
  
}

export default App
