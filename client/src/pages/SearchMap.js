import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import HeadNav2 from '../components/HeadNav2';
import FootNav from '../components/FootNav';

const SearchMap = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'search-map') setPage('search-map');
  }, [page, setPage]);

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <HeadNav2 />
      <FootNav page={page} />
    </Fragment>
  );
};

SearchMap.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default SearchMap;
