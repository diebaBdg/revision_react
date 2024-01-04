import React from "react";

function Employe(props) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>EMPLOYEE NAME</th>
            <th>EMPLOYEE SALARY</th>
            <th>EMPLOYEE AGE</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employe;
