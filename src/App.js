import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, changeDate } from './features/toggle/toggleSlice';
import IconButton from './components/IconButton';
import Table from './components/Table';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { loadtableData } from './app/tableData';

function App() {
  const selectedDate = useSelector((state) => state.toggle.selectedDate)
  const dispatch = useDispatch()

  const data = useSelector((state) => state.tableData.list)
  // const settingValue = useSelector((state) => state.toggle.tableHeader)

  const columns = React.useMemo(() => [
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'App Name',
      accessor: 'app_id',
    },
    {
      Header: 'AD Request',
      accessor: 'requests',
    },
    {
      Header: 'AD Response',
      accessor: 'responses',
    },
    {
      Header: 'Impression',
      accessor: 'impressions',
    },
    {
      Header: 'Clicks',
      accessor: 'clicks',
    },
    {
      Header: 'Revenue',
      accessor: 'revenue',
    },
    {
      Header: 'Fill Rate',
      accessor: 'fill_rate',
    },
    {
      Header: 'CTR',
      accessor: 'ctr',
    },
  ],[])

  useEffect(() => {
    dispatch(loadtableData());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="leftMenu"></div>
      <div className="mainContent">
        <div className="header">
          <h4>Analytics</h4>
        </div>
        <div className="options">
          <div className="optionContainer">
              {/* <IconButton 
                value="Date Filter"
              /> */}
              <div>
              <DateRangePicker 
                onChange={date => dispatch(changeDate(date))}
                value ={selectedDate}
              />
              </div>
            <IconButton 
              value="settings btn"
              clickFn={() => dispatch(toggle())}
            />
          </div>
        </div>
        <div>
          <Table 
            data={data}
            columns = {columns}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
