import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

import { HiOutlineMail } from 'react-icons/hi'
import { VscLock } from 'react-icons/vsc'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça seu login</h3>
        <Input icon={HiOutlineMail} placeholder="E-mail" type="text" onChange={event => setEmail(event.target.value)}/>
        <Input icon={VscLock} placeholder="Senha" type="password" onChange={event => setPassword(event.target.value)}/>
        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}