import { Container, Form, Background } from './styles'

import { FiUser } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { VscLock } from 'react-icons/vsc'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonBack } from '../../components/ButtonBack'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Crie sua conta</h3>
        <Input icon={FiUser} placeholder="Nome"/>
        <Input icon={HiOutlineMail} placeholder="E-mail"/>
        <Input icon={VscLock} placeholder="Senha"/>
        <Button title="Cadastrar"/>

        <ButtonBack title="Voltar para o login"/>
      </Form>
    </Container>
  )
}