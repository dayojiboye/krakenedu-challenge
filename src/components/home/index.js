import React from "react";

import Suggestion from "./suggestion";
import "./styles.scss";

const homePage = () => {
  const suggestions = [
    {
      suggestionNumber: 112,
      suggestionHeading: "Add tags for solutions",
      suggestionText:
        "Easier to search for solutions based on a specific stack.",
      suggestionLabel: "Enhancement",
      suggestionComments: 2,
    },
    {
      suggestionNumber: 99,
      suggestionHeading: "Add a dark theme option",
      suggestionText:
        "It would help people with light sensitivities and who prefer dark mode.",
      suggestionLabel: "Feature",
      suggestionComments: 4,
    },
    {
      suggestionNumber: 65,
      suggestionHeading: "Q&A within the challenge hubs",
      suggestionText: "Challenge specific Q&A would make for easy reference.",
      suggestionLabel: "Feature",
      suggestionComments: 1,
    },
    {
      suggestionNumber: 51,
      suggestionHeading: "Allow image/video upload to feedback",
      suggestionText:
        "Images and screencasts can enhance comments on solutions.",
      suggestionLabel: "Enhancement",
      suggestionComments: 2,
    },
    {
      suggestionNumber: 42,
      suggestionHeading: "Ability to follow others",
      suggestionText:
        "Stay updated on comments and solutions other people post.",
      suggestionLabel: "Feature",
      suggestionComments: 3,
    },
    {
      suggestionNumber: 3,
      suggestionHeading: "Preview images not loading",
      suggestionText:
        "Challenge preview images are missing when you apply a filter.",
      suggestionLabel: "Bug",
      suggestionComments: 0,
    },
  ];

  return (
    <div className="homepage">
      {suggestions.map((item) => {
        return <Suggestion key={item.suggestionHeading} {...item}></Suggestion>;
      })}
    </div>
  );
};

export default homePage;
