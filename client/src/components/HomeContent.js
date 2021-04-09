import React from 'react';

// Import Styles & images
import 'styles/GlobalStyles.css'

import image from '../assets/images/ChineseZodiacBanner.jpg';

export default function HomeContent() {
  return (
    <div className="home-content">
      <img
        className="home-bg"
        src={image}
      />
      
    </div>
  );
}