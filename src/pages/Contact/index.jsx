import { Container } from './styles';
// import iconGit from '../../assets/iconGit.svg';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import explorer from '../../assets/images/explorer.png';

export function Contact({ id }) {
  return (
    <Container id={id}>
      <h3>Contato</h3>
      <p>Bora bater um papo?</p>
      <div className="boxIcons">
        <div className="gitIcon">
          <a href="https://github.com/matheusdev10">
            {/* <img src={iconGit} alt="" /> */}
            <BsGithub size={30} fill="#90EE90" />
          </a>
        </div>
        <div className="linkedinIcon">
          <a href="https://www.linkedin.com/in/matheus-campos-495149201/">
            <BsLinkedin size={30} fill="#90EE90" />
          </a>
        </div>
        <div className="whatsappIcon">
          <a
            href="https://wa.me/5534988869144?text=Fala dev tudo bem? Adorei seu site, que tal batermos um papo? "
            target="_blank"
          >
            <BsWhatsapp size={30} fill="#90EE90" />
          </a>
        </div>
      </div>
      <div>
        <img src={explorer} alt="" />
      </div>
    </Container>
  );
}
