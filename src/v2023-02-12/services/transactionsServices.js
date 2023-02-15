
const transactionsData = require("../data/extendAPI/transactionsData");
const { TransactionDetail } = require("../models/extendAPI/transactionDetailModel");

const getTransactionDetail = async(authToken, transactionId) => {
    
    return transactionsData.getTransactionDetail(authToken, transactionId)
        .then(response => {
            const transactionDetails = new TransactionDetail(response.id, response.cardholderName, response.cardholderEmail, 
                response.recipientName, response.recipientEmail, response.nameOnCard,
                response.source, response.vcnLast4, response.vcnDisplayName, response.virtualCardId,
                response.status, response.authBillingAmountCents, response.authBillingCurrency, response.authExchangeRate,
                response.authMerchantAmountCents, response.authMerchantCurrency, response.clearingBillingAmountCents,
                response.clearingBillingCurrency, response.clearingMerchantAmountCents, response.clearingMerchantCurrency,
                response.clearingExchangeRate, response.merchantName, response.authedAt, response.updatedAt
                )
            return {"transactionDetails" : transactionDetails}
        })
        .catch(error => {
            const extendError = {
                status: error.response.status,
                title: "Extend API Error",
                message: error["code"],
            }
            throw(extendError);
        })
}

module.exports = {
    getTransactionDetail
}