// react
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
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
        </Switch>
      </Fragment>
    </Router>
    // </Provider>
  );
}

export default App;
