import { api } from '../../services/api';
import { Container } from './styles';
import { useEffect, useState } from 'react';

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export function Card() {
  const [user, setUser] = useState(null);

  async function getUser() {
    try {
      const response = await api.get('/matheusdev10');
      setUser(response.data);
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <img src={user?.avatar_url} alt="imagem de perfil Matheus" />

      <section>
        <p>
          👋 Olá! Meu nome é Matheus Campos e sou Desenvolvedor front-end
          apaixonado por tecnologia;
        </p>
        <p>
          👨‍💻 Meu principal objetivo como desenvolvedor é criar interfaces que
          sejam bonitas, e ao mesmo tempo fáceis na hora de dar manutenção;
        </p>
        <p>
          💡 Aprimorando minhas habilidades em
          <span> HTML, CSS, JS, REACT, NODE </span> no entanto, estou sempre
          aberto e disposto a aprender novas techs.
        </p>
        <p>🚀 Buscando minha melhor versão todos os dias.</p>
        <div className="social-network">
          <div className="icon-git">
            <a href="https://github.com/matheusdev10" target="_blank">
              <BsGithub fill="#90EE90" size={40} />
            </a>
          </div>

          <div className="icon-linkedin">
            <a href="https://www.linkedin.com/in/matheus-campos-495149201/">
              <BsLinkedin fill="#90EE90" size={40} />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
