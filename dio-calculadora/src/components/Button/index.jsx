import { ButtomContainer } from "./styles";

const Button = () => {

    const numpad = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9, "+" , "-", "/" , "*", "="]

    const onClick = ({target}) => {
      console.log(target);
    }
    return (
        <>
        <ButtomContainer>
            {numpad.map((number) => {
                return <button type="input" onClick={onClick} id={number} value={number} key={number+"key"}>{number}</button>
            })}
        </ ButtomContainer>
        <button type="buttom">Clear</button>
        </>
    )
}

export default Button;