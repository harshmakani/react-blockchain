import React, { Component } from 'react';
import api from '../api/blockchain';
import TransactionInfo from './TransactionInfo';

class Transaction extends Component {
  state = {
    data: [],
  };
  constructor(props) {
    super(props);
    this.hash = this.props.match.params.hash;
  }

  componentDidMount() {
    api.get(`rawtx/${this.hash}`).then(r => this.setState({ data: r.data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className='transaction-root'>
        <div className='title'>
          <h1>Transaction</h1>
          <p className='sub-title'>{this.hash}</p>
        </div>
        <div className='list-group'>
          <TransactionInfo data={data} />
        </div>
      </div>
    );
  }
}

export default Transaction;
