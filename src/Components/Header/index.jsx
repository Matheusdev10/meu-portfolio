import { Container } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// import { useNavigate, Link } from 'react-router-dom';

export function Header() {
  const [user, setUser] = useState(null);
  const [isClose, setIsClose] = useState(true);
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
        <div className="logo">
          <div className="iconCloseAndMenu">
            {isClose ? (
              <AiOutlineMenu
                onClick={() => setIsClose(false)}
                size={25}
                opacity={1}
              />
            ) : (
              <>
                <div className="modalMobile">
                  <AiOutlineClose onClick={() => setIsClose(true)} />
                  <ul>
                    <div className="about-me">
                      <a href="#home">
                        <li>Sobre mim</li>
                      </a>
                    </div>
                  </ul>
                  <ul>
                    <div className="techs">
                      <a href="#technologies">
                        <li>Tecnologias</li>
                      </a>
                    </div>
                  </ul>
                  <ul>
                    <div className="projects">
                      <a href="#projects">
                        <li>Projetos</li>
                      </a>
                    </div>
                  </ul>
                  <ul>
                    <div className="certificate">
                      <a href="#certificate">
                        <li>Certificados</li>
                      </a>
                    </div>
                  </ul>
                </div>
              </>
            )}
          </div>

          <img src={user?.avatar_url} alt="imagem de perfil Matheus" />
          <p>{`${user?.name} Campos`}</p>
        </div>
        <div className="avatar">
          <img src={user?.avatar_url} alt="imagem de perfil Matheus" />
          <p>{`${user?.name} Campos`}</p>
        </div>

        <section>
          <ul>
            <a href="#home">
              <li>Sobre mim</li>
            </a>
            <a href="#technologies">
              <li>Tecnologias</li>
            </a>
            <a href="#projects">
              <li>Projetos</li>
            </a>
            <a href="#certificate">
              <li>Certificados</li>
            </a>
          </ul>
        </section>
      </Container>
    </>
  );
}
