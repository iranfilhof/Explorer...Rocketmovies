import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function ButtonBack({ title }) {
  return (
    <Container>
      <Link to={-1}>
        <FiArrowLeft />
        {title}
      </Link>
    </Container>
  )
}