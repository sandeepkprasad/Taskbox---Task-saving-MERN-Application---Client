import React from "react";
import BrandTitle from "../components/BrandTitle";
import AddTask from "../components/AddTask";
import FetchTask from "../components/FetchTask";

const Home = () => {
  return (
    <div>
      <BrandTitle />
      <AddTask />
      <FetchTask />
    </div>
  );
};

export default Home;
