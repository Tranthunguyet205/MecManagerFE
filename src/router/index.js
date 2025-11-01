import configRoutes from '../config/routes';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import InfoDoctorPage from '../pages/info/InfoDoctorPage';
import PersonalDoctorPage from '../pages/info/PersonalDoctorPage';
import DashboardDoctorPage from '../pages/dashboard/DashboardDoctor';
import AddMedicinePage from '../pages/dashboard/AddMedicine';
import DetailMedicinePage from '../pages/dashboard/DetailMedicine';

const publicRoutes = [
    { path: configRoutes.home, component: HomePage },
    { path: configRoutes.register, component: RegisterPage },
    { path: configRoutes.login, component: LoginPage },
    { path: configRoutes.infoDoctor, component: InfoDoctorPage },
    { path: configRoutes.personalDoctor, component: PersonalDoctorPage },
    { path: configRoutes.dashboard, component: DashboardDoctorPage },
    { path: configRoutes.addMedicine, component: AddMedicinePage },
    { path: configRoutes.detailMedicine, component: DetailMedicinePage }
]

export { publicRoutes };