import { Container } from './styles';
import { CardProjects } from '../../Components/CardProjects';
import { listProjects } from '../../utils/listProjects';
import { TagItem } from '../../Components/TagItem';

export function Projects({ id }) {
  return (
    <Container id={id}>
      {listProjects.map((project) => (
        <>
          <CardProjects
            name={project.name}
            description={project.description}
            tags={project.tags}
          />
        </>
      ))}
    </Container>
  );
}
