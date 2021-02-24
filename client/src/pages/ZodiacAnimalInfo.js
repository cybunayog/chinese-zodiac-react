import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

export default function ZodiacAnimalInfo(props) {
  // parses info about the animal dynamically
  let location = useLocation();

  const [image] = useState(location.state.data.photo);
  const [name] = useState(location.state.data.text);
  const [years] = useState(location.state.data.year);

  return (
    <div className="zodiac-animal-info-container">
      <img className="zodiac-animal-info-img" src={image} />
      <p className="zodiac-animal-info-name">{name}</p>
      {/* <p className="zodiac-animal-info-description">{name}</p> */}
      {years.map(i => {
        return <p className="zodiac-animal-info-years">{i}</p>
      })}
    </div>
  )
}