import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
// import { Link } from "react-router-dom";
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // We are initializing an employee array to fetch employees
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.editEmployee.bind(this);

    }

    editEmployee(id) {
        this.context.history.push(`/update-employee/${id}`);
    }

    addEmployee() {
        this.context.history.push('/AddEmployee');
    }

    // viewEmployee() {
    //     this.props.history.push(`/view-employee/${id}`);
    // }

    // deleteEmployee(id) {
    //     EmployeeService.deleteEmployee(id).then(res => {
    //         this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
    //     });
    // }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    render() {
        return (
            <div className='container'>
                <h2 className='text-center'>Employees List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className='row'>
                    <table className='table table-hover table-stripped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName} </td>
                                            <td> {employee.emailId} </td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-sm btn-info oza">Update</button>
                                                {/* <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger btn-sm oza">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-success btn-sm oza">View </button> */}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
