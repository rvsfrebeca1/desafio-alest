import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Navigate

} from 'react-router-dom';
import { ContextoProvider } from './contexts/contexto';
import Home from './pages/Home/home';
import Cadastro from './pages/Cadastro/cadastro';
import Login from './pages/Login/index'
function Rotas() {

    function RotaProtegida(props) {
        let location = useLocation();

        if (window.localStorage.uid === 'undefined' || !window.localStorage.uid || !window.localStorage.uid === "") {
            return <Navigate to="/" state={{ from: location }} />;
        }

        return props.children;
    }

    return <BrowserRouter>
        <ContextoProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />

                <Route path="/home" element={
                    <RotaProtegida>
                        <Home />
                    </RotaProtegida>
                } />
            </Routes>
        </ContextoProvider>
    </BrowserRouter>


}

export default Rotas;
