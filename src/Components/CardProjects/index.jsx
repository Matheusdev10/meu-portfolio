import { Container } from './styles';
import food from '../../assets/images/food.jpeg';
import { TagItem } from '../TagItem';
import { listProjects } from '../../utils/listProjects';
export function CardProjects({ name, description, tags, img }) {
  return (
    <Container>
      <section>
        <div>
          <h3>{name}</h3>
        </div>

        <div>
          <p>{description}</p>
        </div>

        {/* <div>
          <ul>
            <TagItem title={'JavaScript'} />
            <TagItem title={'react'} />
            <TagItem title={'html'} />
          </ul>
        </div> */}

        <div>
          <ul>
            <TagItem title={tags} />
          </ul>
        </div>
        <img src={img} alt="imagem dos cards" />
      </section>
    </Container>
  );
}
