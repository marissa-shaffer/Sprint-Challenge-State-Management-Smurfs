import React from "react";

const Smurfs = (props) => {
    return(
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
};

export default Smurfs;