import { Container, Profile } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Header({children}) {
  const { signOut, user } = useAuth()


  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  
  return (
    <Container>
      <h2>RocketMovies</h2>

        {children}

        <Profile>
          <div>
            <Link to="/profile">
              <span>{user.name}</span>
            </Link>
            <button type='button' onClick={handleSignOut}>
              <p>sair</p>
            </button>
          </div>

          <img src={avatarUrl} alt="Foto do usuário" />
        </Profile>
    </Container>
  )
};
