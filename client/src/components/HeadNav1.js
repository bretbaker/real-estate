import React, { useEffect, Fragment } from 'react';

const HeadNav1 = ({ page }) => {
  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <Fragment>
      {(page === 'login' || page === 'register') && (
        <nav className='head-nav-1'>
          <i className='fas fa-home fa-3x'></i>
        </nav>
      )}
      {page === 'your-home' && (
        <nav className='head-nav-1'>
          <h1>Your Home</h1>
        </nav>
      )}
    </Fragment>
  );
};

export default HeadNav1;
