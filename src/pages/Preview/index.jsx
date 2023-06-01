import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonBack } from '../../components/ButtonBack'
import { Button } from '../../components/Button'
import { Rating } from '../../components/Rating'
import { Tags } from '../../components/Tags'
import { TbClockHour3 } from 'react-icons/tb'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Preview() {
  const [data, setData] = useState(null)
  const { user } = useAuth()

  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  async function handleRemoveMovie() {
    const confirm = window.confirm("Deseja realmente excluir o filme?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchMovies()
  }, [])

  return (
    <Container>
      <Header />

      <ButtonBack title="Voltar"/>
      
      {
        data &&
        <main>

        <Content>
          <header>
            <h1>{data.title}</h1>

            <Rating grade={data.rating}/>

          </header>
            <div className="userDate">
              <img src={avatarUrl} alt="Foto do usuário" />
              <p>{user.name}</p>

              <span><TbClockHour3 />{data.created_at}</span>
            </div>

          <div className="tags">
            {
              data.tags.map(tag => (
                <Tags key={String(tag.id)} title={tag.name} />
              ))
              
            }
          </div>

          <p>
            {data.description}
          </p>
        </Content>

        <Button title="Excluir filme" onClick={handleRemoveMovie}/>
      </main>
      }

    </Container>
  )
}