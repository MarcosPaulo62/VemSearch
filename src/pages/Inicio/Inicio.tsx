import { Button } from "../../components/Button/Button";
import { CardBackground } from "../../components/CardBackground/CardBackground";
import logo from "../../assets/logo.png"


export function Inicio(){
    return(
            <CardBackground width="50vw">
                <Button width={"120px"} color={"var(--off-white)"} border={"1px solid var(--brand-1)"} backgroundColor={"none"}>sobre nós</Button>
                <img src={logo} alt="Logo VemSearch application" />
                <h1>Conectamos nossos usuários por todo país!</h1>
                <Button width={"320px"} color={"var(--black-85)"} border={"none"} backgroundColor={"var(--brand-1)"} >iniciar a busca!</Button>
            </CardBackground>
        
    )
}