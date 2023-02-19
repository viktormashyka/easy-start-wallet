import styled from 'styled-components';
import { ReactComponent as Calculator } from '../../images/Calculator.svg';
import { ReactComponent as Calendar } from '../../images/Calendar.svg';
import { Field, Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const FormTopWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
    margin-right: 32px;
  }
`;

export const FormInputWrapper = styled.div`
  border: 2px solid #ffffff;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: 32px;
  width: 280px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    /* box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 4px 10px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16); */
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    border: none;
    width: 100%;
  }
`;

export const CalendarIcon = styled(Calendar)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media screen and (min-width: 1280px) {
    margin-right: 14px;
  }
`;

export const CurrentData = styled.p`
  margin-right: 44px;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: #52555f;
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const DataBox = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid #f5f6fb;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 16px;
  }
`;

export const InputField = styled(Field)`
  padding-left: 20px;
  width: 260px;
  height: 44px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border: none;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  color: #52555f;
  &:-internal-autofill-selected {
    background-image: none !important;
    background-color: #ffffff !important;
  }
  ::placeholder {
    color: #c7ccdc;
  }
  @media screen and (min-width: 768px) {
    width: 164px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-right: 2px solid #f5f6fb;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 0 0 100px rgba(255, 255, 255, 1);
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
  }
`;

// Secondary input

export const SecondaryInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 183px;
  border-radius: 22px;
  border: 2px solid #ffffff;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    width: 110px;
    border: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 2px solid #f5f6fb;
  }
`;

export const TextSecondary = styled(Field)`
  width: 124px;
  height: 44px;
  border: none;
  border-right: 2px solid #ffffff;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
  /* padding: 12px 0 12px 28px; */
  text-align: center;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  color: #000000;
  &:-internal-autofill-selected {
    background-image: none !important;
    background-color: #f5f6fb !important;
  }
  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: regular;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
  }
  &:hover {
    /* color: #52555f; */
  }
  @media screen and (min-width: 768px) {
    /* padding: 10px 0px 10px 20px; */
    width: 73px;
    border-left: 2px solid #f5f6fb;
    border-radius: 0px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 0 0 100px rgba(255, 255, 255, 1);
  }
`;

export const CalculatorIcon = styled(Calculator)`
  width: 20px;
  height: 20px;
  padding: 12px 20px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    padding: 10px 20px 10px 0;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    padding: 10px 22px 10px 0;
  }
`;

// Buttons for Submit

export const BtnSubmitList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 265px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const BtnSubmitItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 23px;
  border-radius: 16px;
  background-color: #f5f6fb;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const BtnSubmit = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: #52555f;
  width: 130px;
  /* height: 44px; */
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 1px 2px 5px 0px rgba(170, 178, 197, 0.4);
  border-radius: 16px;
  font-family: Roboto, sans-serif;
  font-style: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    width: 125px;
  }
  @media screen and (min-width: 768px) {
    width: 136px;
  }
`;
export const BtnSecondary = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: #52555f;
  width: 130px;
  /* height: 44px; */
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 1px 2px 5px 0px rgba(170, 178, 197, 0.4);
  border-radius: 16px;
  font-family: Roboto, sans-serif;
  font-style: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    width: 125px;
  }
  @media screen and (min-width: 768px) {
    width: 136px;
  }
`;
