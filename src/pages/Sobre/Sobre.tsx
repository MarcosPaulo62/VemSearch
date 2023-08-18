import { Button } from "../../components/Button/Button";
import { CardBackground } from "../../components/CardBackground/CardBackground";
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { DivButtonSobre, SobreStyle } from "./style";


export function Sobre() {
    return (
        <CardBackground width="60vw">
            <DivButtonSobre>
                <Link to={"/"}>
                    <img className="imgLogo-sobre" src={logo} alt="Logo VemSearch application" />
                </Link>
                <Link to={"/"}>
                    <Button width={"130px"} color={"var(--off-white)"} border={"2px solid var(--brand-2)"} backgroundColor={"transparent"}>início</Button>
                </Link>
            </DivButtonSobre>
            <SobreStyle>
                <p>Somos uma plataforma dedicada a unir pessoas por meio de nomes. Nossa missão é criar um espaço onde indivíduos de todas as partes do país possam se conectar e explorar de maneira fácil e intuitiva.</p>
                <p>Com uma abordagem abrangente e inovadora, estamos comprometidos em fornecer uma experiência de busca que vai além dos resultados, criando conexões por todo o Brasil.</p>
                <p>Seja você um curioso, um pesquisador ou alguém em busca de suas raízes, estamos aqui para ser a sua fonte confiável de informações sobre nomes e as histórias que eles carregam.</p>
            </SobreStyle>
            <Link to={localStorage.getItem("token") ? "/area-logada" : '/login'}>
                <Button backgroundColor="var(--brand-2)" border="none" color="var(--black-85)" width="320px">iniciar a busca!</Button>
            </Link>
        </CardBackground>
    )
}