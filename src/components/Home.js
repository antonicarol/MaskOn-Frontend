import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import Banner from "./Banner";
import NewestMasks from "./NewestMasks";
import BasicFilters from "./BasicFilters";
import "./css/Home.css";

function Home() {
  const [{ masks }, dispatch] = useStateValue();

  return (
    <div className="home">
      <Banner />
      <div className="home__shop">
        <NewestMasks />
        <BasicFilters />
      </div>
    </div>
  );
}

export default Home;
