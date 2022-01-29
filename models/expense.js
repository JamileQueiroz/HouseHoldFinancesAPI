const connection = require('../infrastructure/connection')

class Expense {
    add(expense, res) {
        const sql = 'INSERT INTO expense SET ?'

        connection.query(sql, expense, (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(201).json(results)
            }
            
        })
    }

    list(res) {
        const sql = 'SELECT * FROM Expense'

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

    searchId (id, res) {
        const sql = `SELECT * FROM Expense WHERE id=${id}`

        connection.query(sql, (error, results) => {
            const expense =  results[0]
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(expense)
            }
        })
    }

    alter(id, values, res) {
        const sql = 'UPDATE Expense SET ? WHERE id=?'

        connection.query(sql, [values, id], (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

    delet(id, res) {
        const sql = 'DELETE FROM Expense WHERE id=?'

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Expense