import ReactDOM from "react-dom/client"
import Home from "./components/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
    return(
        <div>
            <Header />
            <Home />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<App />)