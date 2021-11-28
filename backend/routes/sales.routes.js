module.exports = app => {
    const sales = require("../controllers/sales.controller");

    var router = require("express").Router();

    // Retrieve all sales
    router.get("/", sales.findAll);

    // Retrieve a single sale with id
    router.get("/:id", sales.findOne);

    app.use('/api/sales', router);
};