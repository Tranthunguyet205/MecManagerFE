import configRoutes from '../config/routes';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';

const publicRoutes = [
    { path: configRoutes.home, component: HomePage },
    { path: configRoutes.login, component: LoginPage },
]

export { publicRoutes };