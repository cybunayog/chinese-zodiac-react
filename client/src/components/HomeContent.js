import React from 'react';
import TextLoop from 'react-text-loop';

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
      <div className="home-content-description">
        <div className="home-content-introduction">
          What is a Chinese Horoscope/Zodiac?
          <p style={{fontSize: '20px'}}>
            The Chinese zodiac, or shengxiao (/shnng-sshyao/ ‘born resembling'), is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes.
          </p>
          <p style={{fontSize: '20px'}}>
            Chinese zodiac animals have lucky meanings. Chinese people associate each animal sign with certain characteristics. It's believed that people born in a given year have the personality of that year's animal.
          </p>
          <p style={{ fontSize: '20px' }}>
            Each year in the cycle is represented by one animal, and people's sign is determined by their birth year.
          </p>
          What is this year's Chinese horoscope?
          <p style={{ fontSize: '20px' }}>
            In the Chinese Zodiac, the Ox is very hardworking and methodical. 2021 is going to be a year when work will get rewarded, and those zodiac signs who are lucky in terms of money this year will be the ones that will make a considerable effort.
          </p>
        </div>

        
        <div className="home-content-animal">
          In order, the 12 Chinese horoscope animals are: {" "}
          <TextLoop mask={true}>
          <span>Rat</span>
          <span>Ox</span>
          <span>Tiger</span>
          <span>Rabbit</span>
          <span>Dragon</span>
          <span>Snake</span>
          <span>Horse</span>
          <span>Goat</span>
          <span>Monkey</span>
          <span>Rooster</span>
          <span>Dog</span>
          <span>Pig</span>
         </TextLoop>     
        </div>
         
      </div>

    </div>
  );
}