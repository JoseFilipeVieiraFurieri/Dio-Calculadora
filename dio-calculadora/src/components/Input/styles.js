import styled from "styled-components"

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAFFAA;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: "Roboto";

    input {
        display: flex;
        width: 100%;
        height: 75px;
        background-color: #AAFFAA;
        border: 0;
        text-align: right;
        padding: 0 10px;

        font-size: 24px;
        font-family: "Roboto";
    }
`

// como o input ira ser renrizado dentro da div InputCOntainer ja pode estilizar ele aqui mesmo. O input container ira renderizar no caso uma
// tag input ( não um componente input)