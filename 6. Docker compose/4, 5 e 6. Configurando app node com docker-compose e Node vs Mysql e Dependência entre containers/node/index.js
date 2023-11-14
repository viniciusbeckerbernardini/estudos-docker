const express = require('express')()
const port = 9001

const config = {
	host:'db',
	user:'root',
	password:'root',
	database:'nodedb'
}

const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sql = "INSERT INTO people (name) VALUES ('VINICIUS')";

connection.query(sql);

connection.end();


express.get('/', (req, res)=>{
	res.send('<h1>Full cycle</h1>')
})

express.listen(port,()=>{
	console.log('rodando, porta: ', port)	
})
