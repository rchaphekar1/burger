const connection = require('./connection.js');

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `select * from ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne(table, cols, vals, cb) {
        let queryString = `insert into burger values (?)`;
        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne(colToUpdate, valOfCol) {
        const queryString = 'select ?? from burger where ?? = ?';
        connection.query(queryString, [colToUpdate, colToUpdate, valOfCol], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;