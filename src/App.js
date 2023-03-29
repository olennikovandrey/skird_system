import TopField from "./components/TopField/TopField";
import Filters from "./components/Filters/Filters";
import WorkTools from "./components/WorkTools/WorkTools";
import Aside from "./components/Aside/Aside";
import React from "react";

const App = () => {
  return (
    <div className="general-wrapper">
      <TopField />
      <Filters />
      <WorkTools />
      <Aside />
    </div>
  );
};

export default App;
