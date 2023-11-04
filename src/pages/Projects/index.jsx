import { Container } from './styles';
import { CardProjects } from '../../Components/CardProjects';
import { listProjects } from '../../utils/listProjects';
import { TagItem } from '../../Components/TagItem';

export function Projects({ id }) {
  return (
    <Container id={id}>
      <h1>Projetos</h1>

      <div className="cards">
        {listProjects.map((project) => (
          <>
            <CardProjects
              img={project.img}
              name={project.name}
              description={project.description}
              tags={project.tags.map((tag) => (
                <TagItem title={tag.split(' , ')} />
              ))}
            />
          </>
        ))}
      </div>
    </Container>
  );
}
