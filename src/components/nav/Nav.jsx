import "./Nav.css";
import { FaHome, FaUserAlt, FaBookReader } from "react-icons/fa";
import { RiServiceFill, RiMessage2Fill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        title="Home"
      >
        <FaHome />
      </Link>

      <Link
        to="/About"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        title="About"
      >
        <FaUserAlt />
      </Link>

      <Link
        to="/Experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        title="Experience"
      >
        <FaBookReader />
      </Link>

      <Link
        to="/Services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        title="Services"
      >
        <RiServiceFill />
      </Link>

      <Link
        to="/Contacts"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        title="Contact"
      >
        <RiMessage2Fill />
      </Link>
    </nav>
  );
}
