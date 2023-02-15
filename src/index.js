
const express = require("express");
const http = require('http');

// Version Routers
const virtualcardRoutes = require("./v2023-02-12/routes/virtualcardsRoutes");
const transactionRoutes = require("./v2023-02-12/routes/transactionsRoutes");

const app = express();
const PORT = process.env.NODE_ENV !== "test" ? 3000 : 

app.use(express.json());
app.use(function(req, res, next) {
    const acceptHeader = req.get("Accept")
   
    if(acceptHeader == null) {
        res.status(406).send({"error": "Accept Header Required"})
        return;
    }
    if(acceptHeader === "application/vnd.kwanhlee.v2023-02-12+json") {
        app.use("/api/virtualcards", virtualcardRoutes);
        app.use("/api/transactions", transactionRoutes);
        next();
    } else {
        res.status(406).send({"error": "Invalid API version in Accept Header"})
        return;
    }
})

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server


