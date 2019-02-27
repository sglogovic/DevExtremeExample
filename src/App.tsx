import * as React from 'react';
import { DataGrid, Column, Summary, TotalItem, Scrolling, FilterRow, ColumnChooser, Grouping, GroupPanel } from 'devextreme-react/data-grid';
import { getData } from './DevExtremeData';
import './DevExtreme.css';
import './DevExtreme2.css';

class App extends React.Component {
  public render() {
    return (
          <>
            <DataGrid
                id="snapshot-details-grid"
                dataSource={getData()}
                showBorders={true}
                allowColumnReordering={true}
                allowColumnResizing={true}
                >
            >
                <Column
                    dataField={"recordType"}
                />
                <Column
                    dataField={"creationTime"}
                />
                <Column
                    dataField={"operation"}
                />
                <Column
                    dataField={"organizationId"}
                />
                <Column
                    dataField={"objectId"}
                />
                <Column
                    dataField={"userId"}
                />
                <Column
                    dataField={"rowId"}
                />
                <ColumnChooser key="dx-column-chooser" enabled={true} />
                <FilterRow key="dx-filter-row" visible={true} />
                <Grouping key="dx-grouping" allowCollapsing={true} expandMode={"rowClick"} />
                <GroupPanel key="dx-group-panel" visible={true} />
                <Scrolling key="dx-scrolling" mode={'standard'} rowRenderingMode={'standard'} columnRenderingMode={'standard'} />,
                <Summary key={'dx-summary'} calculateCustomSummary={calculateSelectedRow()}>
                  <TotalItem
                      key={'dx-totalItem-count'}
                      name={'rowCountSummary'}
                      summaryType={'custom'}
                      displayFormat={'{0}'}
                      showInColumn={"rowId"}
                  />
              </Summary>
            </DataGrid>
      </>
    );
  }
}

function calculateSelectedRow() {
  return (options: { name: string; summaryProcess: string; totalValue: string; rowCount: number; maxValue: number; })=> {
      if (options.name === 'rowCountSummary') {
          if (options.summaryProcess === 'start') {
              options.totalValue = 'Row Count : 0';
              options.rowCount = 0;
              options.maxValue = 86;
          } else if (options.summaryProcess === 'calculate') {
              options.rowCount = options.rowCount + 1;
          } else if (options.summaryProcess === 'finalize') {
              options.totalValue = `Showing ${options.rowCount} out of ${options.maxValue}`;
          }
      }
  };
}

export default App;
