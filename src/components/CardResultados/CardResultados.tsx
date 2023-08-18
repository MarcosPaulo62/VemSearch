import { ContainerCardResultados } from "./style";

interface APICard{
    nome: string;
    logradouro: string;
    cidade: string;
    estado: string;
}

export function CardResultados({nome, logradouro, cidade, estado}: APICard) {
    return (
        <ContainerCardResultados>
            <h2>{nome}</h2>
        </ContainerCardResultados>
    )
}