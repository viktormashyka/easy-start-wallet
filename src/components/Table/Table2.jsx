import { useTable } from 'react-table';
import React from 'react';
import { TdMinus } from './Table2.styled';
import { TdPlus } from './Table2.styled';

import { ReactComponent as DeleteIcon } from '../../images/delete.svg';

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
                console.log('cell', cell);
                // console.log('cell header', cell.column.Header);

                // Перевіряємо в якій категорії ?console.log(cell.row.original);

                if (
                  cell.row.original.transactionsType === 'expenses' &&
                  cell.column.Header === 'Sum'
                ) {
                  return (
                    <TdMinus {...cell.getCellProps()}>
                      - {cell.render('Cell')} UAH
                    </TdMinus>
                  );
                }
                if (cell.column.Header === 'Sum') {
                  return (
                    <TdPlus {...cell.getCellProps()}>
                      {cell.render('Cell')} UAH
                    </TdPlus>
                  );
                }
                if (cell.column.id === 'icon') {
                  console.log('cell.row.original.id', cell.row.original.id);
                  return (
                    <td>
                      <button
                        type="button"
                        id={cell.row.original.id}
                        onClick={() => onHandleClick(cell.row.original.id)}
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
      </tbody>
    </table>
  );
};
