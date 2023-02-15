const axios = require("axios")

const API_URL = "https://api.paywithextend.com"

const axiosApi = axios.create({
    baseURL: API_URL,
})

async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
}

async function post(url, data, config = {}) {
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then(response => response.data)
}

module.exports = {
    get,
    post,
}