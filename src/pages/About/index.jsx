import { Header } from '../../Components/Header';
import { Container, Box } from './styles';
import { Card } from '../../Components/Card';

export function About({ id }) {
  return (
    <Container id={id}>
      <Header />
      <Box>
        <p className="typing-animation">
          Desenvolvedor <span>Front-end</span>
        </p>
      </Box>
      <Card />
    </Container>
  );
}
