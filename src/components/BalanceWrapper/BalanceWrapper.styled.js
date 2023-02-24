import styled from 'styled-components';

export const ContainerBalance = styled.div`
  background: #f5f6fb;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-top: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    /* padding-left: 50px;
    padding-right: 50px; закоментувала Юля Зозуля*/
    /* width: 768px; */
    padding-top: 0;
    margin-bottom: 0;
    padding-left: 40px;
  }
  @media screen and (min-width: 1280px) {
    /* width: 1260px; */
    /* padding-left: 100px; закоментувала Юля Зозуля
    padding-right: 100px; */
    padding-left: 380px;
  }
`;
