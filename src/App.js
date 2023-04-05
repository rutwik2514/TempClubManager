import Home from "./components/Homepage/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
