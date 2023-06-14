import { Home, ThingsToDo, Tour, Blog } from 'Pages';

const routes = [
  {
    id: 0,
    isIndex: true,
    component: Home,
    state: 'home',
  },
  {
    id: 1,
    path: '/thingsTodo',
    component: ThingsToDo,
  },
  {
    id: 2,
    path: '/tour',
    component: Tour,
  },
  {
    id: 3,
    path: '/blog',
    component: Blog,
  },
];

export default routes;
