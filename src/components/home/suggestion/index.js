import React from "react";

import Label from "../../ui/label";
import "./styles.scss";

const suggestion = ({
  suggestionNumber,
  suggestionHeading,
  suggestionText,
  suggestionLabel,
  suggestionComments,
}) => {
  return (
    <div className="suggestion">
      <div className="suggestion-number">
        <i className="fas fa-chevron-up"></i>
        <span>{suggestionNumber}</span>
      </div>

      <div className="suggestion-details">
        <h3>{suggestionHeading}</h3>
        <p>{suggestionText}</p>

        <Label>{suggestionLabel}</Label>
      </div>

      <div className="suggestions-comments">
        <i className="fas fa-comment"></i>
        <span className={`${suggestionComments === 0 ? "muted" : ""}`}>
          {suggestionComments}
        </span>
      </div>
    </div>
  );
};

export default suggestion;
