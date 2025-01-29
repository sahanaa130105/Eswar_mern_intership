import React from 'react';
import './resume.css'

// React component to handle resume download
export const Resume = () => {
  // Function to handle the resume download
  const downloadResume = () => {
    const resumeUrl = `./portfolio/public/resume.pdf`; // Correcting path using PUBLIC_URL
    console.log(resumeUrl)
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Resume.pdf'; // The name for the downloaded file
  link.click();
};

  return (
    <div className="resume-download-container">
      <div className="new">
        <h1>Resume as PDF</h1>
      </div>
      <button onClick={downloadResume} className="download-btn">
        Download Resume
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Resume />
    </div>
  );
};

export default App;
