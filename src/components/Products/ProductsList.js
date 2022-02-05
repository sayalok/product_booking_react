import React from "react";
import { Table } from "react-bootstrap";

const ProductsList = (props) => {
    let productListRow = (
        <p className="text-center">
            No Data Available
        </p>
    )

    if (props.productListData && props.productListData.length > 0) {
        productListRow = props.productListData.map((item,index) => {
            return (
                <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.availability ? 'Available' : 'Not available'}</td>
                    <td>{item.needing_repair ? 'True' : 'False'}</td>
                    <td>{item.durability}</td>
                    <td>{item.max_durability}</td>
                    <td>{item.mileage ? item.mileage : 'N/a'}</td>
                    <td>{item.price}</td>
                    <td>{item.minimum_rent_period}</td>
                </tr>
            )
        })
    }

	return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>type</th>
                        <th>Availab Status</th>
                        <th>Need Repair</th>
                        <th>Durability</th>
                        <th>Durability (Max)</th>
                        <th>Mileage</th>
                        <th>Price</th>
                        <th>Rent Period (Min)</th>
                    </tr>
                </thead>
                <tbody>
                    {productListRow}
                </tbody>
            </Table>
        </>
    );
};


export default ProductsList;
