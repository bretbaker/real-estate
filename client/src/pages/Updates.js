import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import FootNav from '../components/FootNav';

const Updates = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'updates') setPage('updates');
    // console.log(page);
  }, [page, setPage]);

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <FootNav page={page} />
    </Fragment>
  );
};

Updates.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default Updates;
