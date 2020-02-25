import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import FootNav from '../components/FootNav';

const YourHome = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'your-home') setPage('your-home');
    // console.log(page);
  }, [page, setPage]);

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <a class='updates-background-img'>
        <a class='updates-overlay'>
          <i class='fas fa-home fa-2x updates-main-icon'></i>
          <h1 class='updates-lead'>
            Do you own
            <br />
            your home?
          </h1>
          <p class='updates-body'>
            Claim your home track its value, see local market activity and more.
          </p>
          <button class='updates-create-acct-btn'>Use your location</button>
          <button class='updates-create-acct-btn'>Search for your home</button>
          <a class='updates-login-link' href='#!'>
            Already claimed a home? Sign in now.
          </a>
        </a>
      </a>
      <FootNav page={page} />
    </Fragment>
  );
};

export default YourHome;
