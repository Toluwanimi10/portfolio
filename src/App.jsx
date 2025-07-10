import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Page">
  <div className="App">
    <div className="Body">
      <h1>Omole Daniel</h1>
      <h2>Software Engineer & Mobile Develoer</h2>
      <p>
        I am a software engineer with a passion for building scalable web and mobile applications.
        I have experience in various programming languages and frameworks, and I love to learn new technologies.
      </p>
      <div className="buttons">
        <a href="#" className="button">Contact Me</a>
        <a href="#" className="button">View Projects</a>
      </div>
    </div>

    <div className="Image">
      <img src="/Images/photo1.jpeg" alt="Omole Daniel" className="hero-image" />
    </div>
  </div>

  <footer className="Footer">
    <p>© 2025 Omole Daniel. All rights reserved.</p>
    <div className="social-links">
      <a href="https://github.com/Toluwanimi_10" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://twitter.com/ydk_danny" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="mailto:youremail@example.com">Email</a>
    </div>
  </footer>
</div>

    
  );
}

export default App;

