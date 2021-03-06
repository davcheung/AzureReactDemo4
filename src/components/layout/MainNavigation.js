import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Demo</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Deelnemende bedrijven</Link>
          </li>
          <li>
            <Link to='/recruiters'>Recruiters</Link>
          </li>
          <li>
            <Link to='/about'>Over</Link>
          </li>
          <li>
              <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
