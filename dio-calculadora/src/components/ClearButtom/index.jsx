import { ClearContainer } from "./styles";
import { useNumber } from "../../NumberContext";


export const ClearButtom = () => {

    const { setCurrentNumber } = useNumber();

    const handleClearButton = () => {
        setCurrentNumber("0")
    }

    return (
        <ClearContainer>
            <button type="button" onClick={handleClearButton} className="clear">Clear</button>
        </ClearContainer>
    )
}