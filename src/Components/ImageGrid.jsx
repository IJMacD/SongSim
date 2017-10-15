import React from 'react';

export default class ImageGrid extends React.Component {
  componentDidMount() {
    this.ctx = this.ref.getContext("2d");
    this.frame = 0;
    this.doImperitiveStuff();
  }

  componentDidUpdate() {
    this.doImperitiveStuff();
  }

  doImperitiveStuff () {
    const { size, tokens } = this.props;
    const ctx = this.ctx;

    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        ctx.fillStyle = tokens[i] === tokens[j] ? "#000000" : "#ffffff";
        ctx.fillRect(i, j, 1, 1);
      }
    }
  }

  render () {
    const { size, style } = this.props;
    return <canvas style={style} ref={node => this.ref = node} width={size} height={size} />
  }
}
