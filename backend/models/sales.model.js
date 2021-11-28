module.exports = (sequelize, Sequelize) => {
    const Sales = sequelize.define("masterdata", {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        ITEMCODE: {
            type: Sequelize.STRING
        },
        FICHENO: {
            type: Sequelize.STRING
        },
        DATE_: {
            type: Sequelize.DATE
        },
        AMOUNT: {
            type: Sequelize.INTEGER
        },
        PRICE: {
            type: Sequelize.INTEGER
        },
        LINENETTOTAL: {
            type: Sequelize.INTEGER
        },
        LINENET: {
            type: Sequelize.INTEGER
        },
        BRANCHNR: {
            type: Sequelize.INTEGER
        },
        SALESMAN: {
            type: Sequelize.STRING
        },
        BRANCHNR: {
            type: Sequelize.INTEGER
        },
        LATITUDE: {
            type: Sequelize.FLOAT
        },
        LATITUDE: {
            type: Sequelize.FLOAT
        },
        LONGITUDE: {
            type: Sequelize.FLOAT
        },
        CLIENTCODE: {
            type: Sequelize.INTEGER
        },
        CLIENTNAME: {
            type: Sequelize.STRING
        },
        BRANDCODE: {
            type: Sequelize.STRING
        },
        STARTDATE: {
            type: Sequelize.DATE
        },
        ENDDATE: {
            type: Sequelize.DATE
        },
        GENDER: {
            type: Sequelize.STRING
        },
        CITYID: {
            type: Sequelize.INTEGER
        },
        REGIONID: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false,
    }



    );

    return Sales;
};