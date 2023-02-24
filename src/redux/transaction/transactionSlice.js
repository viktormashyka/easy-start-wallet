import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';
import {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
  getAllTransactionsReport,
  // editContact,
  // fetchContactsFromMmockapiIo,
  // deleteContactFromMmockapiIo
  // AddUploadContacts
} from './transactionOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isDeleting = false;
  state.error = payload;
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    // transaction: {
    //     transactionsType: "",
    //     date: "",
    //     dateFilter: "",
    //     description: "",
    //     category: "",
    //     sum: null,
    // },
    allTransactions: [],
    report: {},
    isLoading: false,
    isDeleting: false,
    error: null,
  },
  extraReducers: {
    [getAllTransactions.pending]: handlePending,
    [addTransaction.pending]: handlePending, //!!!
    [deleteTransaction.pending]: handlePending,
    [getAllTransactionsReport.pending]: handlePending,
    // [editContact.pending]: handlePending,
    // [fetchContactsFromMmockapiIo.pending]: handlePending,
    // [deleteContactFromMmockapiIo.pending]: handlePending,

    [getAllTransactions.rejected]: handleRejected,
    [addTransaction.rejected]: handleRejected, //!!!
    [deleteTransaction.rejected]: handleRejected,
    [getAllTransactionsReport.rejected]: handleRejected,
    // [editContact.rejected]: handleRejected,
    // [fetchContactsFromMmockapiIo.rejected]: handleRejected,
    // [deleteContactFromMmockapiIo.rejected]: handleRejected,

    //!!!
    [getAllTransactions.fulfilled](state, { payload }) {
      console.log('getAllTransactions.fulfilled --> payload:', payload); //!
      state.allTransactions = payload;
      state.isLoading = false;
      state.error = null;
    },
    //!!!
    [addTransaction.fulfilled](state, { payload }) {
      console.log('addTransaction.fulfilled --> payload:', payload); //!
      // state.transaction = payload; //! Пишет весь объект transaction
      // state.transaction.transactionsType = payload.transactionsType
      // state.transaction.date = payload.date
      // state.transaction.dateFilter = payload.dateFilter
      // state.transaction.description = payload.description
      // state.transaction.category = payload.category
      // state.transaction.sum = payload.sum
      state.allTransactions.push(payload.transaction);
      state.isLoading = false;
      state.error = null;
    },

    //!!!
    [deleteTransaction.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      //! вариант Репеты:
      // const index = state.items.findIndex(task => task.id === payload);
      // state.items.splice(index, 1);
      //! МОЙ вариант:
      // const newContact = state.items.filter(contact => contact.id !== payload);
      console.log('deleteTransaction==>payload:', payload.transactionId); //!
      // state.items = state.items.filter(contact => contact.id !== payload); //??
      state.allTransactions = state.allTransactions.filter(
        transaction => transaction._id !== payload.transactionId
      );
      // console.log("deleteTransaction==>state.items:", state.items); //!
      // state = { items: newContact }
    },

    [getAllTransactionsReport.fulfilled](state, { payload }) {
      console.log('getAllTransactionsReport.fulfilled --> payload:', payload); //!
      state.report = payload;
      state.isLoading = false;
      state.error = null;
    },

    // [editContact.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.error = null;
    //   // console.log("editContact==>payload:", payload); //!
    //   // console.log("state.items:", state.items); //!
    //   // const index = state.items.findIndex(task => task.id === payload.id); //??
    //   const index = state.items.findIndex(task => task._id === payload._id);
    //   // console.log("index:", index); //!
    //   // console.log("state.items[index]:", state.items[index]); //!
    //   state.items.splice(index, 1, payload);
    // },

    // [fetchContactsFromMmockapiIo.fulfilled](state, { payload }) {
    //     state.isLoading = false;
    //     state.error = null;
    //     // state.uploadContacts = payload;
    //     const newUploadContacts = payload.map(item => {
    //         return {
    //             id: item.id,
    //             name: item.name,
    //             number: item.phone
    //         };
    //     });
    //     // console.log("fetchContactsFromMmockapiIo ==> newUploadContacts:", newUploadContacts); //!
    //     state.uploadContacts = newUploadContacts;
    // },

    // [deleteContactFromMmockapiIo.fulfilled](state, { payload }) {
    //     state.isLoading = false;
    //     state.error = null;
    //     //! МОЙ вариант:
    //     // const newContact = state.uploadContacts.filter(contact => contact.id !== payload);
    //     // console.log("deleteContact==>payload:", payload); //!
    //     state.uploadContacts = state.uploadContacts.filter(contact => contact.id !== payload);
    //     // state = { uploadContacts: newContact }
    // },

    // [AddUploadContacts.fulfilled](state, { payload }) {
    //     state.isLoading = false;
    //     state.error = null;
    //     const newUploadContacts = payload.map(item => {
    //         return {
    //             id: item.id,
    //             name: item.name,
    //             number: item.phone
    //         };
    //     });
    //     state.items = [...state.items, ...newUploadContacts]
    // },

    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
