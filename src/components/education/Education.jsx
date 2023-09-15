//import React from "react";

export default function Education() {
  return (
    <div>
      <article>
        {/* Educational background */}
        <fieldset id="Education">
          <legend>
            <h2>Education</h2>
          </legend>

          <div className="education-item">
            <h3>Sterkrevier Combined School</h3>
            <p>2005</p>
            <p>Grade 12</p>
            <p>
              English, Sepedi, Afrikaans, Mathematics, Physical Science,
              Biology, History.
            </p>
          </div>

          <div className="education-item">
            <h3>Central Johannesburg College (CJC)</h3>
            <p>2009</p>
            <p>N1-N6</p>
            <p>Civil Engineering</p>
          </div>

          <div className="education-item">
            <p>December 2022</p>
            <h3>
              Programming Fundamentals{" "}
              <a href="https://www.codespace.co.za/">Codespace</a>
            </h3>
          </div>

          <div className="education-item">
            <p>March 2023</p>
            <h3>
              Intro to Web <a href="https://www.codespace.co.za/">Codespace</a>
            </h3>
          </div>
        </fieldset>
      </article>
    </div>
  );
}
