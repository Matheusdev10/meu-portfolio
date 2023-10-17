import { Container } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Header() {
  const [user, setUser] = useState(null);

  async function getUser() {
    try {
      const response = await api.get('/matheusdev10');
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Container>
        <div>
          <img src={user?.avatar_url} alt="imagem de perfil Matheus" />
          <p>{`${user?.name} Campos`}</p>
        </div>

        <section>
          <ul>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </section>
      </Container>
    </>
  );
}
