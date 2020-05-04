import React from 'react';
import Smurfs from "./Smurfs";
import { connect } from 'react-redux';

const SmurfsList = (props) => {


    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurfs smurf={smurf} key={smurf.id} />
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        
    };
};

export default connect (mapStateToProps, {}) (SmurfsList);