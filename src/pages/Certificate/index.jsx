import { Container } from './styles';
// import iconGit from '../../assets/iconGit.svg';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import explorer from '../../assets/images/explorer.png';

export function Certificate({ id }) {
  return (
    <Container id={id}>
      <h4>Certificados</h4>
      <p>Certificado concebido do curso explorer da rocketseat</p>
      <div className="certificate">
        <img src={explorer} alt="" />
      </div>
    </Container>
  );
}
