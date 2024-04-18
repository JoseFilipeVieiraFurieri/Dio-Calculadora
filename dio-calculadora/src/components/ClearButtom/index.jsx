import { ClearContainer } from "./styles";


export const ClearButtom = () => {

    const Clear = () => {
        console.log("remove");
    }

    return (
        <ClearContainer>
            <button type="buttom" onClick={Clear}>Clear</button>
        </ClearContainer>
    )
}