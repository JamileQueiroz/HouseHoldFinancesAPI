const Revenue = require('../models/revenue')


module.exports = app => {
    app.get('/revenue', (req, res) => {
        Revenue.list(res)
    })

    app.get('/revenue/:id', (req,res) => {
       const id = parseInt(req.params.id)

       Revenue.searchId(id, res)

    })

    app.post( '/revenue', (req, res) => {
        const revenue = req.body

        Revenue.add(revenue, res)

    })

    app.put('/revenue/:id', (req,res) => {
        const id = parseInt(req.params.id)

        const values = req.body

        Revenue.alter(id, values, res)
    })

    app.delete('/revenue/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Revenue.delet(id, res)
    })
}