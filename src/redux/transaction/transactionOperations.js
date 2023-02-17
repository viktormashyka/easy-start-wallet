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
            const { data: { transactions } } = await axios.get('/transactions');
            // const { transactions } = data; //??  //???
            console.log("contacts/getAllTransactions == >data.transactions:", transactions);
            return transactions;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


//!!! POST @ /transactions/expenses
export const addTransactionExpenses = createAsyncThunk(
    'transactions/addTransactionExpenses',
    // async ({ name, phone }, thunkAPI) => {
    async (credentials, thunkAPI) => {
        console.log("transactions/addTransactionExpenses ==> credentials:", credentials); //!
        try {
            const { data } = await axios.post('/transactions/expenses', credentials);
            console.log("transactions/addTransactionExpenses ==> data:", data); //!
            console.log("transactions/addTransactionExpenses ==> data.transaction:", data.transaction); //!
            return data.transaction;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 400" ? "Ошибка при создании контакта" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);




//!!! DELETE @ /transactions/:id
export const deleteTransaction = createAsyncThunk(
    'transactions/deleteTransaction',
    async (transactionId, thunkAPI) => {
        try {
            console.log("transactions/deleteTransaction ==> transactionId:", transactionId); //!
            const { data: { contactId } } = await axios.delete(`/transactions/${transactionId}`);
            console.log("transactions/deleteTransaction ==> contactId:", contactId); //!
            return contactId;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


//! PATCH @ /contacts/:id
export const editContact = createAsyncThunk(
    'contacts/editContact',
    // async ({ id, newName, newNumber }, thunkAPI) => { //! 1-й вариант
    // async ({ id: contactId, name, number }, thunkAPI) => { //! 2-й вариант
    async ({ id: contactId, name, phone }, thunkAPI) => { //! 2-й вариант
        // async (credentials, thunkAPI) => { //! 3-й вариант
        try {
            // console.log("contacts/editContact==>contactId:", contactId); //! 1-й и 2-й вариант
            // console.log("contacts/editContact==>name:", name); //! 2-й вариант
            // console.log("contacts/editContact==>number:", number); //! 2-й вариант
            // console.log("contacts/editContact==>credentials:", credentials); //! 3-й вариант
            // const response = await axios.patch(`/contacts/${id}`, { name: newName, number: newNumber }); //! 1-й вариант
            const { data } = await axios.patch(`/contacts/${contactId}`, { name, phone }); //! 2-й вариант
            // const response = await axios.patch(`/contacts/${credentials.id}`, { name: credentials.name, number: credentials.number }); //! 3-й вариант
            // console.log("editContact==>response.data", response.data); //!
            console.log("contacts/contacts/editContact ==> data:", data); //!
            console.log("contacts/contacts/editContact ==> data.contact:", data.contact); //!
            return data.contact;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 500" ? "Не удалось обновить контакт" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
