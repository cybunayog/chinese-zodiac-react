import React from 'react';

import CardItem from 'components/CardItem';
import ZodiacIcons from 'utils/ZodiacIcons';

export default function Zodiac() {

  return (
    <div className="grid">
      {ZodiacIcons.map(e =>
      <CardItem
        name={e.text}
        image={e.photo} 
        id={e.id}
        data={e}
        />
    )}
    </div>
  );
}