import { Container } from './styles';
import food from '../../assets/images/food.jpeg';
import { TagItem } from '../TagItem';
export function CardProjects({ name, description, tags }) {
  return (
    <Container>
      <div>Projetos</div>
      <section>
        <div>
          <h3>{name}</h3>
        </div>

        <div>
          <p>{description}</p>
        </div>

        <div>
          <ul>
            <TagItem title={tags}></TagItem>
          </ul>
        </div>
        <img src={food} alt="imagem projeto foodexplorer" />
      </section>
    </Container>
  );
}
