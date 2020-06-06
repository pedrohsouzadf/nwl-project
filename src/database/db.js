//importar a depêndencia do SQLite3

const sqlite3 = require("sqlite3").verbose()

//iniciando-criando objeto do banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados para minha operação

//db.serialize(() => {

    //com comando SQL:
    // criando tabela
  /*  db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserindo dados na tabela

    const query = `
        INSERT INTO places (
            image, 
            name, 
            address, 
            address2, 
            state, 
            city, 
            items
        ) VALUES (?,?,?,?,?,?,?);    
    `
    
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData) */

    //consultando dados na tabela

    /*db.all(`SELECT name FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Aqui estão os registros")
        console.log(rows)
    })
    */

    
    //deletando dados na tabela

    /*db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
        if(err){
            return console.log(err)
        }

        console.log("Registro deletado com sucesso")
        })
    */
        
//}) 