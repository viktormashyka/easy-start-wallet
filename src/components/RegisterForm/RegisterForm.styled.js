import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  margin: auto;
  /* margin-top: 117px;
  max-height: 552px;
  max-width: 426px; */
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  color: #010101;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  padding: 56px 83px 56px 83px;
  font-family: 'Roboto';
  font-style: normal;
  width: 280px;
  height: 496px;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 426px;
    height: 552px;
  }
`;

export const Input = styled(Field)`
font-size: 12px;
  margin-bottom: 32px;
  margin-top: 5px;
  display: flex;
  padding-left: 19.54px;
  // flex-direction: column;
  width: 258.92px;
  height: 52px;
  border-radius: 30px;
  background: #f6f7fb;
  border-style: none;
  border: none;
   &: hover,  &:focus {
    border:  non;
  }
`;
export const ButtonGoogl = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  width: 119.2px;
  height: 40px;
  background: #f6f7fb;
  border-radius: 26px;
  border-style: none;
  letter-spacing: 0.02em;
  cursor: pointer;
  border: none;
`;
export const P = styled.p`
  // margin-left: auto;
  // margin-right: auto;
  font-size: 12px;
  line-height: 14px;
  max-width: 210px;
  max-height: 28px;
  color: #52555f;
  // display: flex;
  // justify-content: center;
`;
export const Button = styled.button`
  width: 122.17px;
  height: 44px;
  background: #f5f6fb;
  border-radius: 16px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #52555f;
  font-weight: 700;
  cursor: pointer;
  &: hover,  &:focus {
    background: #ff751d;
    color: #ffffff;
    // border-style: none;
    border: none;
  } ;
`;
export const Div = styled.div`
  display: flex;
  margin-top: '40px';
  justify-content: space-between;
`;
export const ErrorText = styled.p`
  color: red;
`;
