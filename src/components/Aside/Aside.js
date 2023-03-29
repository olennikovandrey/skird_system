import { asideData } from "./data";
import React from "react";

const Aside = () => {
  return (
    <aside>
      {
        asideData.map(({ id, title }) =>
          <nav key={ id }>{ title }</nav>
        )
      }
    </aside>
  );
};

export default Aside;
