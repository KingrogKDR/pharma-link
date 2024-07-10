import LandingPage from "./components/LandingPage/LandingPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SymptomForm from "./components/SymptomForm/SymptomForm"
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/symptom-screening" element={<SymptomForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>        
    </>
  )
}

export default App
