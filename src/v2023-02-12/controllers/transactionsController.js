const transactionsService = require("../services/transactionsServices");

const getTransactionDetail = (req, res) => {

    const transactionId = req.params.transactionId
    const authToken = req.headers.authorization

    if(authToken == null) {
        res.status(400).send({"reason" :"Auth Token is required to make a call to ExtendAPI"})
        return;
    }
    
    transactionsService.getTransactionDetail(authToken, transactionId)
        .then(transactionDetail => {
            res.status(200).send(transactionDetail)
        })
        .catch(error => {
            res
                .status(error?.status || 500)
                .send({data: error});
        })
}

module.exports = {
    getTransactionDetail,
}