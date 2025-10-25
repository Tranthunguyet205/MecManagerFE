import configRoutes from '../config/routes';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import InfoDoctorPage from '../pages/info/InfoDoctorPage';
import DashboardDoctorPage from '../pages/dashboard/DashboardDoctor';
import AddMedicinePage from '../pages/dashboard/AddMedicine';

const publicRoutes = [
    { path: configRoutes.home, component: HomePage },
    { path: configRoutes.register, component: RegisterPage },
    { path: configRoutes.login, component: LoginPage },
    { path: configRoutes.infoDoctor, component: InfoDoctorPage },
    { path: configRoutes.dashboard, component: DashboardDoctorPage },
    { path: configRoutes.addMedicine, component: AddMedicinePage }
]

export { publicRoutes };