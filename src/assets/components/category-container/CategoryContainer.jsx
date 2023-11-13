import React from "react";
import CategoryCard from "./CategoryCard";
import "../category-container/CategoryContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlane } from "@fortawesome/free-solid-svg-icons";
const CategoryContainer = () => {
  return (
    <div className="p-16 shadow-2xl m-20">
      <h1 className="pb-8 font-sans text-5xl mb-8 mt-2 font-black">
        Travel Assistance{" "}
        <FontAwesomeIcon
          icon={faPlane}
          fontSize={"2em"}
          className="icon"
          fade
        />
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <CategoryCard />
      </div>
    </div>
  );
};

export default CategoryContainer;
