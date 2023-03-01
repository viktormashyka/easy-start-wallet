import { useTable } from 'react-table';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TdMinus, TdPlus } from './Table.styled';
import { UniversalModal } from 'components/UniversalModal/UniversalModal';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { deleteTransaction } from '../../redux/transaction/transactionOperations';
import moment from 'moment';
const modalQuestion = 'Are you sure?';

// Misha Pobochikh

export const Table = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date', // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Sum',
        accessor: 'sum',
      },
      {
        Header: '',
        accessor: 'icon',
      },
    ],
    []
  );

  const onHandleClick = () => {
    // console.log('Click Delete on id', selectedId);
    dispatch(deleteTransaction(selectedId));
  };

  const clickButton = id => {
    setSelectedId(id);
    setShowModal(true);
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
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
                  const newSum = `${Number(cell.value).toFixed(2).padStart(5, 0)} UAH.`;
                  return (
                    <TdMinus {...cell.getCellProps()}>
                      -{newSum}
                    </TdMinus>
                  );
                }
                if (cell.column.Header === 'Sum') {
                  const newSum = `${Number(cell.value).toFixed(2).padStart(5, 0)} UAH.`;
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
                        onClick={() => clickButton(cell.row.original._id)}
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
      {showModal && (
        <UniversalModal
          closeModal={setShowModal}
          agreeLogout={onHandleClick}
          question={modalQuestion}
        />
      )}
      </>
  );
};
