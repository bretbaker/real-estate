import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import FootNav from '../components/FootNav';

const Login = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'login') setPage('login');
    // console.log(page);
  }, [page, setPage]);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    // login(email, password);
  };

  // redirect if logged in
  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <div className='login-form-parent-container'>
        <div className='login-form-child-container'>
          <h1 className='sign-in-header-1'>Sign In</h1>
          <p className='sign-in-header-2'>
            <i className='fas fa-user'></i> Sign Into Your Account
          </p>
          <form className='form' onSubmit={e => onSubmit(e)}>
            <input
              className='form-input-text'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
            <input
              className='form-input-text'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              minLength='6'
              onChange={e => onChange(e)}
              required
            />
            <input type='submit' className='login-btn' value='Login' />
          </form>
          <p className='my-1'>
            Don't have an account?{' '}
            <Link to='/register' className='sign-up-link'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <FootNav page={page} />
    </Fragment>
  );
};

Login.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default Login;
