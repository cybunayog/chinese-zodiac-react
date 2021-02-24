import React from 'react';

// Import Styles & images
import 'styles/GlobalStyles.css'
import style from 'styled-components';

import image from '../assets/images/ChineseZodiacBanner.jpg';

export default function HomeContent() {
  return (
    <div className="home-content">
      <h1 className="home-content-title">A Code Demonstration for PHP in React.js</h1>
      <img
        className="home-bg"
        src={image}
      />
      
    </div>
  );
}