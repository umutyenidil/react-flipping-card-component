import "./App.css";
import Background from "./components/Background";
import CreditCard from "./components/CreditCard";

const App = () => {
  return (
    <div className="body">
      <Background>
        <CreditCard/>
      </Background>
    </div>
  );
};

export default App;
