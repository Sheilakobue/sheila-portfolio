import Typical from "react-typical";
import "./Header.css";
import CTA from './CTA'
import ME from '../../Asset/me1.png'
import HeaderSocials from "./HeaderSocials";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sheila Kobue</h1>

        <h5 className="text-light">
            <Typical
               loop={Infinity}
                  steps={[
                    "🌱 Enthusiastic Learner",
                    1500,
                    "💻 Frontend Explorer",
                    1500,
                    "🎨 HTML/CSS Explorer",
                    1500,
                    "📜 JavaScript Apprentice",
                    1500,
                    "⚛️ React Explorer",
                    1500,
                    "🎨 UI/UX Explorer",
                    1500,
                    "🔍 Problem Solver",
                    1500,
                    "🐞 Debugging Detective",
                    1500,
                    "🔄 Version Control Learner",
                    1500,
                    "👓 Code Review Enthusiast",
                    1500,
                  ]}
                />
              </h5>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="My Picture" />
        </div>
        <CTA />

        <a href="#about" className="scroll_down">
          <Link to ="/about">Next</Link>
        </a>
      </div>
      <Nav/>
    </header>
  );
}
