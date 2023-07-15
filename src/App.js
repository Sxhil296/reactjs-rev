// import logo from "./logo.svg";
import "./App.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import Form from "./components/Form";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Inline from "./components/Inline";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Props from "./components/Props";
import Stylesheet from "./components/Stylesheet";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";
import "./styles.css";
import styles from "./styles.module.css";

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
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
      {/* <NameList /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      <Form />
    </div>
  );
}

export default App;
