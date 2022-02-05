import React, {useEffect, useState} from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import Loader from '../../components/Loader'


import BookingList from "../../components/Booking/BookingsList";

const Products = (props) => {

    useEffect(() => {
        props.getBookingList();
    }, []);

    let bookingBlock = <Loader/>;

    if (props.bookingData) {
        bookingBlock = (
            <>
                <BookingList bookingListData={props.bookingData}/>
            </>
        )
    }

	return (
        <>
            {bookingBlock}
        </>
    );
};



const mapStateToProps = (state) => {
    return {
        bookingData: state.bookingReducers.bookingData,
    };
};
  
const mapDispatchToProp = (dispatch) => {
    return {
        getBookingList: () => dispatch(actions.getBookings()),
    };
};


export default connect(mapStateToProps, mapDispatchToProp)(Products);
