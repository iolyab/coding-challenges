import classes from "./modalDialog.module.scss";

export const ModalDialog = ({ isOpen, onClose, title, children }) => {
  return (
    <div className={classes.backLayout}>
      <div className={classes.modal}>
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
