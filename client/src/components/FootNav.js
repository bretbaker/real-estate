import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const FootNav = ({ page }) => {
  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <Fragment>
      {(page === 'login' || page === 'register') && (
        <nav className='foot-nav'>
          <Link to='' className='foot-nav-btn'>
            <i className='fas fa-search fa-lg'></i>
            <p className='foot-nav-btn-text'>Search</p>
          </Link>
          <Link to='' className='foot-nav-btn'>
            <i className='fas fa-edit fa-lg'></i>
            <p className='foot-nav-btn-text'>Updates</p>
          </Link>
          <Link to='' className='foot-nav-btn'>
            <i className='far fa-heart fa-lg'></i>
            <p className='foot-nav-btn-text'>Saved Homes</p>
          </Link>
          <Link to='/your-home' className='foot-nav-btn'>
            <i className='fas fa-home fa-lg'></i>
            <p className='foot-nav-btn-text'>Your Home</p>
          </Link>
          <Link to='/login' className='foot-nav-btn blue'>
            <i className='fas fa-angle-double-right fa-lg'></i>
            <p className='foot-nav-btn-text'>More</p>
          </Link>
        </nav>
      )}
    </Fragment>
  );
};

export default FootNav;
