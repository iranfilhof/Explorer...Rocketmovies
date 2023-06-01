import { Container } from './styles'
import { Tags } from '../Tags'
import { Rating } from '../Rating'


export function Movie({ rating, data, ...rest}) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Rating grade={data.rating}/>
      <p>{data.description}</p>

      <div className='tags'>
        {data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)}
      </div>
    </Container>
  )
}