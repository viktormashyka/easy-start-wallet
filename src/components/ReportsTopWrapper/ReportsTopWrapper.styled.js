import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f6fb;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 56px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1034px;
    padding-left: 0;
    padding-right: 0;
  }
`;

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and (min-width: 768px) {
//     flex-direction: row-reverse;
//     min-width: 400px;
//   }
//   @media screen and (min-width: 1280px) {
//     min-width: 680px;
//   }
// `;