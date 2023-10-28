import { Container } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
// import { useNavigate, Link } from 'react-router-dom';

export function Header() {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

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
            <a href="about">
              <li>Sobre mim</li>
            </a>
            <a href="#technologies">
              <li>Tecnologias</li>
            </a>
            <a href="#projects">
              <li>Projetos</li>
            </a>
            <a href="#contacts">
              <li>Contato</li>
            </a>
          </ul>
        </section>
      </Container>
    </>
  );
}
