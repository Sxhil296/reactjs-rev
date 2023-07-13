// import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Props from "./components/Props";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <Props name="Sahil" message="lorem ipsum lorem ipsum lorem ipsum"/> */}
      {/* <Props name="Paterick" message="I have to return some video tapes"/> */}


      <Greet name="Bruce" heroName="Batman"> <p>I am vengeance</p></Greet>
      <Greet name="Clark" heroName="Superman"/>
      <Greet name="Peter" heroName="Spiderman"/>


      {/* <Welcome /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
