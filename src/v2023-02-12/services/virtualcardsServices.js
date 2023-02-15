
const virtualcardsData = require("../data/extendAPI/virtualcardsData");
const { VirtualCard } = require("../models/extendAPI/virtualCardModel");
const { TransactionDetail } = require("../models/extendAPI/transactionDetailModel")

const getAllVirtualCards = async(authToken) => {

    return virtualcardsData.getAllVirtualCards(authToken)
        .then(virtualcardsData => {
            let cards = [];
            const responseCards = virtualcardsData.virtualCards;

            if(responseCards == null) {
                return {"virtualCards" : cards};
            } else {
                responseCards.forEach(responseCard => {
                    const card = new VirtualCard(responseCard.id, responseCard.status, responseCard.recipient, responseCard.cardholder,
                                                 responseCard.displayName, responseCard.expires, responseCard.currency, responseCard.limitCents,
                                                 responseCard.balanceCents, responseCard.spentCents, responseCard.lifetimeSpentCents, responseCard.last4,
                                                 responseCard.validFrom, responseCard.validTo, responseCard.inactiveSince, responseCard.creditCardId,
                                                 responseCard.pending, responseCard.createdAt, responseCard.updatedAt);
                    cards.push(card);
                })
            }
            return {"virtualCards" : cards}
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

const getTransactionsForVirtualCard = async(authToken, cardId, queryParameters) => {

    return virtualcardsData.getTransactionsForVirtualCard(authToken, cardId, queryParameters)
        .then(transactionsData => {
            let transactions = []
            const responseTransactions = transactionsData.transactions

            responseTransactions.forEach(responseTransaction => {
                const transaction = new TransactionDetail(responseTransaction.id, responseTransaction.cardholderName, responseTransaction.cardholderEmail, 
                    responseTransaction.recipientName, responseTransaction.recipientEmail, responseTransaction.nameOnCard,
                    responseTransaction.source, responseTransaction.vcnLast4, responseTransaction.vcnDisplayName, responseTransaction.virtualCardId,
                    responseTransaction.status, responseTransaction.authBillingAmountCents, responseTransaction.authBillingCurrency, responseTransaction.authExchangeRate,
                    responseTransaction.authMerchantAmountCents, responseTransaction.authMerchantCurrency, responseTransaction.clearingBillingAmountCents,
                    responseTransaction.clearingBillingCurrency, responseTransaction.clearingMerchantAmountCents, responseTransaction.clearingMerchantCurrency,
                    responseTransaction.clearingExchangeRate, responseTransaction.merchantName, responseTransaction.authedAt, responseTransaction.updatedAt
                    )
                transactions.push(transaction)
            })

            return {"transactions" : transactions};
        })
        .catch(error => {
            const extendError = {
                status: error.response.status,
                title: "Extend API Error",
                message: error["code"],
            }
            throw(extendError);
        })
    return;
}



module.exports = {
    getAllVirtualCards,
    getTransactionsForVirtualCard,
};