const axiosHelper = require("../extendAPI/helpers/axiosHelper");
const headers = require("../extendAPI/constants/headers");
const urls = require("./constants/urlEndpoints");
const { buildUrl } = require("./helpers/urlBuilder");


// Can make this more generalized based on a response we want. We can pass in a JSON/XML or any types as a param
// Also versioning can go here too - version --> We could have another version choosing function to map constant to version number
const getAllVirtualCards = async(authToken) => {
    // Setup
    const url = urls.VIRTUALCARDS
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

const getTransactionsForVirtualCard = async(authToken, cardId, queryParameters) => {
    const url = urls.VIRTUALCARDS + "/" + cardId + urls.TRANSACTIONS
    const queryUrl = buildUrl(url, queryParameters)

    const config = {
        headers: {
            'Authorization': `${authToken}`,
            'Content-Type': headers.JSON_CONTENT_TYPE,
            'Accept': headers.ACCEPT_JSON_V2021_03_12,
            'Connection': "keep-alive"
        },
    };

    // Request
    return axiosHelper.get(queryUrl, config)
        .then(response => {
            return response;
        })
        .catch(error => {
            throw(error);
        })
}

module.exports = {
    getAllVirtualCards,
    getTransactionsForVirtualCard,
};
