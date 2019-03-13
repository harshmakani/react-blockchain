import React from 'react';
import { Link } from 'react-router-dom';

let Header = () => {
  return (
    <div>
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Home
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link to='/latest-block' className='nav-link'>
                  Latest Block
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
