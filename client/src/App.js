// react
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Login from './pages/Login';
import Register from './pages/Register';
import YourHome from './pages/YourHome';
import SavedHomes from './pages/SavedHomes';
import Updates from './pages/Updates';
import SearchMap from './pages/SearchMap';
import SearchList from './pages/SearchList';

// redux
// import { Provider } from 'react-redux';
// import store from './store';
// on load functions
// import { loadUser } from './actions/auth';
// import setToken from './utils/setToken';
// style
import './App.css';

// check for token on load
// if (localStorage.token) {
//   setToken(localStorage.token);
// }

function App() {
  const [page, setPage] = useState(null);
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    // <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route
            exact
            path='/'
            render={props => <Login {...props} page={page} setPage={setPage} />}
          />
          <Route
            exact
            path='/register'
            render={props => (
              <Register {...props} page={page} setPage={setPage} />
            )}
          />
          <Route
            exact
            path='/your-home'
            render={props => (
              <YourHome {...props} page={page} setPage={setPage} />
            )}
          />
          <Route
            exact
            path='/saved-homes'
            render={props => (
              <SavedHomes {...props} page={page} setPage={setPage} />
            )}
          />
          <Route
            exact
            path='/updates'
            render={props => (
              <Updates {...props} page={page} setPage={setPage} />
            )}
          />
          <Route
            exact
            path='/search-map'
            render={props => (
              <SearchMap {...props} page={page} setPage={setPage} />
            )}
          />
          <Route
            exact
            path='/search-list'
            render={props => (
              <SearchList {...props} page={page} setPage={setPage} />
            )}
          />
        </Switch>
      </Fragment>
    </Router>
    // </Provider>
  );
}

export default App;
