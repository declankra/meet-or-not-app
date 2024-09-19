import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearnMorePage from './components/LearnMorePage';
import ProgressBar from './components/ProgressBar';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import Result from './components/Result';
import { app, analytics } from './firebaseConfig';


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: '',
    expectedOutcomeType: '',
    expectedOutcome: '',
    priority: '',
  });

  const isLastStep = step > 4;

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleRestart = () => {
    setFormData({
      purpose: '',
      expectedOutcomeType: '',
      expectedOutcome: '',
      priority: '',
    });
    setStep(1);
  };

  const Steps = () => (
    <div className="app-container">
      <ProgressBar progress={(step - 1) * 25} />
      {!isLastStep && (
        <>
          {step === 1 && <StepOne onNext={handleNext} />}
          {step === 2 && <StepTwo onNext={handleNext} />}
          {step === 3 && <StepThree onNext={handleNext} />}
          {step === 4 && <StepFour onNext={handleNext} />}
        </>
      )}
      {isLastStep && <Result data={formData} onRestart={handleRestart} />}
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/steps" element={<Steps />} />
      </Routes>
    </Router>
  );
}

export default App;