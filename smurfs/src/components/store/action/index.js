import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"; 


export const getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START});

    axios 
    .get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("res", res);
        dispatch({type: FETCHING_SMURF_SUCCESS});
    })
    .catch(err => {
        console.log("err", err);
    });
};

export const addSmurf = (smurf) => dispatch => {
    distpatch({type: ADD_SMURF_START});

    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log("addSmurf", res)
            dispatch({type: ADD_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log("addSmurf", err)
        });
};