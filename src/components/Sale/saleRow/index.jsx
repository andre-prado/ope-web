import React from 'react';

function SaleRow(props) {
  return(
    <div className="sale-rows">
        <div className="sale-title sale-rows-style">{props.title}</div>
        <div className="sale-isbn sale-rows-style">{props.isbn}</div>
        <div className="sale-payment sale-rows-style">{props.payment}</div>
        <div className="sale-hour sale-rows-style">{props.hour}</div>
        <div className="sale-price sale-rows-style">{props.price}</div>
      </div>
  );
}
export default SaleRow;