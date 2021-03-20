import React from 'react';

import 'styles/GlobalStyles.css';

export default function Backdrop(props) {
  return (
      <div className="backdrop" onClick={props.click}/>
  )
}