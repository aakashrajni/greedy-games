import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { useSelector } from 'react-redux';
import Settings from './Settings';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const Table = ({columns, data}) => {

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
                        <th className={column.columnAlignClass} {...column.getHeaderProps(column.getSortByToggleProps())}>
                            
                            {column.isSorted ? (column.isSortedDesc ? <FaSortAmountDown /> : <FaSortAmountUp/>) : ''}
                            
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
                            return <td className={cell.column.columnAlignClass} {...cell.getCellProps()}>{cell.render('Cell')}</td>
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