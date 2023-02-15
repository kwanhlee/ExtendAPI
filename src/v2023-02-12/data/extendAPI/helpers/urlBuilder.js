
const buildUrl = (url, queryParameters) => {
    let searchParams = new URLSearchParams();

    Object.entries(queryParameters).forEach(([key, value]) => {
        if(value != null) {
            searchParams.append(key, value);
        }
    });
    
    return `${url}?${searchParams.toString()}`
}

module.exports = {
    buildUrl
}