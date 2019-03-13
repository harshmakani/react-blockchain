import React, { Component } from 'react';
import api from '../api/blockchain';
import BlockInfo from './BlockInfo';

class Block extends Component {
  state = {
    data: [],
  };

  constructor(props) {
    super(props);
    this.hash = this.props.match.params.hash;
  }

  componentDidMount() {
    api.get(`rawblock/${this.hash}`).then(r => this.setState({ data: r.data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className='title'>
          <h1>Block</h1>
          <p className='sub-title'>{this.hash}</p>
        </div>
        <div className='list-group'>
          <BlockInfo data={data} />
        </div>
      </div>
    );
  }
}

export default Block;
