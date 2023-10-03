//import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <article>
        {/** My experiences */}
        <fieldset id="experience">
          <legend>
            <h3>Experience</h3>
          </legend>

          <div className="experience-item">
            <h3>Statistic South Africa</h3>
            <p>27/12/2021 - 30/07/2022</p>
            <p>Field Operation Officer (FOO)</p>
            <p>
              Coordinate and supervise the work assigned to Fieldworkers and
              Field supervisors, Control visits and refusals from field work
              supervisors
            </p>
          </div>

          <div className="experience-item">
            <h3>Maipi Electrical & Civil Construction</h3>
            <p>01/07/2012 - 12/04/2021</p>
            <p>Office Administrator</p>
            <p>
              Office work: paper works, phone calls, filing, attend meetings,
              attend workshops, research, welcome visitors, data capture, safety
              file updates, tender applications, finance: Invoicing, quotations,
              payroll admin.
            </p>
          </div>

          <div className="experience-item">
            <h3>Edcon Call Centre</h3>
            <p>01/04/2009 - 30/02/2011</p>
            <p>Call Centre Agent</p>
            <p>
              Customer services, collection, inbound and outbound new accounts,
              capturing customers information on Devox
            </p>
          </div>
        </fieldset>
      </article>
    </section>
  );
}
