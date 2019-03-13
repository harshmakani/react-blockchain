import React, { Component } from 'react';
import api from '../api/blockchain';
import BlockInfo from './BlockInfo';

class LatestBlock extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.get('latestblock').then(r => this.setState({ data: r.data }));
  }
  render() {
    const { data } = this.state;
    return (
      <div className='block-root'>
        <div className='starter-template'>
          <h1>Block</h1>
          <p className='lead'>{this.hash}</p>
        </div>
        <div className='list-group'>
          <BlockInfo data={data} />
        </div>
      </div>
    );
  }
}

export default LatestBlock;
