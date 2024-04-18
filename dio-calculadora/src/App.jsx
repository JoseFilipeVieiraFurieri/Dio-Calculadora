import { Container, Content } from "./styles";
import Button from './components/Button'
import Input from './components/Input';
import { ClearButtom } from "./components/ClearButtom";
import { useNumber } from "./NumberContext";

const App = () => {

  const { currentNumber, setCurrentNumber } = useNumber();


  const handleAddNumber = (number) => {
    console.log("clicou", number.target.innerHTML);

    if (currentNumber === "0") {
      setCurrentNumber(number.target.innerHTML)
    } else {
      setCurrentNumber(prev => `${prev}${number.target.innerHTML}`)

    }
  }


  return (
    <Container>
     <Content>
       <Input  value={currentNumber} />
       <Button handleclick={ (number) => handleAddNumber(number)}/>
       <ClearButtom />
     </Content>
      
    </Container>
  );
}

export default App;

// E importante notar que ele esta utilizando hooks para manipular o estado. Nada demais estou nesse curso para relembrar mesmo
// Mas o problema e que ele não explicou sobre react hooks ainda no curso. Ele so passou o basico nem estado passou direito. ENtão era bom
// é mais didatico o curso usar so o que explicou e não o que vai explicar ainda
