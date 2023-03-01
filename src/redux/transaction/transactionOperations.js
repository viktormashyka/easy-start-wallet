import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

//! axios defaults baseURL (возможно, это не надо, т.к. уже есть в authOperations.js)
// axios.defaults.baseURL = 'http://localhost:3033/api';
// axios.defaults.baseURL = 'https://contact-book-backend52.onrender.com/api';

//!!! GET @ /transactions
export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const {
        // data: { transactions },
        data,
      } = await axios.get('/transactions');
      // const { transactions } = data; //??  //???
      // console.log('contacts/getAllTransactions == >data.transactions:', data.transactions);
      await data.transactions.reverse();
      // console.log('contacts/getAllTransactions == >data.transactions.reverse():', data.transactions);
      return data.transactions;
      // return data;
    } catch (error) {
      console.log(error); //!
      toast.error(
        `Ошибка запроса: ${error.message === 'Request failed with status code 404'
          ? 'No such user collection'
          : error.message
        }`,
        { position: 'top-center', autoClose: 2000 }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!!! POST @ /transactions
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (credentials, thunkAPI) => {
    // console.log('transactions/addTransaction ==> credentials:', credentials); //!
    try {
      const { data } = await axios.post('/transactions', credentials);
      // console.log('transactions/addTransaction ==> data:', data); //!
      // console.log(
      //   'transactions/addTransaction ==> data.transaction:',
      //   data.transaction
      // ); //!
      return data;
    } catch (error) {
      console.log(error); //!
      toast.error(
        `Ошибка запроса: ${error.message === 'Request failed with status code 400'
          ? 'Error creating contact'
          : error.message
        }`,
        { position: 'top-center', autoClose: 2000 }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//!!! DELETE @ /transactions/:id
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      // console.log(
      //   'transactions/deleteTransaction ==> transactionId:',
      //   transactionId
      // ); //!
      // const {
      //   data: { contactId },
      // } = await axios.delete(`/transactions/${transactionId}`);
      const { data } = await axios.delete(`/transactions/${transactionId}`);
      // console.log('transactions/deleteTransaction ==> contactId:', contactId); //!
      // return contactId;
      // console.log('transactions/deleteTransaction ==> data:', data);
      return data;
    } catch (error) {
      console.log(error); //!
      toast.error(
        `Ошибка запроса: ${error.message === 'Request failed with status code 404'
          ? 'No such user collection'
          : error.message
        }`,
        { position: 'top-center', autoClose: 2000 }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getAllTransactionsReport = createAsyncThunk(
  'contacts/getAllTransactionsReport',
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/transactions/report?month=${month}&year=${year}`
      );
      // console.log('🚀 ~ file: operations.js:54 ~ response:', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
