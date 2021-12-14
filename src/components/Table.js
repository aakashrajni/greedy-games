import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { useSelector } from 'react-redux';
import Settings from './Settings';

const Table = ({columns, data}) => {
    console.log(columns,data);

  const toggleValue = useSelector((state) => state.toggle.value)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns,
    } = useTable({ columns, data }, useSortBy)

    return (
        <div> 
          {toggleValue && <Settings value={allColumns}/>}
          <div className="tableContainer">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                            <div>
                              {column.isSorted ? (column.isSortedDesc ? 'D' : 'A') : ''}
                            </div>
                            {column.render('Header')}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
          </div>
        </div>
        )
}

export default Table;