const { Transaction } = require("../../models");
const { User } = require("../../models");

const { lineBreak } = require("../../services");


//-----------------------------------------------------------------------------
const addTransaction = async (req, res, next) => {
    // const transaction = await Transaction.create(req.body);

    const { id: userId } = req.user //?

    //* =============================console===================================
    console.log("addTransaction --> req.user:".bgYellow.red); //?
    // console.table(req.user); //?
    // console.table([req.user]);
    console.log(req.user);

    console.log("addTransaction --> userId:".bgYellow.blue, userId.bgGreen.blue); //?
    console.log("");

    console.log("addTransaction --> req.body:".bgYellow.red); //?
    // console.table(req.user); //?
    // console.table([req.user]);
    console.log(req.body);
    //* =======================================================================


    // const transaction = await Transaction.create({ transactionsType: expenses, ...req.body, owner: userId, }); //?
    const transaction = await Transaction.create({ ...req.body, owner: userId, }); //?


    //! ===========================console============================
    console.log("START-->POST".yellow); //!
    lineBreak();
    console.log(`НОВАЯ TransactionExpenses с ID: ${transaction.id}:`.bgYellow.blue); //!
    // console.table([contact]); //!
    console.log(transaction); //!
    lineBreak();
    console.log("END-->POST".yellow); //!
    lineBreak();
    //! ==============================================================

    //! Находим значение balance у user
    const user = await User.findOne({ _id: userId });
    const { balance } = user
    console.log(`Старый Баланс пользователя с ID: ${userId} = ${balance} UAN `.bgBlue.red); //!
    console.log();

    let balanceUpdate = 0
    //! Проверка на ВЫЧИТАТЬ/Expenses или СУММИРОВАТЬ/Income
    if (transaction.transactionsType === "expenses") {
        balanceUpdate = balance - transaction.sum
    } else {
        balanceUpdate = balance + transaction.sum
    }


    //! ЗАПИСЬ нового значения balance в user
    const userUpdate = await User.findByIdAndUpdate(req.user._id, { balance: Number(balanceUpdate) }, { new: true });

    //! как вариант дублирования user.balance (пока не надо)
    const { balance: balanceNew } = userUpdate;
    console.log(`Новый БАЛАНС пользователя с ID: ${userId} = ${balanceNew} UAN `.bgBlue.red); //!


    res.status(201).json({
        transaction,
        // balanceNew //! как вариант дублирования user.balance (пока не надо)
    });
};

module.exports = addTransaction;