import React from 'react';
import { Spinner } from "react-bootstrap";

const Loader = () => (
    <>
        <div className="d-flex justify-content-center">
            <Spinner animation="grow" />
        </div>
    </>
);

export default Loader;