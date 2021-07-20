import React from "react";

import { ReactComponent as IdeaIcon } from "../../../assets/images/idea.svg";
import Select from "../select";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="suggestions">
        <IdeaIcon />
        
        <span>6 Suggestions</span>
      </div>

      <div className="sort">
        <span>Sort by:</span>

        <Select>
          <option>Most Upvotes</option>
        </Select>
      </div>

      <div className="add-feedback">
        <button>
        <i className="fas fa-plus"></i> Add Feedback
        </button>
      </div>
    </header>
  );
};

export default Header;
