import classes from "./contact.module.scss";

export const ContactForm = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="name">Name:</label>
      <input type="text" required />
      <label htmlFor="email">Email:</label>
      <input type="email" required />
      <label htmlFor="message">Your message:</label>
      <textarea placeholder="Type your message..." required></textarea>
      <input type="submit" value="Send" />
    </form>
  );
};
