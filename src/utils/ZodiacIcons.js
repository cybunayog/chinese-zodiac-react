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

// TODO: find a way to add all of this in a database
const ZodiacIcons = [
  {
    photo: Rat,
    id: '0',
    text: "Rat",
    desc: "Those born under the Chinese Zodiac sign of the Rat are quick-witted, clever, charming, sharp and funny. They have excellent taste, are a good friend and are generous and loyal to others considered part of its pack. Motivated by money, can be greedy, is ever curious, seeks knowledge and welcomes challenges. Compatible with Dragon or Monkey.",
    year: ["1912", "1924", "1936", "1948", "1960", "1972", "1984", "1996", "2008", "2020"]
  },
  {
    photo: Ox,
    id: '1',
    text: "Ox",
    desc: "Another of the powerful Chinese Zodiac signs, the Ox is steadfast, solid, a goal-oriented leader, detail-oriented, hard-working, stubborn, serious and introverted but can feel lonely and insecure. Takes comfort in friends and family and is a reliable, protective and strong companion. Compatible with Snake or Rooster.",
    year: ["1913", "1925", "1937", "1949", "1961", "1973", "1985", "1997", "2009", "2021"]
  },
  {
    photo: Tiger,
    id: '2',
    text: "Tiger",
    desc: "Those born under the Chinese Zodiac sign of the Tiger are authoritative, self-possessed, have strong leadership qualities, are charming, ambitious, courageous, warm-hearted, highly seductive, moody, intense, and they’re ready to pounce at any time. Compatible with Horse or Dog.",
    year: ["1914", "1926", "1938", "1950", "1962", "1974", "1986", "1998", "2010"] 
  },
  {
    photo: Rabbit,
    id: '3',
    text: "Rabbit",
    desc: "Those born under the Chinese Zodiac sign of the Rabbit enjoy being surrounded by family and friends. They’re popular, compassionate, sincere, and they like to avoid conflict and are sometimes seen as pushovers. Rabbits enjoy home and entertaining at home. Compatible with Goat or Pig.",
    year: ["1915", "1927", "1939", "1951", "1963", "1975", "1987", "1999", "2011"]
  },
  {
    photo: Dragon,
    id: '4',
    text: "Dragon",
    desc: "A powerful sign, those born under the Chinese Zodiac sign of the Dragon are energetic and warm-hearted, charismatic, lucky at love and egotistic. They’re natural born leaders, good at giving orders and doing what’s necessary to remain on top. Compatible with Monkey and Rat.",
    year: ["1916", "1928", "1940", "1952", "1964", "1976", "1988", "2000", "2012"]
  },
  {
    photo: Snake,
    id: '5',
    text: "Snake",
    desc: "Those born under the Chinese Zodiac sign of the Snake are seductive, gregarious, introverted, generous, charming, good with money, analytical, insecure, jealous, slightly dangerous, smart, they rely on gut feelings, are hard-working and intelligent. Compatible with Rooster or Ox.",
    year: ["1917", "1929", "1941", "1953", "1965", "1977", "1989", "2001", "2013"]
  },
  {
    photo: Horse,
    id: '6',
    text: "Horse",
    desc: "Those born under the Chinese Zodiac sign of the Horse love to roam free. They’re energetic, self-reliant, money-wise, and they enjoy traveling, love and intimacy. They’re great at seducing, sharp-witted, impatient and sometimes seen as a drifter. Compatible with Dog or Tiger.",
    year: ["1918", "1930", "1942", "1954", "1966", "1978", "1990", "2002", "2014"]
  },
  {
    photo: Goat,
    id: '7',
    text: "Goat",
    desc: "Those born under the Chinese Zodiac sign of the Goat enjoy being alone in their thoughts. They’re creative, thinkers, wanderers, unorganized, high-strung and insecure, and can be anxiety-ridden. They need lots of love, support and reassurance. Appearance is important too. Compatible with Pig or Rabbit.",
    year: ["1919", "1931", "1943", "1955", "1967", "1979", "1991", "2003", "2015"]
  },
  {
    photo: Monkey,
    id: '8',
    text: "Monkey",
    desc: "Those born under the Chinese Zodiac sign of the Monkey thrive on having fun. They’re energetic, upbeat, and good at listening but lack self-control. They like being active and stimulated and enjoy pleasing self before pleasing others. They’re heart-breakers, not good at long-term relationships, morals are weak. Compatible with Rat or Dragon.",
    year: ["1920", "1932", "1944", "1956", "1968", "1980", "1992", "2004", "2016"]
  },
  {
    photo: Rooster,
    id: '9',
    text: "Rooster",
    desc: "Those born under the Chinese Zodiac sign of the Rooster are practical, resourceful, observant, analytical, straightforward, trusting, honest, perfectionists, neat and conservative. Compatible with Ox or Snake.",
    year: ["1921", "1933", "1945", "1957", "1969", "1981", "1993", "2005", "2017"]
  },
  {
    photo: Dog,
    id: '10',
    text: "Dog",
    desc: "Those born under the Chinese Zodiac sign of the Dog are loyal, faithful, honest, distrustful, often guilty of telling white lies, temperamental, prone to mood swings, dogmatic, and sensitive. Dogs excel in business but have trouble finding mates. Compatible with Tiger or Horse.",
    year: ["1922", "1934", "1946", "1958", "1970", "1982", "1994", "2006", "2018"]
  },
  {
    photo: Pig,
    id: '11',
    text: "Pig",
    desc: "Those born under the Chinese Zodiac sign of the Pig are extremely nice, good-mannered and tasteful. They’re perfectionists who enjoy finer things but are not perceived as snobs. They enjoy helping others and are good companions until someone close crosses them, then look out! They’re intelligent, always seeking more knowledge, and exclusive. Compatible with Rabbit or Goat.",
    year: ["1923", "1935", "1947", "1959", "1971", "1983", "1995", "2007", "2019"]
  }
];

export default ZodiacIcons;