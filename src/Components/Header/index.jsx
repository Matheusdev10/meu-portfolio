import { Container } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import about from '../../assets/about.png';
import technology from '../../assets/technology.png';
import projects from '../../assets/projects.png';
import certificate from '../../assets/certificate.png';
export function Header() {
  const [user, setUser] = useState(null);
  const [isClose, setIsClose] = useState(true);

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
                  <div className="icon-close">
                    <AiOutlineClose onClick={() => setIsClose(true)} />
                  </div>
                  <ul>
                    <div className="about-me">
                      <a href="#about">
                        <div className="card-about">
                          <img src={about} alt="imagem icone usuario" />
                          <li>Sobre mim</li>
                        </div>
                      </a>
                    </div>
                  </ul>
                  <ul>
                    <div className="techs">
                      <a href="#technologies">
                        <div className="card-techs">
                          <img src={technology} alt="imagem icone tecnologia" />
                          <li>Tecnologias</li>
                        </div>
                      </a>
                    </div>
                  </ul>
                  <ul>
                    <div className="projects">
                      <a href="#projects">
                        <div className="card-projects">
                          <img src={projects} alt="imagem icone projetos" />
                          <li>Projetos</li>
                        </div>
                      </a>
                    </div>
                  </ul>
                  <ul>
                    <div className="certificate">
                      <a href="#certificate">
                        <div className="card-certificates">
                          <img
                            src={certificate}
                            alt="imagem icone certificado"
                          />
                          <li>Certificados</li>
                        </div>
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
            <a href="#about">
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
