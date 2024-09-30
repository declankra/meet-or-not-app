import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ProgressBar from './ProgressBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

function Steps({ formData, onFormUpdate }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const getStepTitle = () => {
    switch(step) {
      case 1:
        return "Step 1: Meeting Purpose | Meet Or Not";
      case 2:
        return "Step 2: Expected Outcome | Meet Or Not";
      case 3:
        return "Step 3: Outcome Details | Meet Or Not";
      case 4:
        return "Step 4: Priority Level | Meet Or Not";
      default:
        return "Meeting Evaluation | Meet Or Not";
    }
  };

  const handleNext = (data) => {
    const updatedFormData = { ...formData, ...data };
    onFormUpdate(updatedFormData);

    if (data.necessityNo) {
      navigate('/necessity-no', { 
        state: { noMeetingReason: data.noMeetingReason },
        replace: true
      });
      return;
    }
    
    if (step === 4) {
      navigate('/necessity-yes', { 
        state: { formData: updatedFormData },
        replace: true
      });
      return;
    }
    
    setStep(prevStep => prevStep + 1);
  };

  return (
    <div className="steps-container">
      <Helmet>
        <title>{getStepTitle()}</title>
      </Helmet>
      <ProgressBar progress={(step - 1) * 25} />
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && <StepTwo onNext={handleNext} />}
      {step === 3 && <StepThree onNext={handleNext} />}
      {step === 4 && <StepFour onNext={handleNext} />}
    </div>
  );
}

export default Steps;