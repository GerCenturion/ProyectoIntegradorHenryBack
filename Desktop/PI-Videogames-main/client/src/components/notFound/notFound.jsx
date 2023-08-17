import React from "react";
import Style from "./notFound.module.css";


export default function notFound() {
    return (
        <div className={Style.not}>
            <div className={Style.notContent}>
                <h1>Sorry!</h1>
                Not Found.
            </div>

        </div>)
}