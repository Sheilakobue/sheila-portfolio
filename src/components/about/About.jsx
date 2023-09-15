import React from 'react';
import './About.css';
import Me from '../../Asset/me-about.png'
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me.image"></div>
          <img src={Me} alt="About Image" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_card">
          <article className="about_card">
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
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

        <p>
          I am an enthusiastic, resourceful, self-motivated, reliable, responsible and hard-working person. I am adaptable to all challenging
          situations, I can work well both in a team environment as well as using my own initiative. I can work well under pressure and adhere to
          strict deadlines.
        </p>
        <a href="#contact" className="btn btn.primary">
          Let's Talk
        </a>
      </div>
    </section>
  );
}
