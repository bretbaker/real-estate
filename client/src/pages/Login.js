import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Login = ({ page, setPage }) => {
  useEffect(() => {
    setPage('login');
    console.log(page);
  }, [page, setPage]);

  return <div>Hello World</div>;
};

Login.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default Login;
