import { CardBackground } from "../../components/CardBackground/CardBackground";
import { Link } from 'react-router-dom';
import { BtnNav, SobreBody, SobreContainer, SobreFooter } from "./style";
import { Button } from "../../components/Button/Button";
import footerImage from "../../assets/footerImage.png"
import robo from '../../assets/robô-not-found.png';

export function NotFound() {
    return (
        <CardBackground width="95vw">
            <SobreContainer>
                <SobreBody>
                    <div>
                        <img src={robo} alt="imagem robô triste" />
                    </div>
                    <div className="mensagem">
                        <h1>404...</h1>
                        <p>Ops, a página que você queria não foi encontrada.</p>

                        <BtnNav>
                            <Link to='/'>
                                <Button backgroundColor="var(--brand-2)" color="var(--black-85)" border="none" width="200px">
                                    voltar ao inicio
                                </Button>
                            </Link>
                            <Link to={localStorage.getItem("token") ? "/area-logada" : '/login'}>
                                <Button backgroundColor="var(--brand-2)" color="var(--black-85)" border="none" width="200px">
                                    iniciar busca
                                </Button>
                            </Link>
                        </BtnNav>

                    </div>
                </SobreBody>
                <SobreFooter>
                    <Link to={"/"}>
                        <img className="img-sobre-footer" src={footerImage} alt="Icon logo" />
                    </Link>
                </SobreFooter>
            </SobreContainer>
        </CardBackground>
    )
}