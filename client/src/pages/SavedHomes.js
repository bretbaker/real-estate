import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import FootNav from '../components/FootNav';

const SavedHomes = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'saved-homes') setPage('saved-homes');
  }, [page, setPage]);

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <div className='unauth-saved-homes-bg'></div>
      <div className='unauth-ol'>
        <div className='unauth-head-space'></div>
        <div className='unauth-body'>
          <i className='far fa-heart fa-3x'></i>
          <h1 className='unauth-header'>
            Save your
            <br />
            favorite homes
          </h1>
          <p className='unauth-desc'>
            Sign up to save your favorite homes and get
            <br />
            instant alerts when they're updated.
          </p>
          <button className='unauth-btn'>Create an account</button>
        </div>
        <div className='unauth-foot'>
          <p>
            <Link to='/' className='unauth-login-link'>
              Already saved a home? Sign in now.
            </Link>
          </p>
        </div>
      </div>
      <FootNav page={page} />
    </Fragment>
  );
};

SavedHomes.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default SavedHomes;
