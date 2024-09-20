import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearnMorePage from './components/LearnMorePage';
import ProgressBar from './components/ProgressBar';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import Result from './components/Result';
import NecessityNo from './components/NecessityNo';
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
    if (data.necessityNo) {
      // Redirect to NecessityNo page if there's no need for a meeting
      return {
        pathname: '/necessity-no',
        state: { noMeetingReason: data.noMeetingReason }
      };
    }
    setStep(step + 1);
    return null;
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

  const Steps = () => {
    const navigate = useNavigate();
    
    const handleStepNext = (data) => {
      const redirect = handleNext(data);
      if (redirect) {
        navigate(redirect.pathname, { state: redirect.state });
      }
    };

    return (
      <div className="app-container">
        <ProgressBar progress={(step - 1) * 25} />
        {!isLastStep && (
          <>
            {step === 1 && <StepOne onNext={handleStepNext} />}
            {step === 2 && <StepTwo onNext={handleStepNext} />}
            {step === 3 && <StepThree onNext={handleStepNext} />}
            {step === 4 && <StepFour onNext={handleStepNext} />}
          </>
        )}
        {isLastStep && <Result data={formData} onRestart={handleRestart} />}
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/necessity-no" element={<NecessityNo />} />
      </Routes>
    </Router>
  );
}

export default App;