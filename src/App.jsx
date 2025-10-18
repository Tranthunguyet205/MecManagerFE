import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={route} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </Router>
    );
}

export default App;