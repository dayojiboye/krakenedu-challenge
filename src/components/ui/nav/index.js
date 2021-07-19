import React from "react";

import Label from "../label";
import "./styles.scss";

const Nav = () => {
  const devLabels = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <nav className="nav">
      <div className="nav__logo">
        <h1>Frontend Mentor</h1>

        <p>Feedback Board</p>
      </div>

      <div className="label-links">
        {devLabels.map((label) => {
          return <Label key={label}>{label}</Label>;
        })}
      </div>

      <div className="roadmap">
        <div className="roadmap__header">
          <h2>Roadmap</h2>

          <a href="/">View</a>
        </div>

        <div className="roadmap__list">
          <ul>
            <li className="planned">
              <div>
                <span>Planned</span>
                <span>2</span>
              </div>
            </li>
            <li className="in-progress">
              <div>
                <span>In-Progress</span>
                <span>3</span>
              </div>
            </li>
            <li className="live">
              <div>
                <span>Live</span>
                <span>1</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
