import { GlobalStyles } from "./Components/Styles/Global.styled";
import { AppContainer} from "./Components/Styles/AppContainer.styled";
import { boardSize } from "./Utils/Utils";
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