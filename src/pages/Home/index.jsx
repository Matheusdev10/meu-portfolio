import { Header } from '../../Components/Header';
import { Container, Box } from './styles';
import { Card } from '../../Components/Card';
import { Technologies } from '../Technologies';
import { Projects } from '../Projects';
import { Certificate } from '../Certificate';
import { About } from '../About';

export function Home() {
  return (
    <>
      <Container>
        <About id="about" />

        <Technologies id="technologies" />
        <Projects id="projects" />
        <Certificate id="certificate" />
      </Container>
    </>
  );
}
