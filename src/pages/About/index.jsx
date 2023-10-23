import { Header } from '../../Components/Header';
import { Box } from './styles';
import { Card } from '../../Components/Card';

export function About() {
  return (
    <div>
      <Header />
      <Box>
        <p>
          Desenvolvedor <span>Front-end</span>
        </p>
      </Box>
      <Card />
    </div>
  );
}
