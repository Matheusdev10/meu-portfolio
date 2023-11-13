import { Header } from '../../Components/Header';
import { Container, Box } from './styles';
import { Card } from '../../Components/Card';
import { Technologies } from '../Technologies';
import { Projects } from '../Projects';
import { Contact } from '../Contact';

export function Home() {
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
        <Projects id="projects" />
        <Contact id="contacts" />
      </Container>
    </>
  );
}
