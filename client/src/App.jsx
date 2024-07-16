import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const LandingPage = React.lazy(() => import("./components/LandingPage/LandingPage"))
const SymptomForm = React.lazy(() => import("./components/SymptomForm/SymptomForm"))
const Login = React.lazy(() => import("./components/Login/Login"))
const SignUp = React.lazy(() => import("./components/SignUp/SignUp"))
import { AuthProvider } from "./utils/AuthContext";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound/NotFound";

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<Loading />}>
                <LandingPage />
              </Suspense>
            }/>
            <Route path="/symptom-screening" element={
              <Suspense fallback={<Loading />}>           
                <SymptomForm />
              </Suspense>
            } />
            <Route path="/login" element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            } />
            <Route path="/sign-up" element={
              <Suspense fallback={<Loading />}>
                <SignUp />
              </Suspense>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>        
      </AuthProvider>
    </>
  )
}

export default App
