import React from "react"
import './style.css'

export default function UserList({ users, removeUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong className="name-user">{user.name}</strong> - 
          <span className="age-user">{user.age} anos</span> - 
          <span className="phone-user">✆ {user.phone}</span> 
          <span className="gender-user">({user.gender})</span>
          <button className="delete-btn" onClick={() => removeUser(user.id)} style={{ marginLeft: "10px" }}>
            ✘
          </button>
        </li>
      ))}
    </ul>
  )
}