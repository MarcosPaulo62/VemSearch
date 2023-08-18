import { styled } from "styled-components"

export const SobreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const SobreBody = styled.section`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 450px;
    }

    .mensagem{
        color: var(--off-white);
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1{
            font-size: 4.375rem;
        }

        p{
            font-size: 2.25rem;
        }
    }
`

export const SobreFooter = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .img-sobre-footer{
        width: 75px;
        height: 75px;
    }
`
