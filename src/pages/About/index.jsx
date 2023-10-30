import { Header } from '../../Components/Header';
import { Container, Box } from './styles';
import { Card } from '../../Components/Card';
import { Technologies } from '../Technologies';

// import { Technologies } from '../Technologies';
// import { Link } from 'react-router-dom';

export function About() {
  return (
    <>
      <Container>
        <Header />
        <Box>
          <p className="typing-animation">
            Desenvolvedor <span>Front-end</span>
          </p>
        </Box>

        <Card />
        <Technologies id="technologies" />
      </Container>

      {/* <div id="ola">Tecnologias</div> */}
    </>
  );
}
