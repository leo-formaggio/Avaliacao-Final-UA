import React from "react"
import './style.css'

export default function UserForm({ addUser }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const age = e.target.age.value
    const phone = e.target.phone.value
    const gender = e.target.gender.value

    if (!name || !age || !phone || !gender) {
      alert("Preencha todos os campos!")
      return
    }

    addUser({ name, age, phone, gender })
    e.target.reset()
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
      <input type="text" name="name" placeholder="Nome" />
      <input type="number" name="age" placeholder="Idade" />
      <input type="text" name="phone" placeholder="Telefone" />
      <select name="gender" defaultValue="">
        <option value="" disabled>Selecione o género</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Prefiro não informar">Prefiro não informar</option>
      </select>
      <div className="add-btn">
        <button type="submit">Adicionar</button>
      </div>
    </form>
  )
}