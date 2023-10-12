//import React from "react";
import React from "react";
import "./About.css";
import Me from "../../Asset/me-about.png";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faGit,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section id="about">
      {/* ... (rest of your code) */}
      <div className="about_content">
        <div className="about_card">
          <article className="about_card">
            <FaAward className="about_icon" />
            {/* ... (rest of your code) */}
            
            <h5>Languages</h5>
            <div className="iconContainer">
              <a href="#" className="iconLinks">
                <FontAwesomeIcon icon={faHtml5} />
              </a>

              <a href="#" className="iconLinks">
                <FontAwesomeIcon icon={faCss3} />
              </a>

              <a href="#" className="iconLinks">
                <FontAwesomeIcon icon={faJs} />
              </a>
            </div>

            <h5>Frameworks</h5>
            <div className="iconContainer">
              <a href="#" className="iconLinks">
                <FontAwesomeIcon icon={faReact} />
              </a>

              <a href="#" className="iconLinks">
                <FontAwesomeIcon icon={faNodeJs} />
              </a>
            </div>
          </article>
            </div>
          </article>

          <article className="about_card">
            <FaUsers className="about_icon" />
            <h5>Clients</h5>
            <small>Worldwide</small>
          </article>

          <article className="about_card">
            <FaFolderOpen className="about_icon" />
            <h5>Projects</h5>
            <small>Completed</small>
          </article>
        </div>
      </div>
    </section>
  );
}
