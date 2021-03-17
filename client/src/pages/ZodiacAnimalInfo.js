import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

export default function ZodiacAnimalInfo(props) {
  // parses info about the animal dynamically
  let location = useLocation();

  const [image] = useState(location.state.data.photo);
  const [name] = useState(location.state.data.text);
  const [years] = useState(location.state.data.year);
  const [desc] = useState(location.state.data.desc);

  console.log(location.state.data);

  const renderTableData = () => {
    return years.map((year, i) => {
      return (
        <tr className="zodiac-animal-info-years-element" key={i}>
          <td>{year}</td>
        </tr>
      )
    })
  }


  return (
    <div className="zodiac-animal-info-container">
      <img className="zodiac-animal-info-img" src={image} />
      <p className="zodiac-animal-info-name">{name}</p>
      <p className="zodiac-animal-info-description">{desc}</p>
      <div className="border" />
      <tbody className="zodiac-animal-info-years">
        {renderTableData()}
      </tbody>
    </div>
  );
}