const Expense = require('../models/expense')


module.exports = app => {
    app.get('/expense', (req, res) => {
        Expense.list(res)
    })

    app.get('/expense/:id', (req,res) => {
       const id = parseInt(req.params.id)

       Expense.searchId(id, res)

    })

    app.post( '/expense', (req, res) => {
        const expense = req.body

        Expense.add(expense, res)

    })

    app.put('/expense/:id', (req,res) => {
        const id = parseInt(req.params.id)

        const values = req.body

        Expense.alter(id, values, res)
    })

    app.delete('/expense/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Expense.delet(id, res)
    })
}