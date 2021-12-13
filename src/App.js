import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, changeDate } from './features/toggle/toggleSlice';
import IconButton from './components/IconButton';
import Settings from './components/Settings';
import Table from './components/Table';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { loadtableData } from './app/tableData';

function App() {
  const toggleValue = useSelector((state) => state.toggle.value)
  const selectedDate = useSelector((state) => state.toggle.selectedDate)
  const dispatch = useDispatch()

  const data = useSelector((state) => state.tableData.list)

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
          {toggleValue && <Settings />}
        </div>
        <div className="tableContainer">
          <Table 
            data={data.data}
            columns = {columns}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
