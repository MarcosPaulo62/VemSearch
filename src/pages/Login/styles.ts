import { styled } from "styled-components";

export const MainLogin = styled.div`
    width: 100%;

    .icons{
        display: flex;
        justify-content: space-between;
        align-items: start;

        span{
            margin-top: 3rem;
            font-size: 2.5rem;
            color: white;
        }

        img{
            width: 250px;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        h2{
            font-weight: 400;
            font-size: 2rem;
            color: var(--off-white);
            margin-bottom: .7rem;
        }

        input{
            background-color: var(--off-white);
            padding: 0.9rem 1.6rem;
            border-radius: 8px;
            border: none;
            font-size: 1.25rem;
            color: var(--black-85);
        }
        
        span{
            margin: .4rem auto; 
            color: var(--off-white);
            font-size: 1.25rem;
            font-weight: 700;
            font-family: Montserrat;

            .link{
                color: #75C7EB;
                text-decoration: none;
                font-family: Montserrat;
            }
        }

        button{
            margin: 0 auto 2rem;
        }
    }
`