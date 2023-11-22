import { Container } from './styles';

import { TagItem } from '../TagItem';

export function CardProjects({ name, description, tags, img, href }) {
  return (
    <Container>
      <section>
        <div className="imgCard">
          <a href={href}>
            <img src={img} alt="imagem dos cards" />
          </a>
        </div>
        <div className="content">
          <div>
            <h3>{name}</h3>
          </div>

          <div>
            <p>{description}</p>
          </div>

          <div>
            <ul>
              <TagItem title={tags} />
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}

// https://matheusdev10.github.io/github-favorites-explorer/ deploy gitfav
