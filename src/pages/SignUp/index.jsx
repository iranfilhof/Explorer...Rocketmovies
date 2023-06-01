import { Container, Form, Background } from './styles'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiUser } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { VscLock } from 'react-icons/vsc'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonBack } from '../../components/ButtonBack'
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password}).then(
      () => {
        alert("Usuário cadastrado com sucesso!")
        navigate(-1)
      })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Crie sua conta</h3>
        <Input icon={FiUser} placeholder="Nome" onChange={event => setName(event.target.value)}/>
        <Input icon={HiOutlineMail} placeholder="E-mail"  onChange={event => setEmail(event.target.value)}/>
        <Input icon={VscLock} placeholder="Senha" onChange={event => setPassword(event.target.value)}/>
        <Button title="Cadastrar" onClick={handleSignUp}/>

        <ButtonBack title="Voltar para o login"/>
      </Form>
    </Container>
  )
}