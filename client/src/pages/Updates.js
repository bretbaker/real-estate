import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import FootNav from '../components/FootNav';

const Updates = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'updates') setPage('updates');
  }, [page, setPage]);

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <div className='unauth-updates-bg'></div>
      <div className='unauth-ol'>
        <div className='unauth-head-space'></div>
        <div className='unauth-body'>
          <i className='fas fa-edit fa-3x'></i>
          <h1 className='unauth-header'>Save your search</h1>
          <p className='unauth-desc'>
            Sign up to save searches and get updates on new
            <br />
            listings and price cuts.
          </p>
          <button className='unauth-btn'>Create an account</button>
        </div>
        <div className='unauth-foot'>
          <p>
            <Link to='/' className='unauth-login-link'>
              Already saved a search? Sign in now.
            </Link>
          </p>
        </div>
      </div>
      <FootNav page={page} />
    </Fragment>
  );
};

Updates.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default Updates;
