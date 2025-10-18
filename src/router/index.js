import configRoutes from '../config/routes';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';

const publicRoutes = [
    { path: configRoutes.home, component: HomePage },
    { path: configRoutes.register, component: RegisterPage },
    { path: configRoutes.login, component: LoginPage },
]

export { publicRoutes };