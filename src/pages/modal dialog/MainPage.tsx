import { useState } from "react";
import { ModalDialog } from "./ModalDialog";
import classes from "./mainPage.module.scss";

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.button}>
      <button onClick={handleClick}>Show Modal</button>
      {isOpen && (
        <ModalDialog isOpen={isOpen} onClose={handleClose} title="Modal Dialog">
          TypeScript is a superset of JavaScript that adds static typing to the
          language. It helps developers catch errors early by checking types
          during development. TypeScript improves code readability and
          maintainability with clear type annotations. It compiles down to plain
          JavaScript that runs in any browser or environment. Many modern
          frameworks like React support TypeScript for safer and more robust
          code.
        </ModalDialog>
      )}
    </div>
  );
};
