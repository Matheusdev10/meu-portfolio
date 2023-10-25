import { Container } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';

export function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

            <Link to="/technologies">
              <li>Tecnologias</li>
            </Link>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </section>
      </Container>
    </>
  );
}
