import React from "react";
// import { Table } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import './product.css'
const ProductsList = (props) => {
   
    const columns = [{
        dataField: 'id',
        text: 'Id',
        sort:true
      }, {
        dataField: 'code',
        text: 'Code',
        sort:true

      },{
        dataField: 'name',
        text: 'Name',
        sort:true

      },{
        dataField: 'type',
        text: 'Type',
        sort:true

      },{
        dataField: 'needing_repair',
        text: 'Repair Status',
        sort:true

      }, {
        dataField: 'availability',
        text: 'Availability',
        sort:true
      },{
        dataField: 'durability',
        text: 'Durability',
        sort:true
      },{
        dataField: 'max_durability',
        text: 'Durability (max)',
        sort:true
      },{
        dataField: 'mileage',
        text: 'Mileage',
        sort:true
      },{
        dataField: 'price',
        text: 'Price',
        sort:true
      },{
        dataField: 'minimum_rent_period',
        text: 'Rent Period (Min)',
        sort:true
      }];

	return  <BootstrapTable  keyField='id' data={ props.productListData } columns={ columns }  loading={ true } />       
};

export default ProductsList;
