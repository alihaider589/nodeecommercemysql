// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'nodeecommerce',
// })


// module.exports = pool.promise();


const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodeecommerce', 'root', 'root',
    {
        dialect: 'mysql',
        host: 'localhost'
    })

    module.exports= sequelize;