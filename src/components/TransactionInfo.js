import React from 'react';

let TransactionInfo = ({ data }) => {
  return (
    <div className='transaction-info-root'>
      <div className='row text-center'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Version</h3>
          <small>{data.ver ? data.ver : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Weight</h3>
          <small>{data.weight ? data.weight : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>VIN Size</h3>
          <small>{data.vin_sz ? data.vin_sz : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>VOUT Size</h3>
          <small>{data.vout_sz ? data.vout_sz : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Size</h3>
          <small>{data.size ? data.size : 'N/A'}</small>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
          <h3>Time</h3>
          <small>{data.time ? data.time : 'N/A'}</small>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfo;
