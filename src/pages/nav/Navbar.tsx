import { Link } from "react-router-dom";
import classes from "./navbar.module.scss";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/string">String</Link>
        </li>
        <li>
          <Link to="/merge">Merge</Link>
        </li>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/holyGrail">Holy Grail</Link>
        </li>
        <li>
          <Link to="/progressBar">Progress Bar</Link>
        </li>
        <li>
          <Link to="/mortgageCalculator">Mortgage Calculator</Link>
        </li>
        <li>
          <Link to="/tabs">Tabs</Link>
        </li>
        <li>
          <Link to="/dataTable">Data Table</Link>
        </li>
        <li>
          <Link to="/fileExplorer">File Explorer</Link>
        </li>
        <li>
          <Link to="/flightBooker">Flight Booker</Link>
        </li>
        <li>
          <Link to="/likeButton">Like Button</Link>
        </li>
        <li>
          <Link to="/mainPage">Main Page(Modal)</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
