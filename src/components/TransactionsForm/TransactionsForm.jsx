import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import {
  addTransaction,
  // getAllTransactions //!
} from '../../redux/transaction/transactionOperations';
import { selectBalance } from '../../redux/auth/authSelectors';
import { showTransactions } from 'redux/transactionsToShow/transactionsToShowSlice';
import useScreenResizing from '../../hooks/useScreenResizing';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { DataBox } from '../DataBox/DataBox';
import { Loader } from '../Loader/Loader';
import {
  InputField,
  FormBox,
  DataWrapper,
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
  IconWrapper,
  ErrorNotification,
  ErrorMessageWrapper,
} from './TransactionsForm.styled';

const optionsIncome = [
  { key: nanoid(), value: 'Salary', label: 'Salary' },
  { key: nanoid(), value: 'Add.Income', label: 'Add.Income' },
];

const optionsExpenses = [
  { key: nanoid(), value: 'Transport', label: 'Transport' },
  { key: nanoid(), value: 'Products', label: 'Products' },
  { key: nanoid(), value: 'Health', label: 'Health' },
  { key: nanoid(), value: 'Alcohol', label: 'Alcohol' },
  { key: nanoid(), value: 'Entertainment', label: 'Entertainment' },
  { key: nanoid(), value: 'Housing', label: 'Housing' },
  { key: nanoid(), value: 'Technique', label: 'Technique' },
  {
    key: nanoid(),
    value: 'Communal, communication',
    label: 'Communal, communication',
  },
  { key: nanoid(), value: 'Sports, hobbies', label: 'Sports, hobbies' },
  { key: nanoid(), value: 'Education', label: 'Education' },
  { key: nanoid(), value: 'Other', label: 'Others' },
];

const initialValues = {
  category: '',
  description: '',
  sum: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorNotification>{message}</ErrorNotification>}
    />
  );
};

const TransactionsForm = () => {
  const viewPort = useScreenResizing();
  const dispatch = useDispatch();
  const currentBalance = useSelector(selectBalance);
  const date = moment().format('DD.MM.YYYY');
  const location = useLocation();
  let mainHomeLocation;
  location.pathname === '/home'
    ? (mainHomeLocation = true)
    : (mainHomeLocation = false);

  const schemaExpenses = Yup.object().shape({
    category: Yup.string().required('Select category'),
    description: Yup.string()
      .min(3)
      .max(20)
      .required('Enter product description'),
    sum: Yup.number('Invalid sum, only numbers')
      .positive('Only positive value')
      .max(currentBalance, "Expenses can't exceed your current balance")
      .required('Enter sum'),
  });

  const schemaIncome = Yup.object().shape({
    category: Yup.string().required('Select category'),
    description: Yup.string()
      .min(3)
      .max(20)
      .required('Enter income description'),
    sum: Yup.number('Invalid sum, only numbers')
      .positive('Only positive value')
      .required('Enter sum'),
  });

  // const getFormData = values => {
  //   console.log('getFormData::', values);
  // };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={mainHomeLocation ? schemaExpenses : schemaIncome}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            addTransaction({
              ...values,
              transactionsType: mainHomeLocation ? 'expenses' : 'income',
              date,
            })
          );
          // dispatch(getAllTransactions()); //!
          resetForm();
          dispatch(showTransactions());
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
                <DataWrapper>
                  <DataBox date={date} />
                </DataWrapper>
                <InputsBox>
                  <FormInputWrapper>
                    <InputField
                      as="input"
                      type="text"
                      id="description"
                      name="description"
                      placeholder={
                        mainHomeLocation ? 'Product description' : 'Description'
                      }
                      onChange={handleChange}
                      value={values.description}
                    />
                    <CustomSelect
                      id="category"
                      name="category"
                      options={
                        mainHomeLocation ? optionsExpenses : optionsIncome
                      }
                      value={values.category}
                      type={mainHomeLocation ? 'Product category' : 'Category'}
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
                        title="Sum must be whole numbers (or decimal numbers)"
                        placeholder={
                          viewPort.width > 767 ? '00.00' : '00.00UAH'
                        }
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
              {isSubmitting ? (
                <Loader />
              ) : (
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
              )}
            </FormBox>
          );
        }}
      </Formik>
    </>
  );
};

export default TransactionsForm;
