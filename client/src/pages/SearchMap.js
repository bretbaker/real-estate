import React, { useEffect, useState, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import HeadNav2 from '../components/HeadNav2';
import FootNav from '../components/FootNav';

const SearchMap = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'search-map') setPage('search-map');
  }, [page, setPage]);

  const [center, setCenter] = useState({ lat: 34.052235, lng: -118.243683 });
  const [zoom, setZoom] = useState(12);

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <HeadNav2 />
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
      </div>
      <FootNav page={page} />
    </Fragment>
  );
};

SearchMap.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default SearchMap;
