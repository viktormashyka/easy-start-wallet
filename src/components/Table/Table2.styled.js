import styled from 'styled-components';

export const TdMinus = styled.td`
  :nth-child(4) {
    color: red;
    text-align: left;
  }
`;
export const TdPlus = styled.td`
  :nth-child(4) {
    color: green;
  }
`;

export const TableStyle = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  height: 150px;
  overflow-y: scroll;

  border-radius: 20px;
  /* padding-right: 20px;
  padding-left: 20px; */

  ::-webkit-scrollbar {
    width: 6px; /* ширина для вертикального скролла */

    background-color: #f5f6fb;
  }

  /* ползунок скроллбара */
  ::-webkit-scrollbar-thumb {
    background-color: #ff751d;
    width: 6px;
    border-radius: 9em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #f5f6fb;

    text-align: left;

    thead {
      /* width: calc(100% - 1.1em);
      outline: 1px solid red; */
      position: sticky;
      top: 0px;
    }
    tbody {
      /* outline: 1px solid red;
      display: block;
      max-height: 150px;
      overflow-y: scroll; */
    }
    tr {
      /* display: table;
      width: 100%;
      table-layout: fixed; */
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      background-color: #f5f6fb;
      text-transform: uppercase;
      font-size: 12px;
      padding-top: 14px;
      padding-bottom: 14px;
      :first-child {
        padding-left: 20px;
      }
    }

    td {
      border-bottom: 2px solid #f5f6fb;
      border-top: 0;
      padding-top: 14px;
      padding-bottom: 14px;

      :first-child {
        padding-left: 20px;
      }
    }
    th,
    td {
      margin: 0;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const TableStyle2 = styled.div`
  padding-right: 20px;
  padding-left: 20px;

  width: 100%;
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
  }

  tbody,
  thead {
    display: block;
  }
  thead,
  tr th {
    height: 60px;
    line-height: 60px;
    background: red;
    color: white;
  }
  tbody {
    height: 120px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  tbody {
    border-top: 2px solid black;
    background: orange;
  }

  td,
  th {
    width: 200px;
    border-right: 1px solid black;
  }
  td {
    text-align: center;
  }
`;
