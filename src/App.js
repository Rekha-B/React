
// <div>
//     <h1>Hello React from Javascript</h1>
//     <h2>Hello React from Javascript2</h2>
// </div>
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body"
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
// // const heading = React.createElement('div', {}, 
// //     [React.createElement('h1',{id : "welcome"},"Hello React from Javascript"),
// //         React.createElement('h2',{id : "welcome"},"Hello React from Javascript2")
// //     ]);

// const heading = (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX 
//     </h1>
// )

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement : <ErrorPage />
    },
    {
        path: "/about",
        element: <About />
    }, 
    {
        path: "/contact",
        element: <Contact />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);   