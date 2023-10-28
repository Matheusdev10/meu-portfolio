import imgGit from '../../assets/github.png';
import { Container } from './styles';
export function Technologies({ id }) {
  return (
    <Container id={id}>
      <h1>Tecnologias</h1>
      <img src={imgGit} alt="" />
    </Container>
  );
}
