import ReactDOM from "react-dom/client"
import Home from "./components/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductsListing from "./components/ProductsListing";
import ProductCards from "./components/ProductCards";
import ProductDetails from "./components/ProductDetails";

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
          },
          {
            path: '/products',
            element: <ProductCards />
          },
          {
            path: '/products/productDetails',
            element: <ProductDetails />
          }
        ]
      }
    ])

const root = ReactDOM.createRoot(document.getElementById("root"));


  root.render(<RouterProvider router={appRoutes} />)

