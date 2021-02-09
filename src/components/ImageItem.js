import React from 'react';

export default function ImageItem(props) {
  return (
    <div className="image-item">
      <p className="name">{props.name}</p>
      <img className="image" alt="" src={props.image} />
      <p className="year">{props.year}</p>
    </div>
  );
}