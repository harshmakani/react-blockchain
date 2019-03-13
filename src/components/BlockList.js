import React, { Component } from 'react';
import api from '../api/blockchain';
import { Link } from 'react-router-dom';

class BlockList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    api.get('blocks').then(r => this.setState({ data: r.data }));
  }
  /**
   * Helper function to render list of blocks
   */
  renderBlocks = () => {
    const blocks = this.state.data.blocks ? this.state.data.blocks : [];
    return blocks.map(block => (
      <Link
        to={`/block/${block.hash}`}
        className='list-group-item list-group-item-action flex-column align-items-start'
        key={block.hash}
      >
        <div className='d-flex w-100 justify-content-between mb-3'>
          <h5 className='mb-1'>Hash</h5>
          <small>{block.hash}</small>
        </div>
        <div className='d-flex w-100 justify-content-between'>
          <h5 className='mb-1'>Height</h5>
          <small>{block.height ? block.height : 'N/A'}</small>
          <h5 className='mb-1'>Time</h5>
          <small>{block.time ? block.time : 'N/A'}</small>
          <h5 className='mb-1'>Main Chain</h5>
          <small className='text-center'>
            {block.main_chain ? (
              <i className='material-icons text-success'>done</i>
            ) : (
              <i className='material-icons text-danger'>clear</i>
            )}
          </small>
        </div>
      </Link>
    ));
  };

  render() {
    return (
      <div>
        <div className='title'>
          <h1>List of Today's Blocks</h1>
        </div>
        <div className='list-group'>{this.renderBlocks()}</div>
      </div>
    );
  }
}

export default BlockList;
