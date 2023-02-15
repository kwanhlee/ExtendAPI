
const virtualcardsService = require("../services/virtualcardsServices");

const getAllVirtualCards = (req, res) => {

    const authToken = req.headers.authorization
    if(authToken == null) {
        res.status(400).send({"reason" :"Auth Token is required to make a call to ExtendAPI"})
        return;
    }

    virtualcardsService.getAllVirtualCards(authToken)
        .then(virtualCards => {
            res.status(200).send(virtualCards);
        })
        .catch(error => {
            res
                .status(error?.status || 500)
                .send({data: error});
        })
}

const getTransactionsForVirtualCard = (req, res) => {

    const cardId = req.params.cardId
    const { after, before, count, status } = req.query
    const queryParameters = { after, before, count, status };
    
    const validate = validateTransactionQuery(after, before, count, status);
    if(validate.status === "FAILED") {
        res.status(400).send(validate)
        return;
    }
    
    const authToken = req.headers.authorization
    if(authToken == null) {
        res.status(400).send({"reason" :"Auth Token is required to make a call to ExtendAPI"})
        return;
    }

    virtualcardsService.getTransactionsForVirtualCard(authToken, cardId, queryParameters)
        .then(transactions => {
            res.status(200).send(transactions)
        })
        .catch(error => {
            res
                .status(error?.status || 500)
                .send({data: error});
        })
}

const validateTransactionQuery = (after, before, count, status) => {
    const datePattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::\d{2})?([-+]\d{2}):(\d{2})$/
    
    if(after != null) {
        if(!datePattern.test(after)) {
            return {
                status: "FAILED",
                field: "after",
                reason: "must be of the format yyyy-MM-dd'T'HH:mm:ss.SSSZ",
            }
        }
    }
    if(before != null) {
        if(!datePattern.test(before)) {
            return {
                status: "FAILED",
                field: "before",
                reason: "must be of the format yyyy-MM-dd'T'HH:mm:ss.SSSZ",
            }
        }
    }
    if(count > 500 || count < 0) {
        return {
            status: "FAILED",
            field: "count",
            reason: "count must be a positive number smaller or equal to 500",
        }
    }
    if(status != null) {
        if(status != "PENDING" && status != "CLEARED" && status != "DECLINED") {
            return {
                status: "FAILED",
                field: "status",
                reason: "Status must be either 'PENDING', 'CLEARED', or 'DECLINED'",
            }
        }
    }
    return {
        status: "SUCCESS"
    }
}

module.exports = {
    getAllVirtualCards,
    getTransactionsForVirtualCard,
};