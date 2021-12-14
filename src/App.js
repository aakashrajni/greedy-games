import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, changeDate } from './features/toggle/toggleSlice';
import IconButton from './components/IconButton';
import Table from './components/Table';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { loadtableData, loadAppNameData } from './app/tableData';
import moment from 'moment';
import { FaSlidersH } from 'react-icons/fa';

function App() {
  var selectedDate = useSelector((state) => state.toggle.selectedDate)
  let startDate = moment(new Date(selectedDate[0])).format("yyyy-MM-DD");
  let endDate = moment(new Date(selectedDate[1])).format("yyyy-MM-DD");
  const url = "/report?startDate="+startDate+"&endDate="+endDate;
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
      accessor: 'app_name',
    },
    {
      Header: 'AD Request',
      accessor: 'requests',
      columnAlignClass: 'numberAlign',
    },
    {
      Header: 'AD Response',
      accessor: 'responses',
      columnAlignClass: 'numberAlign',
    },
    {
      Header: 'Impression',
      accessor: 'impressions',
      columnAlignClass: 'numberAlign',
    },
    {
      Header: 'Clicks',
      accessor: 'clicks',
      columnAlignClass: 'numberAlign',
    },
    {
      Header: 'Revenue',
      accessor: 'revenue',
      columnAlignClass: 'numberAlign',
    },
    {
      Header: 'Fill Rate',
      accessor: 'fill_rate',
      columnAlignClass: 'numberAlign',
    },
    {
      Header: 'CTR',
      accessor: 'ctr',
      columnAlignClass: 'numberAlign',
    },
  ],[])

  useEffect(() => {
    dispatch(loadAppNameData());
    dispatch(loadtableData(url));
  }, [dispatch,url]);

  return (
    <div className="App">
      <div className="leftMenu"></div>
      <div className="mainContent">
        <div className="header">
          <h4>Analytics</h4>
        </div>
        <div className="options">
          <div className="optionContainer">
              <div>
              <DateRangePicker 
                onChange={date => dispatch(changeDate(date))}
                value ={selectedDate}
              />
              </div>
            <IconButton 
              value="Settings"
              iconName={<FaSlidersH />}
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
