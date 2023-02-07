import "./App.css";
import GraphContainer from "./components/GraphContainer";
import InputWrapper from "./components/InputWrapper";
import ResultContainer from "./components/ResultContainer";
import AppContextProvider from "./Context";

function App() {
  return (
    <AppContextProvider>
      <div className='bg-stone-900 min-h-screen flex flex-col items-center justify-start py-10 px-5'>
        <InputWrapper />
        <ResultContainer />
        <GraphContainer />
      </div>
    </AppContextProvider>
  );
}

export default App;
