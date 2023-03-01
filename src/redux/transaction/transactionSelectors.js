export const selectLoadingTransactions = state => state.transactions.isLoading;

export const selectAllTransactions = state =>
  state.transactions.allTransactions;

export const selectAllTransactionsReport = state => state.transactions.report;
