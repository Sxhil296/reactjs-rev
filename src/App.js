// import logo from "./logo.svg";
import "./App.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Props from "./components/Props";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <Props name="Sahil" message="lorem ipsum lorem ipsum lorem ipsum"/> */}
      {/* <Props name="Paterick" message="I have to return some video tapes"/> */}


      {/* <Greet name="Bruce" heroName="Batman"> <p>I am vengeance</p></Greet>
      <Greet name="Clark" heroName="Superman"/>
      <Greet name="Peter" heroName="Spiderman"/> */}


      {/* <Welcome /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
    </div>
  );
}

export default App;
