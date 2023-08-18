import { styled } from "styled-components"


export const ContainerResultados = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const DivCabecalhoResultados = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: var(--off-white);
    
`
export const DivMeioResultados = styled.div`
    height: 80%;
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 32px;
    color: var(--off-white);

    button{
        margin-top: 20px;
    }
    
`
export const SobreFooterR = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .img-sobre-footer{
        width: 75px;
        height: 75px;
    }

    span{
        font-size: 2.3rem;
        color: var(--off-white);
    }
    
`
