import React from 'react';

import styles from 'styled-components';

// Images
import dog from "../assets/images/zodiac-icons/dog.png";
import dragon from "../assets/images/zodiac-icons/dragon.png";
import goat from "../assets/images/zodiac-icons/goat.png";
import horse from "../assets/images/zodiac-icons/horse.png";
import monkey from "../assets/images/zodiac-icons/monkey.png";
import ox from "../assets/images/zodiac-icons/ox.png";
import pig from "../assets/images/zodiac-icons/pig.png";
import rabbit from "../assets/images/zodiac-icons/rabbit.png";
import rat from "../assets/images/zodiac-icons/rat.png";
import rooster from "../assets/images/zodiac-icons/rooster.png";
import snake from "../assets/images/zodiac-icons/snake.png";
import tiger from "../assets/images/zodiac-icons/tiger.png";

export default function Zodiac() {
  let zodiacIcons = [
    dog,
    dragon,
    goat,
    horse,
    monkey,
    ox,
    pig,
    rabbit,
    rat,
    rooster,
    snake,
    tiger].map(image => {
      return <img key={image} alt="" src={image} className="zodiac-responsive" />
    });
  return (
    <div className="zodiac-container">
      {zodiacIcons}
    </div>
  );
}