import React from "react";

import Classes from "../Styles/Services.module.css";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

function Service() {
  const data = [
    {
      icon: service1,
      title: "Get Best Deals",
      subTitle:
        "Unlock unbeatable deals and explore the world on a budget!",
    },
    {
      icon: service2,
      title: "Full Travel Covered",
      subTitle:
        "From start to finish, we've got your entire travel plan covered!",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        "Flexible payment options tailored to your travel needs.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Discover the best travel experiences right in your backyard!",
    },
  ];

  return (
    <section id="service" className={Classes.service}>
      {data.map((item) => {
        return (
          <div className={Classes.services}>
            <div className={Classes.icon}>
              <img src={item.icon} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Service;
