import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LandingPage from './components/LandingPage';
import LearnMorePage from './components/LearnMorePage';
import Steps from './components/Steps';
import NecessityYes from './components/NecessityYes';
import NecessityNo from './components/NecessityNo';

const PageTitle = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/':
        return "Meet Or Not | Ensure Productive Meetings";
      case '/learn-more':
        return "Learn More | Meet Or Not";
      case '/steps':
        return "Meeting Evaluation | Meet Or Not";
      case '/necessity-yes':
        return "Meeting Recommended | Meet Or Not";
      case '/necessity-no':
        return "Meeting Not Necessary | Meet Or Not";
      default:
        return "Meet Or Not";
    }
  };

  return (
    <Helmet>
      <title>{getPageTitle()}</title>
    </Helmet>
  );
};

function App() {
  const [formData, setFormData] = useState({
    purpose: '',
    expectedOutcomeType: '',
    expectedOutcome: '',
    priority: '',
  });

  const handleFormUpdate = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  const handleRestart = () => {
    setFormData({
      purpose: '',
      expectedOutcomeType: '',
      expectedOutcome: '',
      priority: '',
    });
  };

  return (
    <Router>
      <div className="app-container">
        <PageTitle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/steps" element={<Steps formData={formData} onFormUpdate={handleFormUpdate} />} />
          <Route path="/necessity-no" element={<NecessityNo onRestart={handleRestart} />} />
          <Route path="/necessity-yes" element={<NecessityYes formData={formData} onRestart={handleRestart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;