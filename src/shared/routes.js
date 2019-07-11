import Home from './components/Home';
import About from './components/AboutNew';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Team from './components/Team';
import Model from './components/Model';
import History from './components/History';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/mission',
    component: Mission
  },
  {
    path: '/vision',
    component: Vision
  },
  {
    path: '/team',
    component: Team
  },
  {
    path: '/model',
    component: Model
  },
  {
    path: '/history',
    component: History
  },
]

export default routes