import img from '../assets/images/food.jpeg';
import gitfav from '../assets/images/gitfav.png';
import notes from '../assets/images/notes.png';
import focus from '../assets/images/focus.png';
import imc from '../assets/images/imc.png';
import grid from '../assets/images/grid.png';
export const listProjects = [
  {
    id: 1,
    name: 'FoodExplorer',
    description:
      'O desafio foi construir um cardápio digital para um restaurante fictício com possibilidade de cadastrar, editar e excluir produtos.',
    tags: ['React'],
    img: img,
    href: 'https://imaginative-crostata-56e3ed.netlify.app/',
  },

  {
    id: 2,
    name: 'GitFav',
    description:
      'GitFav é uma aplicação javascript que tem como objetivo consumir a api do github e buscar usuários válidos',
    tags: ['JavaScript'],
    img: gitfav,
    href: 'https://gitfavorites.netlify.app/',
  },
  {
    id: 3,
    name: 'Cronômetro',
    description:
      'Aplicação onde o desafio foi construir um cronômetro em javaScript com o objetivo de trabalhar com manipulação da dom',
    tags: ['JavaScript'],
    img: focus,
    href: 'https://focuspomo.netlify.app/',
  },
  {
    id: 4,
    name: 'Calculo de IMC',
    description:
      'Calculo de Imc é um projeto desenvolvido em javascript onde o indivíduo informa a altura e o peso, e o programa consegue calcular o IMC ',
    tags: ['JavaScript'],
    img: imc,
    href: 'https://imc-rocket.netlify.app/',
  },
  {
    id: 5,
    name: 'Work-grid',
    description:
      'Work-grid é um projeto onde o objetivo principal foi trabalhar com os conceitos de grid-css aplicando também algumas animações nos cards  ',
    tags: ['Css'],
    img: grid,
    href: 'https://work-grid.netlify.app/',
  },
];
