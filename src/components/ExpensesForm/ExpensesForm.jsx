import { useDispatch } from 'react-redux';
import { addTransactionExpenses } from '../../redux/transaction/transactionOperations';
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
} from './ExpensesForm.styled';

const options = [
  { value: 'transport', label: 'Transport' },
  { value: 'products', label: 'Products' },
  { value: 'health', label: 'Health' },
  { value: 'alcohol', label: 'Alcohol' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'housing', label: 'Housing' },
  { value: 'technique', label: 'Technique' },
  { value: 'communal, communication', label: 'Communal, communication' },
  { value: 'sports', label: 'Sports' },
  { value: 'hobbies', label: 'Hobbies' },
  { value: 'others', label: 'Others' },
];

const initialValues = {
  category: '',
  description: '',
  sum: '',
};

const schema = Yup.object().shape({
  category: Yup.string().required('Select category'),
  description: Yup.string()
    .min(3)
    .max(16)
    .required('Enter product description'),
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

export const ExpensesForm = () => {
  const dispatch = useDispatch();

  const date = moment().format('DD.MM.YYYY');

  // const getFormData = values => {
  //   console.log('getFormData::', values);
  // };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            addTransactionExpenses({
              ...values,
              transactionsType: 'expenses',
              date,
            })
          );
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          resetForm,
        }) => {
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
                      placeholder="Product description"
                      onChange={handleChange}
                      value={values.description}
                    />
                    <CustomSelect
                      name="category"
                      options={options}
                      value={values.category}
                      type="Product category"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      onChange={values =>
                        setFieldValue('category', values.value)
                      }
                    ></CustomSelect>
                  </FormInputWrapper>
                  <SecondaryInputWrapper>
                    <div>
                      <TextSecondary
                        as="input"
                        type="number"
                        id="sum"
                        name="sum"
                        pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                        title="Вalance must be whole numbers (or decimal numbers)"
                        placeholder="00.00 UAH"
                        onChange={handleChange}
                        value={values.sum}
                      />
                      <ErrorMessageWrapper>
                        {errors.description && touched.description ? (
                          <FormError name="description" component="p" />
                        ) : errors.category && touched.category ? (
                          <FormError name="category" component="p" />
                        ) : errors.sum && touched.sum ? (
                          <FormError name="sum" component="p" />
                        ) : null}
                      </ErrorMessageWrapper>
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
