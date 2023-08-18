import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Sobre } from "./pages/Sobre/Sobre";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { AreaLogada } from "./pages/AreaLogada/AreaLogada";
import { ResultadoBusca } from "./pages/ResultadoBusca/ResultadoBusca";
import { NotFound } from "./pages/NotFound/NotFound";
import { RotaPrivada } from "./pages/layout/RotaPrivada/RotaPrivada";

export function RoutesVemSearch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route element={<RotaPrivada />}>
                    <Route path="/area-logada" element={<AreaLogada/>}/>
                <Route path="/resultado-busca/:name" element={<ResultadoBusca/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}