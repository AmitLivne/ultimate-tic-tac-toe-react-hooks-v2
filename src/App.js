import { GlobalStyles } from "./Assets/Styles/Global.styled";
import { AppContainer} from "./Assets/Styles/AppContainer.styled";
import {boardSize} from "./Utils/Constants";
import Game from "./Components/Game/Game";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer className="App">
        <Game size={boardSize} />
      </AppContainer>
    </>
  );
}

export default App;