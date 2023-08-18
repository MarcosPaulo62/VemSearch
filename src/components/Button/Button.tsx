import { ButtonProps, ButtonStyle } from "./style";

interface IchildrenButton extends ButtonProps{
    children: React.ReactNode;
}

export function Button({children, width, color, border, backgroundColor, fontSize}: IchildrenButton) {
    return (
        <ButtonStyle fontSize={fontSize} width={width} backgroundColor={backgroundColor} border={border} color={color}>{children}</ButtonStyle>
    )
}