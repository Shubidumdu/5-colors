import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import PicUpload from './pages/PicUpload';

const routes = [
  {
    Component: Main,
    path: '/',
  },
  { Component: PicUpload, path: '/upload' },
];

function App() {
  return (
    <div className="App">
      <Router>
        {routes.map(({ Component, path }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </Router>
    </div>
  );
}

export default App;
