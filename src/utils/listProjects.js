import img from '../assets/images/food.jpeg';
import gitfav from '../assets/images/gitfav.jpeg';
import notes from '../assets/images/notes.png';
import focus from '../assets/images/focus.png';
export const listProjects = [
  {
    id: 1,
    name: 'FoodExplorer',
    description:
      'O desafio foi construir um cardápio digital para um restaurante fictício com possibilidade de cadastrar, editar e excluir produtos.',
    tags: ['React'],
    img: img,
  },

  {
    id: 2,
    name: 'RocketNotes',
    description:
      'RocketNotes é uma aplicação desenvolvida com o objetivo de controlar anotações. Nessa aplicação é possível cadastrar, filtrar e excluir anotações',
    tags: ['React'],
    img: notes,
  },
  {
    id: 3,
    name: 'GitFav',
    description:
      'GitFav é uma aplicação javascript com o objetivo de bater na api do github e buscar usuários válidos',
    tags: ['JavaScript'],
    img: gitfav,
  },
  {
    id: 4,
    name: 'Cronômetro',
    description:
      'Aplicação com o intuito de construir um cronômetro em javaScript com o objetivo de trabalhar com manipulação da dom',
    tags: ['JavaScript'],
    img: focus,
  },
];
