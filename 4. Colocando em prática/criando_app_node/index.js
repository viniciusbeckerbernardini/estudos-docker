const express = require('express')()
const port = 8000

express.get('/', (req, res)=>{
	res.send('<h1>Full cycle</h1>')
})

express.listen(port,()=>{
	console.log('rodando, porta: ', port)	
})
