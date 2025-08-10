import { useState } from "react";
import classes from "./tabs.module.scss";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 2,
      label: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      id: 3,
      label: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  return (
    <div className={classes.tabsLayout}>
      <div className={classes.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            onClick={() => setActiveTab(tab.id)}
            className={`${classes.tabButton} ${
              activeTab === tab.id ? classes.active : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map(
          (tab) => activeTab === tab.id && <p key={tab.id}>{tab.content}</p>
        )}
      </div>
    </div>
  );
};
