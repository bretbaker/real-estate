import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FootNav = ({ page }) => {
  return (
    <Fragment>
      {(page === 'login' || page === 'register') && (
        <nav className='foot-nav'>
          <Link to='/search-map' className='foot-nav-btn'>
            <i className='fas fa-search fa-lg'></i>
            <p className='foot-nav-btn-text'>Search</p>
          </Link>
          <Link to='/updates' className='foot-nav-btn'>
            <i className='fas fa-edit fa-lg'></i>
            <p className='foot-nav-btn-text'>Updates</p>
          </Link>
          <Link to='/saved-homes' className='foot-nav-btn'>
            <i className='far fa-heart fa-lg'></i>
            <p className='foot-nav-btn-text'>Saved Homes</p>
          </Link>
          <Link to='/your-home' className='foot-nav-btn'>
            <i className='fas fa-home fa-lg'></i>
            <p className='foot-nav-btn-text'>Your Home</p>
          </Link>
          <Link to='/' className='foot-nav-btn blue'>
            <i className='fas fa-user fa-lg'></i>
            <p className='foot-nav-btn-text'>Account</p>
          </Link>
        </nav>
      )}
      {page === 'your-home' && (
        <nav className='foot-nav'>
          <Link to='/search-map' className='foot-nav-btn'>
            <i className='fas fa-search fa-lg'></i>
            <p className='foot-nav-btn-text'>Search</p>
          </Link>
          <Link to='/updates' className='foot-nav-btn'>
            <i className='fas fa-edit fa-lg'></i>
            <p className='foot-nav-btn-text'>Updates</p>
          </Link>
          <Link to='/saved-homes' className='foot-nav-btn'>
            <i className='far fa-heart fa-lg'></i>
            <p className='foot-nav-btn-text'>Saved Homes</p>
          </Link>
          <Link to='/your-home' className='foot-nav-btn blue'>
            <i className='fas fa-home fa-lg'></i>
            <p className='foot-nav-btn-text'>Your Home</p>
          </Link>
          <Link to='/' className='foot-nav-btn'>
            <i className='fas fa-user fa-lg'></i>
            <p className='foot-nav-btn-text'>Account</p>
          </Link>
        </nav>
      )}
      {page === 'saved-homes' && (
        <nav className='foot-nav'>
          <Link to='/search-map' className='foot-nav-btn'>
            <i className='fas fa-search fa-lg'></i>
            <p className='foot-nav-btn-text'>Search</p>
          </Link>
          <Link to='/updates' className='foot-nav-btn'>
            <i className='fas fa-edit fa-lg'></i>
            <p className='foot-nav-btn-text'>Updates</p>
          </Link>
          <Link to='/saved-homes' className='foot-nav-btn blue'>
            <i className='far fa-heart fa-lg'></i>
            <p className='foot-nav-btn-text'>Saved Homes</p>
          </Link>
          <Link to='/your-home' className='foot-nav-btn'>
            <i className='fas fa-home fa-lg'></i>
            <p className='foot-nav-btn-text'>Your Home</p>
          </Link>
          <Link to='/' className='foot-nav-btn'>
            <i className='fas fa-user fa-lg'></i>
            <p className='foot-nav-btn-text'>Account</p>
          </Link>
        </nav>
      )}
      {page === 'updates' && (
        <nav className='foot-nav'>
          <Link to='/search-map' className='foot-nav-btn'>
            <i className='fas fa-search fa-lg'></i>
            <p className='foot-nav-btn-text'>Search</p>
          </Link>
          <Link to='/updates' className='foot-nav-btn blue'>
            <i className='fas fa-edit fa-lg'></i>
            <p className='foot-nav-btn-text'>Updates</p>
          </Link>
          <Link to='/saved-homes' className='foot-nav-btn'>
            <i className='far fa-heart fa-lg'></i>
            <p className='foot-nav-btn-text'>Saved Homes</p>
          </Link>
          <Link to='/your-home' className='foot-nav-btn'>
            <i className='fas fa-home fa-lg'></i>
            <p className='foot-nav-btn-text'>Your Home</p>
          </Link>
          <Link to='/' className='foot-nav-btn'>
            <i className='fas fa-user fa-lg'></i>
            <p className='foot-nav-btn-text'>Account</p>
          </Link>
        </nav>
      )}
      {(page === 'search-map' || page === 'search-list') && (
        <nav className='foot-nav'>
          <Link to='/search-map' className='foot-nav-btn blue'>
            <i className='fas fa-search fa-lg'></i>
            <p className='foot-nav-btn-text'>Search</p>
          </Link>
          <Link to='/updates' className='foot-nav-btn'>
            <i className='fas fa-edit fa-lg'></i>
            <p className='foot-nav-btn-text'>Updates</p>
          </Link>
          <Link to='/saved-homes' className='foot-nav-btn'>
            <i className='far fa-heart fa-lg'></i>
            <p className='foot-nav-btn-text'>Saved Homes</p>
          </Link>
          <Link to='/your-home' className='foot-nav-btn'>
            <i className='fas fa-home fa-lg'></i>
            <p className='foot-nav-btn-text'>Your Home</p>
          </Link>
          <Link to='/' className='foot-nav-btn'>
            <i className='fas fa-user fa-lg'></i>
            <p className='foot-nav-btn-text'>Account</p>
          </Link>
        </nav>
      )}
    </Fragment>
  );
};

export default FootNav;
