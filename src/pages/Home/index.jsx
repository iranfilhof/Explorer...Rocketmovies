import { Container, Add, Content } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { InputHeader } from '../../components/InputHeader'
import { FiPlus } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header>
        <InputHeader onChange={event => setSearch(event.target.value)}/>
      </Header>

        <Add>
          <h1>Meus filmes</h1>

          <Link to="/create">
            <button><FiPlus /> Adicionar filme</button>
          </Link>
        </Add>
      <main>
        <Content>
          {
            movies && movies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={movie} 
                onClick={() => handleDetails(movie.id)}
                />
            ))
          }
        </Content>
      </main>
    </Container>
  );
}