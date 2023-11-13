import React from "react";
import { cardItems } from "../../../data";

const Activities = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-28 shadow-xl mx-20 mb-10">
      {cardItems.map((item) => {
        return (
          <div
            key={item.id}
            className="shadow-md w-full flex items-start gap-4 rounded-md"
          >
            <img className="w-40 h-40" src={item.img} alt={item.cardTitle} />
            <div>
              <h2 className="font-extrabold text-lg">{item.cardTitle}</h2>
              <p>{item.cardText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
