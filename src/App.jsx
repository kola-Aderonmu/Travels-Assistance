import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CategoryContainer from "./assets/components/category-container/CategoryContainer";
// import './App.css'
import Activities from "./assets/components/category-container/Activities";
import Footer from "./assets/components/category-container/footer";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <CategoryContainer />
      <Activities />
      <Footer />
    </>
  );
}

export default App;
