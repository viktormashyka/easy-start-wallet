import { useState } from 'react';
import * as Yup from 'yup';
import moment from 'moment';
import { Formik, ErrorMessage } from 'formik';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import {
  InputField,
  FormBox,
  FormInputWrapper,
  SecondaryInputWrapper,
  CalculatorIcon,
  TextSecondary,
  BtnSubmitList,
  BtnSubmitItem,
  BtnSubmit,
  BtnSecondary,
  InputsBox,
  FormTopWrapper,
  CalendarIcon,
  CurrentData,
  DataBox,
  IconWrapper,
  ErrorNotification,
  ErrorMessageWrapper,
} from './IncomeForm.styled';

const options = [
  { value: 'salary', label: 'Salary' },
  { value: 'add income', label: 'Add income' },
];

const initialValues = {
  category: '',
  description: '',
  sum: '',
};

const schema = Yup.object().shape({
  category: Yup.string().required('Select category'),
  description: Yup.string().min(3).max(16).required('Enter income description'),
  sum: Yup.number('Invalid sum, only numbers').required('Enter sum'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorNotification>{message}</ErrorNotification>}
    />
  );
};

export const IncomeForm = () => {
  const date = moment().format('DD.MM.YYYY');
  const [formValues, setformValues] = useState(initialValues);
  // const getFormData = values => {
  //   console.log('getFormData::', values);
  // };
  // console.log('formValues::', formValues);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log({
            ...values,
            transactionsType: 'income',
            date,
          });
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          resetForm,
        }) => {
          setformValues(values);
          // getFormData(values);
          return (
            <FormBox onSubmit={handleSubmit}>
              <FormTopWrapper>
                <DataBox>
                  <CalendarIcon />
                  <CurrentData>{date}</CurrentData>
                </DataBox>
                <InputsBox>
                  <FormInputWrapper>
                    <InputField
                      as="input"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Description"
                      onChange={handleChange}
                      value={values.description}
                    />
                    <CustomSelect
                      name="category"
                      options={options}
                      value={values.category}
                      type="Category"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      onChange={values =>
                        setFieldValue('category', values.value)
                      }
                    ></CustomSelect>
                    {/* {formik.errors.category ? <div>{formik.errors.category}</div> : null} */}
                  </FormInputWrapper>
                  <SecondaryInputWrapper>
                    <div>
                      <TextSecondary
                        as="input"
                        type="text"
                        id="sum"
                        name="sum"
                        placeholder="00.00 UAH"
                        onChange={handleChange}
                        value={values.sum}
                      />
                      <ErrorMessageWrapper>
                        <FormError name="category" component="p" />
                        <FormError name="description" component="p" />
                        <FormError name="sum" component="p" />
                      </ErrorMessageWrapper>
                      {/* <AdditionalInputTag>UAH</AdditionalInputTag> */}
                    </div>
                    <IconWrapper>
                      <CalculatorIcon />
                    </IconWrapper>
                  </SecondaryInputWrapper>
                </InputsBox>
              </FormTopWrapper>
              <BtnSubmitList>
                <BtnSubmitItem>
                  <BtnSubmit type="submit" disabled={isSubmitting}>
                    Input
                  </BtnSubmit>
                </BtnSubmitItem>
                <BtnSubmitItem>
                  <BtnSecondary
                    type="reset"
                    onClick={resetForm}
                    disabled={isSubmitting}
                  >
                    Clear
                  </BtnSecondary>
                </BtnSubmitItem>
              </BtnSubmitList>
            </FormBox>
          );
        }}
      </Formik>
    </>
  );
};
