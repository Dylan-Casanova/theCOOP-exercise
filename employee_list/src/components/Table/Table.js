import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import employees from "../../employees.json";




class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Name", field: "FullName", sortable: true },
        { headerName: "ID", field: "Id", sortable: true },
      ],
      //   creating state to render filtered employees
      employees,
      filteredEmployees: employees,
      searchbox: "",
    };
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ ...this.state, searchbox: value });
    const filteredResults = this.state.employees.filter((employee) => {
      console.log(employee.FullName, this.state.searchbox);
      return employee.FullName.toLowerCase().includes(value.toLowerCase());
    });
    console.log(filteredResults);
    this.setState({ ...this.state, filteredEmployees: filteredResults });
  };
  render() {
    

    return (
        
      <div 
        className="ag-theme-balham container "
        style={{
          width: 300,
          height: 170,
          
        }}
      >
        
        <input
          // value={this.state.searchbox}
          onChange={this.handleChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search employees"
        />
       
        
        <AgGridReact
          // takes the most updated state and renders it.
          columnDefs={this.state.columnDefs}
          rowData={this.state.filteredEmployees}
        />
      </div>
      
    );
  }
}

export default Table;
