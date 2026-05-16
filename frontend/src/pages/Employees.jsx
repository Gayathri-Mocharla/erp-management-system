import { useEffect, useState } from "react";

import axios from "axios";

function Employees() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [position, setPosition] = useState("");

    const [employees, setEmployees] = useState([]);


    // FETCH EMPLOYEES

    const fetchEmployees = async () => {

        try {

            const response = await axios.get(

                "http://localhost:5000/api/employees"

            );

            setEmployees(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };


    // ADD EMPLOYEE

    const addEmployee = async () => {

        try {

            await axios.post(

                "http://localhost:5000/api/employees/add",

                {
                    name,
                    email,
                    position
                }

            );

            alert("Employee Added");

            setName("");

            setEmail("");

            setPosition("");

            fetchEmployees();

        }

        catch (error) {

            console.log(error);

        }

    };


    // DELETE EMPLOYEE

    const deleteEmployee = async (id) => {

        try {

            await axios.delete(

                `http://localhost:5000/api/employees/${id}`

            );

            fetchEmployees();

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        fetchEmployees();

    }, []);


    return (

        <div
            style={{
                display: "flex",
                height: "100vh",
                fontFamily: "Arial",
                backgroundColor: "#fff5f8"
            }}
        >

            {/* SIDEBAR */}

            <div
                style={{
                    width: "260px",
                    background: "linear-gradient(to bottom, #ff4d94, #ff99c8)",
                    color: "white",
                    padding: "30px"
                }}
            >

                <h1>ERP System</h1>

                <hr />

                <div
                    style={{
                        marginTop: "40px",
                        lineHeight: "50px"
                    }}
                >

                    <h3>📊 Dashboard</h3>

                    <h3>👨‍💼 Employees</h3>

                    <h3>📦 Inventory</h3>

                    <h3>💰 Sales</h3>

                    <h3>📑 Reports</h3>

                </div>

            </div>

            {/* MAIN CONTENT */}

            <div
                style={{
                    flex: 1,
                    padding: "40px",
                    overflowY: "auto"
                }}
            >

                <h1
                    style={{
                        color: "#ff4d94",
                        marginBottom: "30px"
                    }}
                >
                    Employee Management
                </h1>

                {/* FORM */}

                <div
                    style={{
                        backgroundColor: "white",
                        padding: "30px",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                        marginBottom: "40px"
                    }}
                >

                    <h2
                        style={{
                            color: "#ff4d94",
                            marginBottom: "20px"
                        }}
                    >
                        Add Employee
                    </h2>

                    <input
                        type="text"
                        placeholder="Employee Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "15px",
                            marginBottom: "20px",
                            borderRadius: "10px",
                            border: "1px solid #ffb3cc"
                        }}
                    />

                    <input
                        type="email"
                        placeholder="Employee Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "15px",
                            marginBottom: "20px",
                            borderRadius: "10px",
                            border: "1px solid #ffb3cc"
                        }}
                    />

                    <input
                        type="text"
                        placeholder="Employee Position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "15px",
                            marginBottom: "25px",
                            borderRadius: "10px",
                            border: "1px solid #ffb3cc"
                        }}
                    />

                    <button
                        onClick={addEmployee}
                        style={{
                            width: "100%",
                            padding: "15px",
                            background: "linear-gradient(to right, #ff4d94, #ff80b3)",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >
                        Add Employee
                    </button>

                </div>

                {/* TABLE */}

                <div
                    style={{
                        backgroundColor: "white",
                        padding: "30px",
                        borderRadius: "20px",
                        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
                    }}
                >

                    <h2
                        style={{
                            color: "#ff4d94",
                            marginBottom: "20px"
                        }}
                    >
                        Employee List
                    </h2>

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse"
                        }}
                    >

                        <thead>

                            <tr
                                style={{
                                    backgroundColor: "#ffe6f0"
                                }}
                            >

                                <th style={{ padding: "15px" }}>
                                    Name
                                </th>

                                <th style={{ padding: "15px" }}>
                                    Email
                                </th>

                                <th style={{ padding: "15px" }}>
                                    Position
                                </th>

                                <th style={{ padding: "15px" }}>
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                employees.map((employee) => (

                                    <tr key={employee._id}>

                                        <td style={{ padding: "15px" }}>
                                            {employee.name}
                                        </td>

                                        <td style={{ padding: "15px" }}>
                                            {employee.email}
                                        </td>

                                        <td style={{ padding: "15px" }}>
                                            {employee.position}
                                        </td>

                                        <td style={{ padding: "15px" }}>

                                            <button
                                                onClick={() => deleteEmployee(employee._id)}
                                                style={{
                                                    backgroundColor: "#ff4d94",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "10px",
                                                    borderRadius: "8px",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Employees;