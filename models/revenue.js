const connection = require('../infrastructure/connection')

class Revenue {
    add(revenue, res) {
        const sql = 'INSERT INTO revenue SET ?'

        connection.query(sql, revenue, (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(201).json(results)
            }
            
        })
    }

    list(res) {
        const sql = 'SELECT * FROM Revenue'

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

    searchId (id, res) {
        const sql = `SELECT * FROM Revenue WHERE id=${id}`

        connection.query(sql, (error, results) => {
            const revenue =  results[0]
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(revenue)
            }
        })
    }

    alter(id, values, res) {
        const sql = 'UPDATE Revenue SET ? WHERE id=?'

        connection.query(sql, [values, id], (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

    delet(id, res) {
        const sql = 'DELETE FROM Revenue WHERE id=?'

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Revenue