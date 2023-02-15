const axiosHelper = require("../extendAPI/helpers/axiosHelper");
const headers = require("../extendAPI/constants/headers");
const urls = require("./constants/urlEndpoints");
require("../../models/extendAPI/transactionDetailModel")

const getTransactionDetail = async(authToken, transactionId) => {
    const url = urls.TRANSACTIONS + "/" + transactionId

    const config = {
        headers: {
            'Authorization': `${authToken}`,
            'Content-Type': headers.JSON_CONTENT_TYPE,
            'Accept': headers.ACCEPT_JSON_V2021_03_12,
        },
    };

    // Request
    return axiosHelper.get(url, config)
        .then(response => {
            return response;
        })
        .catch(error => {
            throw(error);
        })
}

module.exports = {
    getTransactionDetail,
}