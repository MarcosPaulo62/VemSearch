import { styled } from "styled-components"

export interface ButtonProps {
    width: string;
    color: string;
    border: string;
    backgroundColor: string;
    fontSize: string;
  }

export const ButtonStyle = styled.button<ButtonProps>`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 14px;
border-radius: 8px;
height: 60px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
font-size: ${props => props.fontSize};

width: ${props => props.width};
color: ${props => props.color};
border: ${props => props.border};
background-color: ${props => props.backgroundColor};

&:hover{
    background-color: var(--brand-2-hover);
    border: none;
    cursor: pointer;
}
`