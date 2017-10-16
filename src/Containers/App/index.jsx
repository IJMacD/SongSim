import React, { Component } from 'react';
import { Display3, Content } from 'react-mdc-web';

import ImageGrid from '../../Components/ImageGrid';

import styles from './style.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      lyrics: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (e) {
    this.setState({ lyrics: e.target.value });
  }

  render () {
    const lyrics = this.state.lyrics;
    const tokens = lyrics.split(/\s+/).map(w => w.replace(/[^\w]/g, "").toLowerCase()).filter(w => w.length);
    const size = tokens.length;
    const scale = Math.max(1, Math.floor(1000/(size||1)));

    return (
      <div>
        <div className={styles.welcome}>
          <Display3 className="mdc-theme--primary-light">
            Welcome to SongSim
          </Display3>
        </div>
        <Content style={{padding: 15, display: "flex", justifyContent: "space-around"}}>
          <textarea rows={60} cols={60} value={lyrics} onChange={this.handleInput} />
          <ImageGrid
            tokens={tokens}
            size={size}
            style={{
              width: size * scale,
              height: size * scale,
              imageRendering: 'pixelated'
            }}
            theme="color" />
        </Content>
        <div>
          <p>{size} words</p>
        </div>
      </div>
    );
  }
}
