import React, { Component } from 'react';
import { Display3 } from 'react-mdc-web';

import styles from './style.css';

export default class App extends Component {
  render () {
    return (
      <div className={styles.welcome}>
        <Display3 className="mdc-theme--primary-light">
          Welcome to Blank React Project
        </Display3>
      </div>
    );
  }
}
