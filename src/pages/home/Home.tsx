import { Link } from "react-router-dom";
import classes from "./home.module.scss";

export default function Home() {
  return (
    <div className={classes.homePage}>
      <h2>Coding Challenges</h2>

      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link to="/counter" className={classes.listDiv}>
            Counter
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/string" className={classes.listDiv}>
            String
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/merge" className={classes.listDiv}>
            Merge
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/accordion" className={classes.listDiv}>
            Accordion
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/contact" className={classes.listDiv}>
            Contact
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/holyGrail" className={classes.listDiv}>
            Holy Grail
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/progressBar" className={classes.listDiv}>
            Progress Bar
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/mortgageCalculator" className={classes.listDiv}>
            Mortgage Calculator
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/tabs" className={classes.listDiv}>
            Tabs
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/dataTable" className={classes.listDiv}>
            Data Table
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/fileExplorer" className={classes.listDiv}>
            File Explorer
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/flightBooker" className={classes.listDiv}>
            Flight Booker
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/likeButton" className={classes.listDiv}>
            Like Button
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link to="/mainPage" className={classes.listDiv}>
            Main Page(Modal)
          </Link>
        </li>
      </ul>
    </div>
  );
}
