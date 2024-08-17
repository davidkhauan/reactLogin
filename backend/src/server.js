const express = require ('express')
const app = express()
const routes = require ('./routes')
const cors = require ('cors')

app.use (express.json())
app.use (routes)
app.use (cors())

app.get ('/', (requistion, response) => {
    response.send ('Hello, World!')
})

app.listen (3000, () => {
    console.log ('Servidor está rodando: http://localhost:3000...')
})