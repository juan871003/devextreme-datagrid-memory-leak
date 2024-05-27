import React, { useCallback, useMemo, useState } from "react";
import DataGrid, {
  Scrolling,
  Sorting,
  LoadPanel,
  DataGridTypes,
  Column,
} from "devextreme-react/data-grid";
import { generateData } from "./data";

export const App = () => {
  const [loadPanelEnabled, setLoadPanelEnabled] = useState(true);
  const dataSource = useMemo(() => generateData(100_000), []);

  const onContentReady = useCallback(() => {
    setLoadPanelEnabled(false);
  }, []);

  return (
    <DataGrid
      height={440}
      dataSource={dataSource}
      keyExpr="id"
      onContentReady={onContentReady}
      showRowLines
      allowColumnReordering
      allowColumnResizing
      dateSerializationFormat="dd-mm-yyyy"
      columnResizingMode="widget"
    >
      <Sorting mode="multiple" />
      <Scrolling mode="virtual" preloadEnabled />
      <LoadPanel enabled={loadPanelEnabled} />
      <Column dataField="id" width={70} dataType="string" />
      <Column
        dataField="firstName"
        width={170}
        dataType="string"
        groupIndex={1}
      />
      <Column dataField="lastName" width={170} dataType="string" />
      <Column
        dataField="fullNameCellRender"
        width={200}
        dataType="string"
        cellRender={(row: any) => {
          const item = row.data;
          return (
            <div style={{ display: "flex", gap: "5px" }}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="16px"
                  height="16px"
                  // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      // style="opacity:0.988"
                      fill="#f47614"
                      d="M 4.5,-0.5 C 6.5,-0.5 8.5,-0.5 10.5,-0.5C 10.5,0.833333 10.5,2.16667 10.5,3.5C 11.5,3.5 12.5,3.5 13.5,3.5C 13.8583,6.68878 14.525,9.68878 15.5,12.5C 15.5,13.5 15.5,14.5 15.5,15.5C 10.1667,15.5 4.83333,15.5 -0.5,15.5C -0.5,14.5 -0.5,13.5 -0.5,12.5C 0.474989,9.68878 1.14166,6.68878 1.5,3.5C 2.5,3.5 3.5,3.5 4.5,3.5C 4.5,2.16667 4.5,0.833333 4.5,-0.5 Z"
                    />
                  </g>
                  <g>
                    <path
                      // style="opacity:1"
                      fill="#f5bc8e"
                      d="M 10.5,6.5 C 11.4379,8.92267 10.9379,11.256 9,13.5C 8.43045,10.1562 7.26378,9.82284 5.5,12.5C 4.26376,10.9665 3.76376,9.29981 4,7.5C 5.31592,10.028 6.48259,10.028 7.5,7.5C 9.04779,10.0075 10.0478,9.67412 10.5,6.5 Z"
                    />
                  </g>
                </svg>
              </div>
              <div>
                {item.firstName} {item.lastName}
              </div>
            </div>
          );
        }}
      />
      {/* <Column
        dataField="fullNameDisplayValue"
        width={170}
        dataType="string"
        calculateDisplayValue={(item: any) => {
          return `${item.firstName} ${item.lastName}`;
        }}
      /> */}
      <Column dataField="gender" width={170} dataType="string" />
      <Column
        dataField="birthDate"
        width={170}
        dataType="date"
        format="yyyy-MM-dd"
      />
    </DataGrid>
  );
};
