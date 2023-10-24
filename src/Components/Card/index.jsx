import { api } from '../../services/api';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
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
        Olá Pessoal! Meu nome é Matheus Campos e sou Desenvolvedor front-end.
        Meu principal objetivo como desenvolvedor é contruir interfaces que
        sejam bonitas e, ao mesmo tempo, simples na hora de dar manutenção.
        Ademais, estou sempre buscando novos desafios.
      </section>

      <div>
        <img src={github} alt="icone github" />
      </div>
      <div>
        <img src={linkedin} alt="icone linkedin" />
      </div>
    </Container>
  );
}
