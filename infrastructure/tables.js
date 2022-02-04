class tables {
    init(connection) {
        this.connection = connection

        this.createTableRevenue()
        this.createTableExpense()

    }

    createTableRevenue() {
        const sql = 'CREATE TABLE IF NOT EXISTS Revenue (id int NOT NULL AUTO_INCREMENT, salary decimal(7,2) NOT NULL, currency char(3) NOT NULL , date date NOT NULL, description text NOT NULL, PRIMARY KEY(id))'

        this.connection.query(sql, error => {
            if(error) {
                console.log(error)
            } else {
                console.log('table Revenue was created!')
            }
        })
    }

    createTableExpense() {
        const sql = 'CREATE TABLE IF NOT EXISTS Expense (id int NOT NULL AUTO_INCREMENT, value decimal(7,2) NOT NULL, currency char(3) NOT NULL , date date NOT NULL, category ENUM ("Food","Health","Home","Transport","Education","Leisure","Unforeseen","Others") DEFAULT "Others", description text NOT NULL, PRIMARY KEY(id))'
           
        this.connection.query(sql, error => {
            if(error) {
                console.log(error)
            } else {
                console.log('table Expense was created!')
            }
        })
    }       

}


module.exports = new tables
