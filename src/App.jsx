import UserList from './components/UserList/index'
import UserForm from './components/UserForm/index'
import { useState, useEffect } from 'react'
import usersData from './db'
import './index.css'

function App() {
  const [users, setUsers] = useState(() => {
    try {
      const savedUsers = localStorage.getItem("users");
      return savedUsers ? JSON.parse(savedUsers) : usersData
    } catch (error) {
      console.error("Erro ao ler localstorage: ", error)
      return usersData
    }
 })

useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users))
}, [users])

  const addUser = (user) => {
    setUsers([...users, {...user, id: Date.now() }])
  }

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className='container'>
      <h1>Lista de Utilizadores</h1>
      <h2>Adicionar novo Utilizador</h2>
      <UserForm addUser={addUser} />
      <UserList users={users} removeUser={removeUser} />
    </div>
  )
}

export default App