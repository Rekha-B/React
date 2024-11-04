import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const err = useRouteError();
    console.log("error", err);
    return (
        <div>
        <h1>OOPS!</h1>
        <p>Something went wrong!!!</p>
        <p>{ err?.status} - {err?.statusText}</p>
        </div>
    )
}
export default ErrorPage;