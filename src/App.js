
// <div>
//     <h1>Hello React from Javascript</h1>
//     <h2>Hello React from Javascript2</h2>
// </div>
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
        <Outlet />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            }, 
            {
                path: "/contact",
                element: <Contact />
            }
        ],
        errorElement : <ErrorPage />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);   