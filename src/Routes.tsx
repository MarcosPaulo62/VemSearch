import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Sobre } from "./pages/Sobre/Sobre";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { AreaLogada } from "./pages/AreaLogada/AreaLogada";
import { ResultadoBusca } from "./pages/ResultadoBusca/ResultadoBusca";
import { NotFound } from "./pages/NotFound/NotFound";

export function RoutesVemSearch() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Inicio/>}/> */}
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/area-logada" element={<AreaLogada/>}/>
                <Route path="/resultado-busca" element={<ResultadoBusca/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}