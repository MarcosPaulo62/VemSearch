import { CardBackground } from "../../components/CardBackground/CardBackground";
import { ContainerResultados } from "./style";

export function ResultadoBusca() {
    return (
        <CardBackground width="95vw">
            <ContainerResultados>
                <div>
                    <h1>Resultado(s) da sua busca</h1>
                    <span className="material-symbols-rounded">logout</span>
                </div>
                <div>
                    
                </div>
            </ContainerResultados>
        </CardBackground>
    )
}