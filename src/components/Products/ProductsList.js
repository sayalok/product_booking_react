import React from "react";
import { Table } from "react-bootstrap";

const ProductsList = (props) => {
	return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
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
                    <tr>
                        <td>1</td>
                        <td>Air Compressor 12 GAS</td>
                        <td>plain</td>
                        <td>True</td>
                        <td>False</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>null</td>
                        <td>4500</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Air Compressor 12 GAS</td>
                        <td>plain</td>
                        <td>True</td>
                        <td>False</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>null</td>
                        <td>4500</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Air Compressor 12 GAS</td>
                        <td>plain</td>
                        <td>True</td>
                        <td>False</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>null</td>
                        <td>4500</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Air Compressor 12 GAS</td>
                        <td>plain</td>
                        <td>True</td>
                        <td>False</td>
                        <td>3000</td>
                        <td>3000</td>
                        <td>null</td>
                        <td>4500</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};


export default ProductsList;
