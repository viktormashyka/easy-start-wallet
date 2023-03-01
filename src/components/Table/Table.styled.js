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
  @media screen and (min-width: 1280px) {
    width: 746px;
  }

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
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    :hover,
    :focus {
      background-color: #f5f6fb;
    }
  }
  table {
    display: block;
    width: 100%;
    border-collapse: collapse;
    border: 2px solid #f5f6fb;
    border-top-right-radius: 22px;
    border-top-left-radius: 22px;
    overflow-x: hidden;
    text-align: left;

    thead {
      display: block;

      /* outline: 1px solid red; */
      /* position: sticky;
      top: 0px; */
    }
    tbody {
      display: block;
      /* outline: 1px solid red; */
      height: 400px;
      overflow-y: scroll;
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
    }
    tr {
      display: table;
      width: 100%;
      height: 40px;
      table-layout: fixed;
      border-bottom: 2px solid #f5f6fb;

      th {
        /* outline: 1px solid red; */
        background-color: #f5f6fb;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        padding-top: 14px;
        padding-bottom: 14px;
        font-size: 12px;
        line-height: 14px;
        :first-child {
          padding-left: 20px;
        }

        @media screen and (min-width: 1280px) {
          :first-child {
            padding-left: 28px;
          }
        }
        :nth-child(4) {
          text-align: right;
        }
        :nth-child(3) {
          text-align: center;
        }
      }

      td {
        /* outline: 1px solid red; */
        /* border-bottom: 2px solid #f5f6fb; */
        border-top: 0;
        padding-top: 14px;
        padding-bottom: 14px;
        font-size: 12px;
        line-height: 14px;
        color: #52555f;

        :first-child {
          padding-left: 20px;
        }
        :nth-child(4) {
          font-weight: 700;
          text-align: right;
        }
        :nth-child(3) {
          text-align: center;
        }
        :last-child {
          padding: 0;
          padding-left: 40px;
        }

        @media screen and (min-width: 1280px) {
          :nth-child(4) {
            text-align: center;
          }
        }
      }
      th,
      td {
        margin: 0;

        :last-child {
          border-right: 0;
          width: 15%;
          text-align: center;
        }
        @media screen and (min-width: 1280px) {
          :nth-child(4) {
            text-align: center;
          }
        }
      }
    }
  }
`;
