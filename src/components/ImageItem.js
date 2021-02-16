import React from 'react';

export default function ImageItem(props) {
  return (
    <div className="image-item">
      <img className="image" alt="" src={props.image} />
      <p className="name">{props.name}</p>
      <p className="year">{props.year}</p>
    </div>
  );
}