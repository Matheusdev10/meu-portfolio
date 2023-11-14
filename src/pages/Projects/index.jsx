import { Container } from './styles';
import { CardProjects } from '../../Components/CardProjects';
import { listProjects } from '../../utils/listProjects';
import { TagItem } from '../../Components/TagItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

export function Projects({ id }) {
  const [slidePerview, setSlidePerview] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(1);
      } else {
        setSlidePerview(3);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Container id={id}>
      <h1>Projetos</h1>

      <p>
        Principais projetos que desenvolvi durante minha carreira como
        desenvolvedor
      </p>

      <div className="cards">
        <Swiper
          slidesPerView={slidePerview}
          pagination={{ clickable: true }}
          navigation
        >
          {listProjects.map((project) => (
            <>
              <SwiperSlide key={project.id}>
                <CardProjects
                  img={project.img}
                  name={project.name}
                  description={project.description}
                  tags={project.tags.map((tag) => (
                    <TagItem key={project.tags} title={tag.split(',')} />
                  ))}
                  href={project.href}
                  // tags={project.tags.map((tag) => (
                  //   <TagItem title={tag.split(',')} />
                  // ))}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
