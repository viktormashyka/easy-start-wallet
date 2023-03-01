import styled from 'styled-components';

export const List = styled.ul`
  max-height: 200px;
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
`;

export const OperationListWrapper = styled.li`
  font-family: 'Roboto';
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f5f6fb;
  /* outline: 1px solid red; */

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
`;

export const OperationListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* 
  outline: 1px solid black; */
`;

export const OperationListTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
  color: #52555f;
`;

export const OperationListDateTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 8px;
  color: #52555f;
`;

export const OperationListDivDate = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  /* outline: 1px solid black; */
`;

export const OperationListDivBalance = styled.div`
  display: flex;
  align-items: center;
  /* outline: 1px solid black; */
`;

export const OperationListDivBalanceText = styled.p`
  font-size: 12px;
  color: #407946;
  font-weight: 700;
  margin-right: 25px;
`;

export const OperationListDivBalanceTextMinus = styled.p`
  font-size: 12px;
  color: red;
  font-weight: 700;
  margin-right: 25px;
`;

export const DeleteBtn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #f5f6fb;
  }
`;

export const LoaderWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 624px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1280px) {
    width: 746px;
  }
`;
