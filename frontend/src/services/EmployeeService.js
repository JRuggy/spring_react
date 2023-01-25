import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    // API for getting all users
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    // API for creating users
    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    // API for updating users
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

// eslint-disable-next-line
export default new EmployeeService();
