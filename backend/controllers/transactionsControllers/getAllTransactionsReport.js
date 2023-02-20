const { Transaction } = require('../../models');
const { User } = require('../../models');

const { Unauthorized } = require('http-errors');

const getAllTransactionsReport = async (req, res) => {
  // const transactions = await Contact.Transaction({});

  const { month: theMonth = 1, year: theYear = 2000 } = req.query;

  //   const limit = 1;
  //   const skip = (theMonth - 1) * limit;
  let normalizedMonth = theMonth.toString().padStart(2, '0');

  const { id: userId } = req.user;

  const user = await User.findOne({ _id: userId });
  const { balance } = user;
  console.log(
    '🚀 ~ file: getAllTransactionsReport.js:23 ~ getAllTransactionsReport ~ balance',
    balance
  );

  const transactions = await Transaction.find({ owner: userId })
    .sort('date') //! сортировка по полю "sum"
    .select({ owner: 0, updatedAt: 0 }); //! не показывать эти поля

  const filterTransactions = transactions.filter(transaction => {
    const dateString = transaction.date;
    const [year, month, day] = dateString.split('-');

    if (month === normalizedMonth && year === theYear) {
      return true;
    }

    return false;
  });
  console.log(
    '🚀 ~ file: getAllTransactionsReport.js:57 ~ filterTransactions ~ filterTransactions',
    filterTransactions
  );

  res.status(200).json({ balance, filterTransactions });
};

module.exports = getAllTransactionsReport;
