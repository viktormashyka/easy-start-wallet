import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 85px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  margin: 0 auto;
  min-width: 280px;
  max-width: 400px;
  padding: 7px 10px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 704px;
    height: 50px;
    margin: 0 auto;
    padding: 7px 20px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1034px;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 120px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SummaryTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 4px;
  color: #52555f;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 15px;
  }
`;

export const SummaryExpenses = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #e53935;
`;

export const SummaryIncome = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.04em;

  color: #407946;
`;

export const Strip = styled.div`
  border: 1px solid #e0e5eb;
  height: 70px;
  @media screen and (min-width: 768px) {
        height: 36px;
    }
`;
