import { Container } from './styles'

export function InputHeader({...rest}) {
  return (
    <Container>
      <input placeholder='Pesquise pelo título' {...rest} />
    </Container>
  )
}