import configRoutes from '../config/routes';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import InfoDoctorPage from '../pages/info/InfoDoctorPage';

const publicRoutes = [
    { path: configRoutes.home, component: HomePage },
    { path: configRoutes.register, component: RegisterPage },
    { path: configRoutes.login, component: LoginPage },
    { path: configRoutes.infoDoctor, component: InfoDoctorPage },
]

export { publicRoutes };