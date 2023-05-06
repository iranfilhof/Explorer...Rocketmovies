import { Container, Profile } from './styles'
import { InputHeader } from '../InputHeader'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>

      <InputHeader />

      <Link to="/profile">
        <Profile>
          <div>
            <span>Iran Filho</span>
            <p>sair</p>
          </div>

          <img src="https://github.com/iranfilhof.png" alt="Foto do usuário" />
        </Profile>
      </Link>
    </Container>
  )
};
