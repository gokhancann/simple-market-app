const db = require('../models');
const Sales = db.sales;
const Op = db.Sequelize.Op;

// @desc    Get all sales
// @route   GET /api/v1/sales
// @access  Public
exports.findAll = (req, res) => {

    Sales.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// @desc    Get single sale
// @route   GET /api/sales/:id
// @access  Public
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(id.red)

    Sales.findAll({
        where: {
            ID: {
                [Op.eq]: req.params.id
            }
        }
    })
        .then(data => {
            res.send(
                {
                    success: true,
                    data: data
                }
            );
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sales."
            });
        });
};

// @desc    Create new sale
// @route   POST /api/v1/sales
// @access  Private
exports.create = (req, res) => {

};

// Update a sale by the id in the request
exports.update = (req, res) => {

};

// Delete a sale with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all sale from the database.
exports.deleteAll = (req, res) => {

};

// Find all published sale
exports.findAllPublished = (req, res) => {

};