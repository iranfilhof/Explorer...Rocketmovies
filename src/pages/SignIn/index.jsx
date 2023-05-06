import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'

import { HiOutlineMail } from 'react-icons/hi'
import { VscLock } from 'react-icons/vsc'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça seu login</h3>
        <Input icon={HiOutlineMail} placeholder="E-mail"/>
        <Input icon={VscLock} placeholder="Senha"/>
        <Button title="Entrar"/>

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}