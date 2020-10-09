import React from 'react';

import './styles.css';


function PageTitle(props) {
  return (
    <div className="main-page-title">
      <div className="page-title">
        <div className="title">
          {props.title}
        </div>
        <div className="year">
          {props.year}
        </div>
        <div className="sub-title">
          {props.subtitle}
          {props.children}  
        </div>
      </div>
    </div>
  );
}

export default PageTitle;