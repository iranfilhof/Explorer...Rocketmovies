import { Container, Add, Content } from './styles'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />

        <Add>
          <h1>Meus filmes</h1>

          <Link to="/create">
            <button><FiPlus /> Adicionar filme</button>
          </Link>
        </Add>
      <main>
        <Content>
          <Movie
            rating={3}
            data={{
            title: 'Interestellar',

            text: `Pragas nas colheitas fizeram a civilização humana 
            regredir para uma sociedade agrária em futuro de data desconhecida. 
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. 
            Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida 
            que está enviando mensagens codificadas através de radiação gravitacional, 
            deixando coordenadas em binário que os levam até uma instalação secreta da 
            NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem 
            oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" 
            enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando 
            o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas 
            que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar 
            os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. 
            A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada 
            pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, 
            porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar 
            tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. 
            Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano 
            raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta 
            recuperar os dados de Miller, matando Doyle e atrasando a partida. 
            Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.`,

            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
            }} />
            
          <Movie 
          rating={4}
          data={{
            title: 'Mad Max: Estrada da Fúria',

            text: `Perseguido pelo seu turbulento passado, 
            Max Rockatansky (Tom Hardy) acredita que a melhor forma de sobreviver 
            é não depender de mais ninguém além de si próprio. 
            Ainda assim, acaba por se juntar a um grupo de rebeldes que atravessa a Wasteland, 
            numa máquina de guerra conduzida por uma Imperatriz de elite, Furiosa (Charlize Theron). 
            Este bando está em fuga de uma Cidadela tiranizada por Immortan Joe (Hugh Keays-Byrne), 
            a quem algo insubstituível foi roubado. Desesperado com a sua perda, 
            o Senhor da Guerra reúne o seu exército e inicia uma impiedosa perseguição aos rebeldes 
            e a mais implacável Guerra na Estrada de sempre.`,

            tags: [
              {id: '1', name: 'Ação'},
              {id: '2', name: 'Ficção Científica'}
            ]
            }} />

          <Movie 
          rating={4}
          data={{
            title: 'Interestellar',

            text: `Pragas nas colheitas fizeram a civilização humana 
            regredir para uma sociedade agrária em futuro de data desconhecida. 
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. 
            Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida 
            que está enviando mensagens codificadas através de radiação gravitacional, 
            deixando coordenadas em binário que os levam até uma instalação secreta da 
            NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem 
            oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" 
            enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando 
            o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas 
            que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar 
            os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. 
            A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada 
            pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, 
            porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar 
            tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. 
            Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano 
            raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta 
            recuperar os dados de Miller, matando Doyle e atrasando a partida. 
            Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.`,

            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
            }} />
          <Movie 
          rating={4}
          data={{
            title: 'Interestellar',

            text: `Pragas nas colheitas fizeram a civilização humana 
            regredir para uma sociedade agrária em futuro de data desconhecida. 
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. 
            Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida 
            que está enviando mensagens codificadas através de radiação gravitacional, 
            deixando coordenadas em binário que os levam até uma instalação secreta da 
            NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem 
            oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" 
            enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando 
            o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas 
            que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar 
            os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. 
            A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada 
            pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, 
            porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar 
            tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. 
            Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano 
            raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta 
            recuperar os dados de Miller, matando Doyle e atrasando a partida. 
            Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.`,

            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
            }} />
          <Movie 
          rating={4}
          data={{
            title: 'Interestellar',

            text: `Pragas nas colheitas fizeram a civilização humana 
            regredir para uma sociedade agrária em futuro de data desconhecida. 
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. 
            Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida 
            que está enviando mensagens codificadas através de radiação gravitacional, 
            deixando coordenadas em binário que os levam até uma instalação secreta da 
            NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem 
            oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" 
            enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando 
            o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas 
            que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar 
            os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. 
            A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada 
            pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, 
            porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar 
            tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. 
            Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano 
            raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta 
            recuperar os dados de Miller, matando Doyle e atrasando a partida. 
            Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.`,

            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
            }} />
          <Movie 
          rating={4}
          data={{
            title: 'Interestellar',

            text: `Pragas nas colheitas fizeram a civilização humana 
            regredir para uma sociedade agrária em futuro de data desconhecida. 
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. 
            Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida 
            que está enviando mensagens codificadas através de radiação gravitacional, 
            deixando coordenadas em binário que os levam até uma instalação secreta da 
            NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem 
            oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" 
            enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando 
            o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas 
            que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar 
            os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. 
            A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada 
            pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, 
            porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar 
            tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. 
            Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano 
            raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta 
            recuperar os dados de Miller, matando Doyle e atrasando a partida. 
            Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.`,

            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
            }} />
          <Movie 
          rating={2}
          data={{
            title: 'Interestellar',

            text: `Pragas nas colheitas fizeram a civilização humana 
            regredir para uma sociedade agrária em futuro de data desconhecida. 
            Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto 
            está assombrado por um fantasma que tenta se comunicar com ela. 
            Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida 
            que está enviando mensagens codificadas através de radiação gravitacional, 
            deixando coordenadas em binário que os levam até uma instalação secreta da 
            NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem 
            oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" 
            enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando 
            o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas 
            que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar 
            os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir 
            para ele na instalação da NASA, que é na realidade uma enorme estação espacial. 
            A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada 
            pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, 
            além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, 
            porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar 
            tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. 
            Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano 
            raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta 
            recuperar os dados de Miller, matando Doyle e atrasando a partida. 
            Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.`,

            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
            }} />
        </Content>
      </main>
    </Container>
  );
}