import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonBack } from '../../components/ButtonBack'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { CreateItem } from '../../components/CreateItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function Create() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title || !rating || !description) {
      return alert("Preencha todos campos!")
    }
    
    if(tags.length === 0) {
      return alert("O filme precisa necessariamente de marcadores! (Dica: Os marcadores podem ser o gênero do filme)")
    }

    if(newTag) {
      return alert("Você esqueceu de clicar no '+' para adcionar seu marcador!")
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    })

    alert("Novo filme cadastrado com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      
        <ButtonBack title="Voltar"/>

      <main>
        <Content>
          <h1>Novo filme</h1>

          <div className="inputs">
            <Input placeholder="Título" onChange={event => setTitle(event.target.value)}/>
            <Input placeholder="Sua nota (de 0 a 5)" onChange={event => setRating(event.target.value)}/>
          </div>

          <textarea placeholder='Observações' onChange={event => setDescription(event.target.value)}></textarea>

          <h3>Marcadores</h3>

          <div className="marks">
            
            {
             tags && tags.map((tag, index) => (
                <CreateItem key={String(index)} value={tag} onClick={() => {handleRemoveTag(tag)}}/>
              ))
            }

            <CreateItem isNew placeholder="Novo marcador" value={newTag} onChange={event => setNewTag(event.target.value)} onClick={handleAddTag}/>
          </div>

          <div className="buttons">
            <Button title="Salvar alterações" onClick={handleNewNote}/>
          </div>
        </Content>
      </main>
    </Container>
  )
}