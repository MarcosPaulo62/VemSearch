import { CardBackground } from "../../components/CardBackground/CardBackground";
import { Link } from 'react-router-dom';
import { SobreContainer, SobreDivCabecalho, SobreFooter, SobreSearch, SobreTextPrincipal } from "./styles";
import { Button } from "../../components/Button/Button";
import footerImage from "../../assets/footerImage.png"


export function AreaLogada() {
    return (
        <CardBackground width="95vw">
            <SobreContainer>
                <SobreDivCabecalho>
                    <SobreTextPrincipal>
                        <h1>Olá, FULANO!</h1>
                        <h2>Quem você quer encontrar hoje?</h2>
                    </SobreTextPrincipal>
                    <Link className="link-sobre-logout" to={"/"}>
                        <span className="material-symbols-rounded span-logout">logout</span>
                    </Link>
                </SobreDivCabecalho>
                <SobreSearch>
                    <input placeholder="busque por um nome ou estado" type="text" />
                    <Button width={"74px"} color={""} border={"none"} backgroundColor={"var(--brand-2)"} ><span className="material-symbols-rounded">search</span></Button>
                </SobreSearch>
                <SobreFooter>
                    <Link to={"/"}>
                        <span className="material-symbols-rounded">home</span>
                    </Link>
                    <Link to={"/"}>
                        <img className="img-sobre-footer" src={footerImage} alt="Icon logo" />
                    </Link>
                    <Link to={"/sobre"}>
                        <span className="material-symbols-rounded">info</span>
                    </Link>
                </SobreFooter>
            </SobreContainer>
        </CardBackground>
    )
}