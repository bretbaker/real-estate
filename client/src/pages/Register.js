import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import HeadNav1 from '../components/HeadNav1';
import FootNav from '../components/FootNav';

const Register = ({ page, setPage }) => {
  useEffect(() => {
    if (page !== 'register') setPage('register');
    // console.log(page);
  }, [page, setPage]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     setAlert('Passwords do not match', 'danger');
  //   } else {
  //     register({ name, email, password });
  //   }
  // };

  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }

  return (
    <Fragment>
      <HeadNav1 page={page} />
      <div className='page-container'>
        <div className='auth-form-container'>
          <h1 className='sign-up-header-1'>Sign Up</h1>
          <p className='sign-up-header-2'>
            <i className='fas fa-user'></i> Create Your Account
          </p>
          <form className='form'>
            <input
              className='form-input-text'
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              // required
            />
            <input
              className='form-input-text'
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              // required
            />
            <input
              className='form-input-text'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              minLength='6'
              onChange={e => onChange(e)}
              // required
            />
            <input
              className='form-input-text'
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              value={password2}
              onChange={e => onChange(e)}
              // required
            />
            <input type='submit' className='register-btn' value='Register' />
          </form>
          <p className='my-1'>
            Already have an account?{' '}
            <Link to='/' className='sign-in-link'>
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <FootNav page={page} />
    </Fragment>
  );
};

Register.propTypes = {
  page: PropTypes.string,
  setPage: PropTypes.func.isRequired
};

export default Register;
