import React from 'react';

import ImageItem from 'components/ImageItem';
// Images
import Dog from "../assets/images/zodiac-icons/dog.png";
import Dragon from "../assets/images/zodiac-icons/dragon.png";
import Goat from "../assets/images/zodiac-icons/goat.png";
import Horse from "../assets/images/zodiac-icons/horse.png";
import Monkey from "../assets/images/zodiac-icons/monkey.png";
import Ox from "../assets/images/zodiac-icons/ox.png";
import Pig from "../assets/images/zodiac-icons/pig.png";
import Rabbit from "../assets/images/zodiac-icons/rabbit.png";
import Rat from "../assets/images/zodiac-icons/rat.png";
import Rooster from "../assets/images/zodiac-icons/rooster.png";
import Snake from "../assets/images/zodiac-icons/snake.png";
import Tiger from "../assets/images/zodiac-icons/tiger.png";

  const zodiacIcons = [
    {
      photo: Rat,
      text: "Rat",
      year: ["1912", "1924", "1936", "1948", "1960", "1972", "1984", "1996", "2008", "2020"]
    },
    {
      photo: Ox,
      text: "Ox",
      year: ["1913", "1925", "1937", "1949", "1961", "1973", "1985", "1997", "2009", "2021"]
    },
    {
      photo: Tiger,
      text: "Tiger",
      year: ["1914", "1926", "1938", "1950", "1962", "1974", "1986", "1998", "2010"] 
    },
    {
      photo: Rabbit,
      text: "Rabbit",
      year: ["1915", "1927", "1939", "1951", "1963", "1975", "1987", "1999", "2011"]
    },
    {
      photo: Dragon,
      text: "Dragon",
      year: ["1916", "1928", "1940", "1952", "1964", "1976", "1988", "2000", "2012"]
    },
    {
      photo: Snake,
      text: "Snake",
      year: ["1917", "1929", "1941", "1953", "1965", "1977", "1989", "2001", "2013"]
    },
    {
      photo: Horse,
      text: "Horse",
      year: ["1918", "1930", "1942", "1954", "1966", "1978", "1990", "2002", "2014"]
    },
    {
      photo: Goat,
      text: "Goat",
      year: ["1919", "1931", "1943", "1955", "1967", "1979", "1991", "2003", "2015"]
    },
    {
      photo: Monkey,
      text: "Monkey",
      year: ["1920", "1932", "1944", "1956", "1968", "1980", "1992", "2004", "2016"]
    },
    {
      photo: Rooster,
      text: "Rooster",
      year: ["1921", "1933", "1945", "1957", "1969", "1981", "1993", "2005", "2017"]
    },
    {
      photo: Dog,
      text: "Dog",
      year: ["1922", "1934", "1946", "1958", "1970", "1982", "1994", "2006", "2018"]
    },
    {
      photo: Pig,
      text: "Pig",
      year: ["1923", "1935", "1947", "1959", "1971", "1983", "1995", "2007", "2019"]
    }
  ];

export default function Zodiac() {

  return (
    <div className="zodiac-container">
      {zodiacIcons.map(e =>
        <ImageItem
          name={e.text}
          image={e.photo}
        />
      )}
      <div>
        {zodiacIcons.map(e => {
          return <p>{e.year}</p>
        })}
      </div>
    </div>
  );
}