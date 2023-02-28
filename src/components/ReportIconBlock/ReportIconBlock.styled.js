import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  margin-top: 32px;

  margin: auto;
  @media screen and (min-width: 320px) {
    max-width: 480px;
    margin-bottom: 1px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-bottom: 31px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1034px;
    margin-bottom: 40px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ReportWrapper = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 320px) {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-bottom: 30px;
    display: block;
  }
  @media screen and (min-width: 768px) {
    background: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
    padding-top: 20px;
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1034px;
    padding-left: 175px;
    padding-right: 175px;
  }
`;
export const TransactionWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: 1.17;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ArrowСhangeMonthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ReportTitle = styled.h1`
  @media screen and (min-width: 320px) {
    font-weight: bold;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    min-width: 96px;
  }
`;

export const ReportList = styled.ul`
  @media screen and (min-width: 320px) {
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    color: #ff751d;
    align-items: center;
    list-style: none;
    font-size: 12px;
    justify-content: center;
    margin: 0px;
    padding-top: 20px;
  }
`;
export const ReportCard = styled.li`
  color: #52555f;
  @media screen and (min-width: 320px) {
    text-align: center;
    height: 135px;
    border-bottom: 1px solid #e0e5eb;
    margin-bottom: 20px;
    font-size: 12px;
    align-items: 1.17;
    box-sizing: border-box;
    flex-basis: calc((100% - 20px) / 3);
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    flex-basis: calc((100% - 77px) / 6);
    border-bottom: 0;
    &:not(:nth-child(6n)) {
      margin-right: 10px;
      font-size: 12px;
      align-items: 1.17;
    }
  }
  @media screen and (min-width: 1280px) {
    text-align: center;
    flex-basis: calc((100% - 100px) / 6);
    &:not(:nth-child(6n)).reportCard:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const IconSvg = styled.svg`
  @media screen and (min-width: 320px) {
    max-width: 56px;
    max-height: 56px;
    margin-top: 5px;
    margin-bottom: 5px;
    fill: #071f41;
    background-image: radial-gradient(
      75% 60% at 50% 50%,
      #f5f6fb 15%,
      #f5f6fb 15%,
      #f5f6fb 40%,
      #f5f6fb 40%,
      #f5f6fb 65%,
      #fff 65%
    );

    &:hover {
      fill: #ff751d;
      background-image: radial-gradient(
        75% 60% at 50% 50%,
        #ffdac0 15%,
        #ffdac0 15%,
        #ffdac0 40%,
        #ffdac0 40%,
        #ffdac0 65%,
        #fff 65%
      );
      transform: rotate(5deg);
      transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:focus {
      fill: #ff751d;
      background-image: radial-gradient(
        75% 60% at 50% 50%,
        #ffdac0 15%,
        #ffdac0 15%,
        #ffdac0 40%,
        #ffdac0 40%,
        #ffdac0 65%,
        #fff 65%
      );
      transform: rotate(5deg);
      transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  @media screen and (min-width: 1280px) {
    max-width: 58px;
    max-height: 58px;
  }
`;
export const ReportCardTitle = styled.p`
  @media screen and (min-width: 320px) {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    padding-top: 10px;
  }
`;
export const Notificate = styled.p`
  margin: 20px;
  font-size: 20px;
`;
