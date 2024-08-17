// import React from 'react'
import { useState } from "react"
import axios from "axios"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState ('')
    const [user, setUser] = useState (null)

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post ('https://localhost:3000/login', 
                JSON.stringify ({ email, password }), 
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )

            console.log (response.data)
            setUser (response.data)
        } catch (error) {
            if (!error?.response) {
                setError ('Erro ao acessar o servidor!!')
            } else if (error.response.status == 401) {
                setError ('Usuário ou senha inválidos!!')
            }
        }
    }

    const handleLogout = async (event) => {
        event.preventDefault()
        setUser (null)
    }

  return (
    <div>
        <div className="login-form-wrap">
            {
                user == null ? (
                    <div>
                        <h1>Login</h1>
                        <form className="login-form">
                            <label htmlFor="email">Email:</label>
                            <input type="email" 
                                id="email" 
                                required 
                                onChange={(event) => setEmail (event.target.value)}
                            />

                            <label htmlFor="password">Password:</label>
                            <input type="password" 
                                id="password" 
                                required 
                                onChange={(event) => setPassword (event.target.value)}
                            />

                            <button type="submit" 
                                className="btn-login"
                                onClick={(event) => handleLogin (event)}
                                >
                                    Login
                            </button>

                            <p>{error}</p>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h1>Bem-vindo(a), {user.name}!</h1>
                        <button className="btn-logout" 
                            onClick={(event) => handleLogout (event)}
                        >
                            Logout
                        </button>
                    </div>
                )
            }
        </div>
  </div>
  )
}

export default Login