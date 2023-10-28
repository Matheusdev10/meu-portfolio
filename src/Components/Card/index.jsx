import { api } from '../../services/api';
import { Container } from './styles';
import { useEffect, useState } from 'react';

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
          💡 Estou sempre tentando aprimorar minhas habilidades em HTML, CSS,
          JS, REACT, NODE e, buscando aprender sempre coisas novas;
        </p>
        <p>🚀 Estou sempre buscando novos desafios.</p>
      </section>
    </Container>
  );
}
