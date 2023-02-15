
class TransactionDetail {
    constructor(
        id, 
        cardholderName, 
        cardholderEmail, 
        recipientName, 
        recipientEmail,
        nameOnCard,
        source,
        vcnLast4,
        vcnDisplayName,
        virtualCardId,
        status,
        authBillingAmountCents,
        authBillingCurrency,
        authExchangeRate,
        authMerchantAmountCents,
        authMerchantCurrency,
        clearingBillingAmountCents,
        clearingBillingCurrency,
        clearingMerchantAmountCents,
        clearingMerchantCurrency,
        clearingExchangeRate,
        merchantName,
        authedAt,
        updatedAt,
    ) {
        this.id = id
        this.cardholderName = cardholderName
        this.cardholderEmail = cardholderEmail
        this.recipientName = recipientName
        this.recipientEmail = recipientEmail
        this.nameOnCard = nameOnCard
        this.source = source
        this.vcnLast4 = vcnLast4
        this.vcnDisplayName = vcnDisplayName
        this.virtualCardId = virtualCardId
        this.status = status
        this.authBillingAmountCents = authBillingAmountCents
        this.authBillingCurrency = authBillingCurrency
        this.authExchangeRate = authExchangeRate
        this.authMerchantAmountCents = authMerchantAmountCents
        this.authMerchantCurrency = authMerchantCurrency
        this.clearingBillingAmountCents = clearingBillingAmountCents
        this.clearingBillingCurrency = clearingBillingCurrency
        this.clearingMerchantAmountCents = clearingMerchantAmountCents
        this.clearingMerchantCurrency = clearingMerchantCurrency
        this.clearingExchangeRate = clearingExchangeRate
        this.merchantName = merchantName
        this.authedAt = authedAt
        this.updatedAt = updatedAt
    }
}

module.exports = {
    TransactionDetail,
}