import React, {useEffect, useState} from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import Loader from '../../components/Loader'
import ReturnList from "../../components/Return/ReturnList";

const Returns = (props) => {

    useEffect(() => {
        props.getReturnList();
    }, []);

    let returnBlock = <Loader/>;

    if (props.returnData) {
        returnBlock = (
            <>
                <BookingList returnListData={props.returnData}/>
            </>
        )
    }

	return (
        <>
            {returnBlock}
        </>
    );
};



const mapStateToProps = (state) => {
    return {
        returnData: state.returnReducers.returnData,
    };
};
  
const mapDispatchToProp = (dispatch) => {
    return {
        getReturnList: () => dispatch(actions.getReturns()),
    };
};


export default connect(mapStateToProps, mapDispatchToProp)(Returns);
