import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeadNav1 = ({ page }) => {
  return (
    <Fragment>
      {(page === 'login' || page === 'register') && (
        <nav className='head-nav-1'>
          <i className='fas fa-home fa-3x'></i>
        </nav>
      )}
      {page === 'your-home' && (
        <nav className='head-nav-1'>
          <h1 className='head-nav-1-text'>Your Home</h1>
        </nav>
      )}
      {page === 'saved-homes' && (
        <nav className='head-nav-1'>
          <h1 className='head-nav-1-text'>Saved Homes</h1>
        </nav>
      )}
      {page === 'updates' && (
        <nav className='head-nav-1'>
          <h1 className='head-nav-1-text'>Saved Searches</h1>
        </nav>
      )}
      {page === 'search-map' && (
        <nav className='head-nav-1'>
          <Link className='map-list-toggle' to='/search-list'>
            List
          </Link>
          <input
            className='search-input-text'
            type='text'
            placeholder='Search location...'
          />
          <i className='fas fa-location-arrow location-arrow'></i>
        </nav>
      )}
      {page === 'search-list' && (
        <nav className='head-nav-1'>
          <Link className='map-list-toggle' to='/search-map'>
            Map
          </Link>
          <input
            className='search-input-text'
            type='text'
            placeholder='Search location...'
          />
          <i className='fas fa-location-arrow location-arrow'></i>
        </nav>
      )}
    </Fragment>
  );
};

export default HeadNav1;
