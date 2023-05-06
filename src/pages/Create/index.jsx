import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonBack } from '../../components/ButtonBack'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { CreateItem } from '../../components/CreateItem'

export function Create() {
  return (
    <Container>
      <Header />
      
        <ButtonBack title="Voltar"/>

      <main>
        <Content>
          <h1>Novo filme</h1>

          <div className="inputs">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>

          <textarea placeholder='Observações'></textarea>

          <h3>Marcadores</h3>

          <div className="marks">
            <CreateItem value="React"/>
            <CreateItem isNew placeholder="Novo marcador"/>
          </div>

          <div className="buttons">
            <Button title="Excluir filme" className="delete"/>
            <Button title="Salvar alterações"/>
          </div>
        </Content>
      </main>
    </Container>
  )
}