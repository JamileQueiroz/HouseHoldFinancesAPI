const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const tables = require('./infrastructure/tables')

connection.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('connected')


        tables.init(connection)
        const app = customExpress()

        app.listen(3000, () => console.log('API works'))
    }
})


