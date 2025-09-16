import ReactDOM from "react-dom/client"
import Home from "./components/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () =>{

    console.log("application running book store");

    return(
       <div className="app">
        <Header />
        <Outlet />
       </div>
    )

}

const appRoutes = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '/',
            element: <Home/>
          }
        ]
      }
    ])

const root = ReactDOM.createRoot(document.getElementById("root"));


  root.render(<RouterProvider router={appRoutes} />)

