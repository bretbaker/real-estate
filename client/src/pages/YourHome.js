import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import FootNav from '../components/FootNav';

const YourHome = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'your-home') setPage('your-home');
  }, [page, setPage]);

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <div className='unauth-your-home-bg'></div>
      <div className='unauth-ol'>
        <div className='unauth-head-space'></div>
        <div className='unauth-body'>
          <i className='fas fa-home fa-3x'></i>
          <h1 className='unauth-header'>
            Do you own
            <br />
            your home?
          </h1>
          <p className='unauth-desc'>
            Claim your home to track its value, see local
            <br />
            market activity and more.
          </p>
          <button className='unauth-btn'>Use your location</button>
          <button className='unauth-btn'>Search for your home</button>
        </div>
        <div className='unauth-foot'>
          <p>
            <Link to='/' className='unauth-login-link'>
              Already claimed a home? Sign in now.
            </Link>
          </p>
        </div>
      </div>
      <FootNav page={page} />
    </Fragment>
  );
};

YourHome.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default YourHome;
