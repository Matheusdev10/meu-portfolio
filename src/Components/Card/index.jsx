import { api } from '../../services/api';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { Button } from '../Button/';
import { BsWhatsapp } from 'react-icons/bs';
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
          💡 Estou sempre aprimorando minhas habilidades em
          <span> HTML, CSS, JS, REACT, NODE </span> no entanto, estou sempre
          aberto e disposto a aprender novas techs.
        </p>
        <p>🚀 Estou sempre buscando novos desafios.</p>
        <div>
          <a
            href="https://wa.me/5534999686700?text=Olá dev tudo bem? Adorei seu site, que tal batermos um papo? "
            target="_blank"
          >
            <Button title={'Vamos conversar?'} Icon={<BsWhatsapp />} />
          </a>
        </div>
      </section>
    </Container>
  );
}
