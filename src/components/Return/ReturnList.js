import React from "react";
// import { Table } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import './return.css'
const ReturnList = (props) => {
   
    const columns = [{
        dataField: 'id',
        text: 'Id',
        sort:true
      }, {
        dataField: 'from_date',
        text: 'From Date',
        sort:true

      },{
        dataField: 'to_date',
        text: 'To Date',
        sort:true

      },{
        dataField: 'total',
        text: 'Total',
        sort:true

      },{
        dataField: 'product.name',
        text: 'Product Name',
        sort:true

      },{
        dataField: 'milage',
        text: 'Milage',
        sort:true

      }];

	return  <BootstrapTable  keyField='id' data={ props.returnListData } columns={ columns }  loading={ true } />       
};

export default ReturnList;
