class VirtualCard {
    constructor(
        id,
        status,
        recipient,
        cardholder,
        displayName,
        expires,
        currency,
        limitCents,
        balanceCents,
        spentCents,
        lifetimeSpentCents,
        last4,
        validFrom,
        validTo,
        inactiveSince,
        creditCardId,
        pending,
        createdAt,
        updatedAt,
    ) {
        this.id = id
        this.status = status
        this.recipient = recipient
        this.cardholder = cardholder
        this.displayName = displayName
        this.expires = expires
        this.currency = currency
        this.limitCents = limitCents
        this.balanceCents = balanceCents
        this.spentCents = spentCents
        this.lifetimeSpentCents = lifetimeSpentCents
        this.last4 = last4
        this.validFrom = validFrom
        this.validTo = validTo
        this.inactiveSince = inactiveSince
        this.creditCardId = creditCardId
        this.pending = pending
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

module.exports = {
    VirtualCard
}