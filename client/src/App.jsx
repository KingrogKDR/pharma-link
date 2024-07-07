import LandingPage from "./components/LandingPage/LandingPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SymptomForm from "./components/SymptomForm/SymptomForm"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/symptom-screening" element={<SymptomForm />} />
        </Routes>
      </Router>        
    </>
  )
}

export default App
