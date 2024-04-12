import React, { useState, useEffect } from "react";
import "../Styles/Recommendation.css";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [activePackage, setActivePackage] = useState(0);
  
  const [prices, setPrices] = useState([]);
  const [durations, setDurations] = useState([]);

  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "A vibrant city-state known for its modernity, diverse culture, and culinary delights.",
      cost: 38800,
      baseDuration: 2,
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Land of smiles, offering stunning beaches, rich culture, and flavorful cuisine.",
      cost: 54200,
      baseDuration: 2,
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "The romantic capital of France, renowned for its art, fashion, and cuisine.",
      cost: 45500,
      baseDuration: 2,
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "A country of breathtaking landscapes, from mountains to fjords, perfect for adventure.",
      cost: 24100,
      baseDuration: 2,
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "A tropical paradise with crystal-clear waters, stunning overwater bungalows, and tranquility.",
      cost: 95400,
      baseDuration: 2,
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "A bustling metropolis blending history and modernity, with iconic landmarks.",
      cost: 38800,
      baseDuration: 3,
    },
  ];

  const packages = [
    { name: "The Weekend Break", priceMultiplier: 1.2, durationMultiplier: 1 },
    { name: "The Package Holiday", priceMultiplier: 1.5, durationMultiplier: 1.5 },
    { name: "The Group Tour", priceMultiplier: 1.8, durationMultiplier: 1.8 },
    { name: "Long Term Slow Travel", priceMultiplier: 2, durationMultiplier: 2 },
  ];

  useEffect(() => {
    const newPrices = data.map((item) => {
      const basePrice = item.cost;
      const priceMultiplier = packages[activePackage].priceMultiplier;
      return Math.floor(basePrice * priceMultiplier);
    });
    setPrices(newPrices);

    const newDurations = data.map((item) => {
      const baseDuration = item.baseDuration;
      const durationMultiplier = packages[activePackage].durationMultiplier;
      return Math.floor(baseDuration * durationMultiplier);
    });
    setDurations(newDurations);
  }, [activePackage, data, packages]);

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommended</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={activePackage === index ? "Active" : ""}
                  onClick={() => setActivePackage(index)}
                >
                  {pkg.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item, index) => {
          return (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>${prices[index]}</p>
              </div>

              <div className="details">
                <p>{durations[index]} night {durations[index] === 1 ? "1 day" : "days"} trip</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
