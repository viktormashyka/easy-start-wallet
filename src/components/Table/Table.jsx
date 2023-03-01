import { useTable } from 'react-table';
import React from 'react';
import { TdMinus, TdPlus } from './Table.styled';

import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import moment from 'moment';

// Misha Pobochikh

export const Table = ({ columns, data, onHandleClick }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                // console.log('cell', cell);
                if (cell.column.id === 'date') {
                  const newCell = moment(cell.value).format('DD.MM.YYYY');
                  // console.log('newCell', newCell);
                  return <td {...cell.getCellProps()}>{newCell}</td>;
                }
                // console.log('cell header', cell.column.Header);
                // Перевіряємо в якій категорії ?console.log(cell.row.original);

                if (
                  cell.row.original.transactionsType === 'expenses' &&
                  cell.column.Header === 'Sum'
                ) {
                  const newSum = `${Number(cell.value).toFixed(2).padStart(5, 0)}UAN.`;
                  return (
                    <TdMinus {...cell.getCellProps()}>
                      -{newSum}
                    </TdMinus>
                  );
                }
                if (cell.column.Header === 'Sum') {
                  const newSum = `${Number(cell.value).toFixed(2).padStart(5, 0)}UAN.`;
                  return (
                    <TdPlus {...cell.getCellProps()}>
                      {newSum}
                    </TdPlus>
                  );
                }
                if (cell.column.id === 'icon') {
                  // console.log('cell.row.original.id', cell.row.original._id);
                  return (
                    <td key={cell.row.original._id}>
                      <button
                        type="button"
                        id={cell.row.original._id}
                        onClick={() => onHandleClick(cell.row.original._id)}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  );
                }
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
