import React, {Component} from "react";

function Todo({user, name, done, description}) {
    return (
        <>
            <h3>name: {name}</h3>
            <h4>dome: {done ? "finished":"ongoing"}</h4>
            <p>description:{description}</p>
            <h2>{user}</h2>
        </>
    )
}

export default Todo