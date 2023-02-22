import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    /* min-width: 400px; */
  }
  @media screen and (min-width: 1280px) {
    /* min-width: 680px; */
  }
`;