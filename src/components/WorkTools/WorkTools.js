import calculatorIcon from "../../assets/images/work_tools/calculator.ico";
import filterIcon from "../../assets/images/work_tools/filter.png";
import leverIcon from "../../assets/images/work_tools/lever.svg";
import plusIcon from "../../assets/images/work_tools/plus.svg";
import refreshIcon from "../../assets/images/work_tools/refresh.svg";
import starIcon from "../../assets/images/work_tools/star.png";
import React from "react";
import { useSelector } from "react-redux";

const WorkTools = () => {
  const icons = [plusIcon, calculatorIcon, leverIcon, refreshIcon, filterIcon, starIcon];
  const filter = useSelector(state => state.filter);

  return (
    <div className="tools">
      <div className="tools__wrapper">
        {
          icons.map((item, index) =>
            <div className="tools__wrapper-item" key={ index }>
              <img src={ item } alt={ item } />
            </div>
          )
        }
      </div>
      <h4>{ filter }</h4>
    </div>
  );
};

export default  WorkTools;
