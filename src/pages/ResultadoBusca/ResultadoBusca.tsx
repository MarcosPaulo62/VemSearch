import { useNavigate, useParams } from "react-router";
import { CardBackground } from "../../components/CardBackground/CardBackground";
import { CardResultados } from "../../components/CardResultados/CardResultados";
import { ContainerResultados } from "./style";
import { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export function ResultadoBusca() {
    const { nome } = useParams();
    const navigate = useNavigate();
    const apiKey = 'http://vemser-dbc.dbccompany.com.br:39000/vemser/dbc-pessoa-api'

    async function pesqisaUser() {
        const response = await fetch(
            `${apiKey}/pessoa/byname?nome=${nome}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        if (!response.ok) {
            navigate('/sem-resultado')
            console.log("Erro ao fazer requisição!");
            return;
        }

        const resposta = await response.json();

        console.log(resposta)
    }

    useEffect(() => {
        pesqisaUser();
    }, [])

    return (
        <CardBackground width="95vw">
            <ContainerResultados>
                <div>
                    <h1>Resultado(s) da sua busca</h1>
                    <span className="material-symbols-rounded">logout</span>
                </div>
                <div>
                    {/* <p>Infelizmente, sua busca pelo nome {nome}, não encontrou resultados!</p> */}
                    <p>Infelizmente, sua busca não encontrou resultados!</p>
                    <Link to={"/area-logada"}>
                        <Button width={""} color={""} border={""} backgroundColor={""} >Pesquisar novamente</Button>
                    </Link>
                </div>
            </ContainerResultados>
        </CardBackground>
    )
}