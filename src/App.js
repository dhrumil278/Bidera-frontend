import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/AuthPages/login";
import Signup from "./pages/AuthPages/signup";
import ForgotPassword from "./pages/AuthPages/forgotPassword";
import SetNewPassword from "./pages/AuthPages/setNewPassword";
import Verification from "./pages/AuthPages/verification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/setNewPassword" element={<SetNewPassword />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
