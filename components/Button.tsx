import React from 'react';
import styled from 'styled-components';

export enum ButtonType{
    Number,
    Operation,
    support
}

type Props = React.HTMLProps<HTMLDivElement> & {
    buttonType?: ButtonType;
    height?: number;
    label:string;
    position?: [x:number, y:number];
    width?: number;
}

const StyledButton = styled.div`
    background: #e48900;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({
    buttonType = ButtonType.Operation,
    label,
    position,
    width,
    onClick,
}) => {
    const styles: React.CSSProperties = {};
    if(position){
        styles.gridColumnStart = position[0] + 1;
        styles.gridColumnEnd = position[1] + 1;
    }
    // if (width){
    //     styles.gridColumnEnd = 'span $(width)'
    // }
    if(buttonType === ButtonType.Number){
        styles.background = '#727171';
    } else if(buttonType === ButtonType.support){
        styles.background = '#865f1d';
    }
    return (
        <StyledButton onClick = {onClick} style={styles}>{label}</StyledButton>
    );
}

export default Button;