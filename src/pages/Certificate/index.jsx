import { Container } from './styles';

import explorer from '../../assets/images/explorer.png';

export function Certificate({ id }) {
  return (
    <Container id={id}>
      <h4>Certificados</h4>
      <p>
        Certificado de formação do curso explorer da <span>Rocketseat</span>
      </p>
      <div className="certificate">
        <img src={explorer} alt="" />
      </div>
    </Container>
  );
}
