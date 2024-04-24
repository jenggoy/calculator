import React, { useState } from 'react';
import styled from 'styled-components';
import Button, {ButtonType} from './Button';
import Calc, { CalcInput, InputType, OperatorType } from '../modules/calc';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
    background: black;
    padding: 10px;
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: 140px repeat(5, 60px);
`;

const Display = styled.div`
    background: #727171;
    color: white;
    font-size: 45px;
    grind-column-end: span 4;
    text-align: right;
    padding-top: 70px;
    padding-right: 10px;
    margin-bottom: 15px;
    margin-right: -220px;
    margin-left: -10px;
    margin-top: -10px;
`;

const Calculator: React.FC<{}> = () => {
    const [inputs, setInputs] = useState<Array<CalcInput>>([]);
    const state = Calc.getState(inputs);
    const navigate = useNavigate(); 

    const appendInput = (input: CalcInput): void => {
        setInputs(prev => [...prev, input])
    };

    const handleAllClear = () => setInputs([]);

    const handleC = () => setInputs((prev) => prev.slice(0, -1));

    const handleNumerical = (value: number) => () =>
        appendInput({ type: InputType.Numerical, value});
        
    const handleOperator = (operator: OperatorType) => () =>
        appendInput({ type: InputType.Operator, operator});

    const handleSupport = () => {
        navigate('/Support');
    }

    return( 
        <Container>
            <Grid>
                <Display>{state.displayValue}</Display>
                <Button buttonType={ButtonType.Number} label='C'position={[0,0]} onClick={handleAllClear}/>
                <Button buttonType={ButtonType.Number} label='DEL'position={[1,1]} onClick={handleC}/>
                <Button buttonType={ButtonType.support} label='?'position={[2,2]} onClick={handleSupport}/>
                <Button label='/'position={[3,3]} onClick={handleOperator(OperatorType.Divide)}/>
                <Button buttonType={ButtonType.Number} label='1'position={[1,0]} onClick={handleNumerical(1)}/>
                <Button buttonType={ButtonType.Number} label='2'position={[1,1]} onClick={handleNumerical(2)}/>
                <Button buttonType={ButtonType.Number} label='3'position={[2,2]} onClick={handleNumerical(3)}/>
                <Button label='x'position={[3,3]} onClick={handleOperator(OperatorType.Multiply)}/>
                <Button buttonType={ButtonType.Number} label='4'position={[0,0]} onClick={handleNumerical(4)}/>
                <Button buttonType={ButtonType.Number} label='5'position={[1,1]} onClick={handleNumerical(5)}/>
                <Button buttonType={ButtonType.Number} label='6'position={[2,2]} onClick={handleNumerical(6)}/>
                <Button label='+'position={[3,3]} onClick={handleOperator(OperatorType.Add)}/>
                <Button buttonType={ButtonType.Number} label='7'position={[0,0]} onClick={handleNumerical(7)}/>
                <Button buttonType={ButtonType.Number} label='8'position={[1,1]} onClick={handleNumerical(8)}/>
                <Button buttonType={ButtonType.Number} label='9'position={[2,2]} onClick={handleNumerical(9)}/>
                <Button label='-'position={[3,3]} onClick={handleOperator(OperatorType.Substract)}/>
                <Button buttonType={ButtonType.Number} label='0'position={[0,2]} onClick={handleNumerical(0)}/>
                <Button label='=' position={[2,4]} onClick={handleOperator(OperatorType.Equals)}/>
            </Grid>
        </Container>
    );
};

export default Calculator;