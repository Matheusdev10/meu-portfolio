import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javaScript from '../../assets/js.svg';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import vue from '../../assets/vue.svg';
import sql from '../../assets/sql.svg';
// import css from '../../assets/css.jpeg';
import { Container } from './styles';
export function Technologies({ id }) {
  return (
    <Container id={id}>
      <h1>Tecnologias</h1>

      <section className="icons">
        <div className="icons-slide">
          <img src={html} alt="img icone html" />
          <img src={css} alt="img icone css" />
          <img src={javaScript} alt="img icone js" />
          <img src={react} alt="img icone react" />
          <img src={node} alt="img icone node" />
          <img src={vue} alt="img icone html" />
          <img src={sql} alt="img icone html" />
        </div>
        <div className="icons-slide">
          <img src={html} alt="img icone html" />
          <img src={css} alt="img icone css" />
          <img src={javaScript} alt="img icone js" />
          <img src={react} alt="img icone react" />
          <img src={node} alt="img icone node" />
          <img src={vue} alt="img icone html" />
          <img src={sql} alt="img icone html" />
        </div>
      </section>
    </Container>
  );
}
