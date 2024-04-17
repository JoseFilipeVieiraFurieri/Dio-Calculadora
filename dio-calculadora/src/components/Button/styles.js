import styled from "styled-components"

export const ButtomContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2px;

    justify-content: center;

    button {
        padding: 10px;
        border: 1px solid #CDCDCD;
        background-color: #0000FF;
        font-size: 24px;



    }

    button:hover {
        opacity: 0.8;
        
    }


`