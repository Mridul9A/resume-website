// Resume.jsx

import React from "react";
import "../Style/styleResume.css";

const Resume = () => {
  return (
    <div id="resume-content">
      <div className="container">
        <h1>Mridul</h1>

        <div className="section-header">
          <h2>Summary</h2>
          <p>
            Experienced developer proficient in HTML, CSS, JavaScript,
            AngularJS, and ReactJS. Known for crafting engaging web interfaces
            with a focus on user experience. Dedicated to delivering exceptional
            results and designing visually appealing, highly functional
            websites. Ready to contribute effectively to any team or project
            with innovative solutions and a commitment to success.
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
