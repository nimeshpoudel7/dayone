import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav>
        <div className='nav-wrapper green'>
          <Link to='/' className='brand-logo right'>
            Logo
          </Link>
          <ul className='left'>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='#'>aaa</Link>
            </li>
            <li>
              <Link to='#'>ddd</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
