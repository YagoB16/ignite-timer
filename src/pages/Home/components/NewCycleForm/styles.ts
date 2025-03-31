import styled from "styled-components";

export const BaseCountdownButton = styled.button`

    border: none;
    border-radius: 8px;
    padding: 1rem;

    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;
    transition: 1s;

    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['green-700']};

    &:disabled{
        opacity:0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background: ${props => props.theme['green-500']};
    }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`



    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['green-700']};

    &:disabled{
        opacity:0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background: ${props => props.theme['green-500']};
    }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['red-700']};

    &:not(:disabled):hover{
        background: ${props => props.theme['red-500']};
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`;

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:focus{
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }
    &::placeholder{
        color: ${(props) => props.theme['gray-500']};
    }
`;

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`;

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`;
