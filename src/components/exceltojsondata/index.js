import React, { useState, forwardRef } from 'react';
import * as xlsx from 'xlsx';
// import Table from 'material-ui-table';
import MaterialTable from '@material-table/core';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import moment from 'moment';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';

const ExcelToJson = () => {
    const [data, setData] = useState('');
    const [keys, setKeys] = useState([]);


    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);

                let values = json;
                const columns = [];
                let columnNames = [];

                columnNames = Object.keys(values[0]);
                for (const key in columnNames) {
                    if (columnNames[key] === 'GSTPercentage') {
                        columns.push({ title: 'GST', field: columnNames[key] });
                    }
                    else if (columnNames[key] === 'HSN') {
                        columns.push({ title: 'HSN', field: columnNames[key] });
                    }
                    if (columnNames[key] === 'MRP') {
                        columns.push({ title: 'MRP', field: columnNames[key] });
                    }
                    else if (columnNames[key] === 'ProductDescription') {
                        columns.push({ title: 'Product Description', field: columnNames[key] });
                    }
                    if (columnNames[key] === 'ProductManufacturer') {
                        columns.push({ title: 'Product Manufacturer', field: columnNames[key] });
                    }


                }
                setKeys(columns);
                setData(values);

                setData(values);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    console.log(data);

    const tableIcons = {
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    return (
        <div>
            <form>
                <label htmlFor='upload'>Upload File</label>
                <input
                    type='file'
                    name='upload'
                    id='upload'
                    onChange={readUploadFile}
                />

                <MaterialTable
                    icons={tableIcons}
                    data={data}
                    columns={keys}
                    options={{
                        filtering: false, sorting: true, showTitle: false, paging: true,
                        pageSize: 10,
                        emptyRowsWhenPaging: false,
                        pageSizeOptions: [5, 10, 20, 50, 100],
                    }}

                />
            </form>

        </div>
    )
}

export default ExcelToJson;