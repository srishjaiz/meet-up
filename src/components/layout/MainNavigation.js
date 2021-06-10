import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Create New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">Favorite Meetups</Link>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
