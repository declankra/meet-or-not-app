import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearnMorePage from './components/LearnMorePage';
import ProgressBar from './components/ProgressBar';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import NecessityYes from './components/NecessityYes';
import NecessityNo from './components/NecessityNo';
// import { app, analytics } from './firebaseConfig';

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
    const updatedFormData = { ...formData, ...data };
    setFormData(updatedFormData);
    if (data.necessityNo) {
      // Redirect to NecessityNo page if there's no need for a meeting
      return {
        pathname: '/necessity-no',
        state: { noMeetingReason: data.noMeetingReason }
      };
    }
    if (step === 4) {
      // Redirect to NecessityYes page if user passes step four
      return {
        pathname: '/necessity-yes',
        state: { formData: updatedFormData }
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
        {isLastStep && <NecessityYes data={formData} onRestart={handleRestart} />}
      </div>
    );
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/necessity-no" element={<NecessityNo onRestart={handleRestart} />} />
          <Route path="/necessity-yes" element={<NecessityYes onRestart={handleRestart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;