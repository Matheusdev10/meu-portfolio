import { Container } from './styles';
import { CardProjects } from '../../Components/CardProjects';
import { listProjects } from '../../utils/listProjects';
import { TagItem } from '../../Components/TagItem';
import { Swiper, SwiperSlide } from 'swiper/react';
export function Projects({ id }) {
  return (
    <Container id={id}>
      <h1>Projetos</h1>

      <div className="cards">
        <Swiper slidesPerView={3} pagination={{ clickable: true }} navigation>
          {listProjects.map((project) => (
            <>
              <SwiperSlide key={project.id}>
                <CardProjects
                  img={project.img}
                  name={project.name}
                  description={project.description}
                  tags={project.tags.map((tag) => (
                    <TagItem title={tag.split(' , ')} />
                  ))}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
