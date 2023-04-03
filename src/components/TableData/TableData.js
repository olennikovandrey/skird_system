import TableItem from "./TableItem";
import React from "react";
import { useSelector } from "react-redux";

const TableData = () => {
  const activeMenuItem = useSelector(state => state.activeMenuItem);
  const tableData = useSelector(state => state.data);

  return (
    <div className="table">
      { activeMenuItem &&
        tableData[0].positions.map(item =>
          <TableItem key={ item.id } item={ item } />
        )
      }
    </div>
  );
};

export default TableData;
