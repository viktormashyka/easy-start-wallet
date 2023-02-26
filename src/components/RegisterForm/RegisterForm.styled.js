import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    width: 426px;
    height: 552px;
    padding: 56px 83px 56px 83px;
  }
  padding: 40px 29px 40px 29px;

  width: 280px;
  height: 496px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  color: #010101;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  font-family: 'Roboto';
  font-style: normal;

  background-color: #ffffff;
`;

export const Input = styled(Field)`
@media screen and (max-width: 767px) {
    width: 240px;
   margin-bottom: 20px; 
  }
 
  width: 258.92px;
  height: 52px;
  font-size: 12px;
  margin-bottom: 32px;
  margin-top: 12px;
  display: flex;
  padding-left: 19.54px;
  
  border-radius: 30px;
  background: #f6f7fb;
  border-style: none;
  border: none;
   &: hover,  &:focus {
    border:  non;
  }
`;
export const ButtonGoogl = styled.a`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: #f6f7fb;
  border-radius: 26px;
  border: 0;
  padding: 10px 18px 10px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
`;
export const P = styled.p`
  @media screen and (min-width: 767px) {
    max-width: 222px;
    margin-bottom: 16px;
    padding-right: 8px;
    padding-left: 8px;
  }

  margin-bottom: 20px;
  font-size: 12px;
  line-height: 14px;
  max-width: 210px;
  max-height: 28px;
  color: #52555f;
`;
export const Button = styled.button`
 @media screen and (max-width: 767px) {
    width: 116px;
  }
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
  @media screen and (min-width: 768px) {
    padding-top: 8px;
  }
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
`;
export const Block = styled.div`
  position: relative;
`;
export const ErrorText = styled.p`
  color: #eb5757;
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
`;
export const Span = styled.span`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;
export const RegisterButton = styled.button`
  @media screen and (max-width: 767px) {
    width: 116px;
  }
  width: 122.17px;
  height: 44px;

  border-radius: 16px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  cursor: pointer;
  background: #ff751d;
  color: #ffffff;

  border: none;
`;
