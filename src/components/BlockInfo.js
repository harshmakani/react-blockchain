import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Helper function to render list of transactions
 * @param {Array} data | Transaction data
 */
let renderTranscations = data => {
  return data.map(transaction => {
    return (
      <Link
        to={`/transaction/${transaction.hash}`}
        className='list-group-item list-group-item-action flex-column align-items-start'
        key={transaction.hash}
      >
        <div className='d-flex w-100 justify-content-between mb-3'>
          <h5 className='mb-1'>Hash</h5>
          <small>{transaction.hash}</small>
        </div>
        <div className='d-flex w-100 justify-content-between'>
          <h5 className='mb-1'>Fee</h5>
          <small>{transaction.fee}</small>
          <h5 className='mb-1'>Time</h5>
          <small>{transaction.time}</small>
          <h5 className='mb-1'>Version</h5>
          <small>{transaction.ver}</small>
        </div>
      </Link>
    );
  });
};

/**
 *
 * React functional component to render Block information
 */
let BlockInfo = ({ data }) => {
  return (
    <div className='block-info-root'>
      <div className='row text-center'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Block Index</h3>
          <small>{data.block_index ? data.block_index : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Bits</h3>
          <small>{data.bits ? data.bits : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Fee</h3>
          <small>{data.fee ? data.fee : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Height</h3>
          <small>{data.height ? data.height : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Size</h3>
          <small>{data.size ? data.size : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Number of Transactions</h3>
          <small>{data.n_tx ? data.n_tx : 'N/A'}</small>
        </div>
      </div>
      {data.n_tx > 0 ? (
        <div className='mt-5 text-center'>
          <h3>Transactions</h3>
          {renderTranscations(data.tx ? data.tx : [])}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default BlockInfo;
