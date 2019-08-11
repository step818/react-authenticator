import React from 'react';

import Auth from '../src/components/Auth/Auth'
import classes from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Auth />
      </div>
    );
  }
}

export default App;
