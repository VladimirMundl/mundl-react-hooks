import Component from "./UseStateComponent";
import UseEffectComponent from "./useEfectComponent";
import UseContextComponent from "./useContextComponent";
import UseReducerComponent from "./useReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CustomHookComponent";
// import TrainingComponent from "./TrainingComponent";

function App() {
  return (
    <div>
      {/* <TrainingComponent /> */}
      <h1>CustomHookComponent</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useState</h1>
      <Component />
      <h1>useEffect</h1>
      <UseEffectComponent />
    </div>
  );
}

export default App;
