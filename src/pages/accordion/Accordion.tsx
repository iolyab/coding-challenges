import { useState } from "react";
import classes from "./accordion.module.scss";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const items = [
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  const handleClick = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };
  return (
    <div className={classes.accordion}>
      {items.map((item, id) => (
        <div key={id}>
          <div className={classes.title} onClick={() => handleClick(id)}>
            <button className={classes.accordionItemTitle} type="button">
              {item.title}
            </button>
            <span
              className={`${classes.accordionIcon} ${
                isOpen === id ? classes["accordionIcon--rotated"] : ""
              }`}
              aria-hidden="true"
            ></span>
          </div>
          {isOpen === id && <p className={classes.content}>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};
