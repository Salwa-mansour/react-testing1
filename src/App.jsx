import "./app.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

function App(){
    return(
        <div>
            <Greeting name={"Salwa"} />
            <Counter />
            <UserProfile userId={4} />
        </div>
    )
}
export default App;
