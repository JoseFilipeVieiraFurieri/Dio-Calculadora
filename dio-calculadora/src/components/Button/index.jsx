import { ButtomContainer } from "./styles";
import { useNumber } from "../../NumberContext";

const Button = ({ handleclick }) => {

    const numpad = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9, "+" , "-", "/" , "*"];
    const { currentNumber, setCurrentNumber } = useNumber();

     const handleOperation = () => {
        console.log("clicou");
         const operationArray = currentNumber.split(/(?<=\d)(?=\D)|(?<=\D)(?=\d)/);
         const result = calculator(operationArray);
         setCurrentNumber(result);
         
     }

     // a função do regex acima( peguei um exemplo na net) é reconhecer quando um numero termina e um operador começa. Foi a maneira
     // que eu encontrei de tornar a calculadora mais dinamica

     const calculator = (operadorList) => {

         // lista separada que vem de outro da função de Handle com o split

         let resultado = parseInt(operadorList[0]);
         
         // controle do calculo durante a iteração

         for (let index = 1; index < operadorList.length; index += 2) {
            const operador = operadorList[index]
            const nextNumber = parseInt(operadorList[index + 1])

            switch(operador) {
                case "+":
                    resultado += nextNumber
                    break
                case "-":
                    resultado -= nextNumber
                    break
                case "/":
                    resultado /= nextNumber
                    break
                case "*":
                    resultado *= nextNumber
                    break
                default:
                    console.error("operador invalido", operador)
                    return "Operador invalido"

            }
            
         }
         return resultado;
     }
    
    // a ideia e a seguinte, eu quis deixar a calculado mais dinamica ou seja ela pode fazer mais de uma operação por vez(1+2-3,...)
    // então eu fiz o split com o regex para separar os numeros, mas isso gerou complicação na hora de identificar o numero em si e o
    // operador. Mas a ideia da calculadora é sempre numero , operador , numero, operador, então eu fiz um loop que controla dois parame
    // tros o operador e o numero, e um resultado para retornar a soma. O operador sempre começa no indice 1 e o numero sempre no 0
    // então o que vai para o switch e operador que vai determinar que operação vai ser feita a cada loop(e vai pulando de dois em dois,
    // para evitar que entre um operador invalido no switch, eu o resultado vai armazenando e o proximo numero sera o indice 2 e por ai vai


    return (
        <>
        <ButtomContainer>
            {numpad.map((number) => {
                return <button type="input" onClick={handleclick} id={number} value={number} key={number+"key"}>{number}</button>
            })}
            <button type="buttom" onClick={handleOperation}>=</button>
        </ ButtomContainer>
        </>
    )
}

export default Button;