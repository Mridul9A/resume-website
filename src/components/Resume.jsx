// Resume.jsx

import React from "react";
import "../Style/styleResume.css";

const Resume = () => {
  return (
    <div id="resume-content">
      <div className="container">
        <h1>Mridul</h1>

        <div className="linkAccount">
          <span>
            <a href="tel:8709165107">8709165107</a>
          </span>

          <span>
            <a href="mailto:mridul0990@gmail.com">mridul0990@gmail.com</a>
          </span>

          <span>
            <a href="https://www.linkedin.com/in/mridul09" target="_blank">
              https://www.linkedin.com/in/mridul09
            </a>
          </span>
        </div>

        <div className="section-header summary">
          <h2>Summary</h2>
          <p>
            Experienced developer proficient in JavaScript, C#, C/C++, Python,
            and Java Core. Skilled in frontend technologies like Angular and
            ReactJS, with expertise in HTML5 and CSS. Familiar with backend
            frameworks such as Node.js and Express.js, along with Python
            frameworks Flask and Django. Also proficient in .Net Core, .Net MVC,
            and experienced in backend development using .Net technology.
            Knowledgeable in database management with MySQL and MongoDB,
            experienced in designing and implementing RESTful APIs. Proficient
            in Git for version control and adept with cloud services like AWS
            and Azure. Ready to leverage skills and experience to contribute
            effectively to projects and teams
          </p>
        </div>

        <div className="section-header">
          <h2>Experience</h2>
          <div className="experience">
            <h3>Frontend Developer</h3>
            <p>
              <strong>Chaperone</strong> | 08/2023 - Present
            </p>
            <ul>
              <li>Developed cross-device compatible websites using ReactJS.</li>
              <li>Leveraged AWS for various project needs.</li>
              <li>
                Enhanced Chaperone's online presence through innovative web
                solutions.
              </li>
              <li>Contributed to UI/UX design initiatives.</li>
              <li>
                Collaborated closely with the team on designing and backend
                development.
              </li>
            </ul>
          </div>

          {/* Add other experiences similarly */}
        </div>

        <div className="section-header">
          <h2>Projects</h2>
          <div className="project">
            <h3>Kryptogram</h3>
            <p>
              Developed a blockchain-based web application enabling users to
              connect their wallets for crypto transactions.
            </p>
            <p>
              Implemented using HTML, CSS, ReactJS, and Ethereum blockchain
              technology.
            </p>
            <p>
              Facilitated Ether transactions and provided real-time updates on
              blockchain news and exchange rates.
            </p>
          </div>

          {/* Add other projects similarly */}
        </div>

        <div className="section-header">
          <h2>Skills</h2>
          <div className="skill">
            <p>
              <strong>Programming Languages:</strong> JavaScript, C#, C/C++,
              Python, Java Core
            </p>
            <p>
              <strong>Frontend Technologies:</strong> Angular, ReactJS, HTML5,
              CSS
            </p>
            {/* Add other skills similarly */}
          </div>
        </div>

        <div className="section-header">
          <h2>Languages</h2>
          <div className="languages">
            <p>English, Hindi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
