import TopField from "./components/TopField/TopField";
import Filters from "./components/Filters/Filters";
import WorkTools from "./components/WorkTools/WorkTools";
import Aside from "./components/Aside/Aside";
import TableData from "./components/TableData/TableData";
import React from "react";

const App = () => {
  return (
    <div className="general-wrapper">
      <TopField />
      <Filters />
      <WorkTools />
      <div className="aside-table-wrapper">
        <Aside />
        <TableData />
      </div>
    </div>
  );
};

export default App;
