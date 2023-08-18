import { useNavigate, useParams } from "react-router";
import { CardBackground } from "../../components/CardBackground/CardBackground";
import { CardResultados } from "../../components/CardResultados/CardResultados";
import { ContainerResultados, DivCabecalhoResultados, DivMeioResultados, SobreFooterR } from "./style";
import { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import footerImage from "../../assets/footerImage.png"

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

                <DivCabecalhoResultados>
                    <h1>Resultado(s) da sua busca</h1>
                    <span className="material-symbols-rounded">logout</span>
                </DivCabecalhoResultados>

                <DivMeioResultados>
                    <p>Infelizmente, sua busca não encontrou resultados!</p>
                    <Link to={"/area-logada"}>
                        <Button width={"320px"} color={""} border={"none"} backgroundColor={"var(--brand-2)"} >Pesquisar novamente</Button>
                    </Link>
                </DivMeioResultados>
                <SobreFooterR>
                    <Link to={"/"}>
                        <span className="material-symbols-rounded">home</span>
                    </Link>
                    <Link to={"/"}>
                        <img className="img-sobre-footer" src={footerImage} alt="Icon logo" />
                    </Link>
                    <Link to={"/sobre"}>
                        <span className="material-symbols-rounded">info</span>
                    </Link>
                </SobreFooterR>
            </ContainerResultados>
            
        </CardBackground>
    )
}