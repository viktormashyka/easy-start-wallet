import styled from 'styled-components';

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const OperationListWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 40px;
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
  font-size: 12px;
  color: #52555f;
`;

export const OperationListDivDate = styled.div`
  display: flex;
  justify-content: space-between;
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
  fill: red;
  color: red;
`;
