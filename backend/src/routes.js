const express = require ('express')
const routes = express.Router()

const users = [
    {
        id: 1,
        name: 'Rafael',
        email: 'rafaelSilva@gmail.com',
        password: '12345'
    }, 
    {
        id: 2,
        name: 'Ana',
        email: 'anaCarolina@hotmail.com',
        password: '1234567'
    },
    {
        id: 3,
        name: 'João',
        email: 'joaoPaulo@gmail.com',
        password: '78910'
    }
]

routes.post ('/login', (requisition, response) => {
    const { email, password } = requisition.body

    const user = users.find 
        (user => user.email === email && user.password === password)

    if (user) {
        return response.status (200).json (user)
    }

    return response.status (401).json ({ message: 'Email ou senha invalidos!!' })
})

module.exports = routes