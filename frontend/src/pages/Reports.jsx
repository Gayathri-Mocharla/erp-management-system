import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Reports() {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    const [products, setProducts] = useState([]);

    const [sales, setSales] = useState([]);

    const [totalRevenue, setTotalRevenue] = useState(0);


    const fetchReports = async () => {

        try {

            // EMPLOYEES

            const employeeResponse = await axios.get(
                "http://localhost:5000/api/employees"
            );

            setEmployees(employeeResponse.data);

            // PRODUCTS

            const productResponse = await axios.get(
                "http://localhost:5000/api/products"
            );

            setProducts(productResponse.data);

            // SALES

            const salesResponse = await axios.get(
                "http://localhost:5000/api/sales"
            );

            setSales(salesResponse.data);

            const revenue = salesResponse.data.reduce(

                (total, sale) => total + sale.totalAmount,

                0

            );

            setTotalRevenue(revenue);

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        fetchReports();

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

                    <h3
                        onClick={() => navigate("/dashboard")}
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        📊 Dashboard
                    </h3>

                    <h3
                        onClick={() => navigate("/employees")}
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        👨‍💼 Employees
                    </h3>

                    <h3
                        onClick={() => navigate("/inventory")}
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        📦 Inventory
                    </h3>

                    <h3
                        onClick={() => navigate("/sales")}
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        💰 Sales
                    </h3>

                    <h3
                        onClick={() => navigate("/reports")}
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        📑 Reports
                    </h3>
                    {/* LOGOUT */}

    <div
    style={{
        marginTop: "40px"
    }}
>

    <button
        onClick={() => {

            localStorage.removeItem("token");

            navigate("/");

        }}
        style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(to right, #ffffff, #ffe6f0)",
            color: "#ff4d94",
            border: "none",
            borderRadius: "14px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            transition: "0.3s"
        }}
        onMouseOver={(e) => {

            e.target.style.background =
                "linear-gradient(to right, #ff4d94, #ff80b3)";

            e.target.style.color = "white";

        }}
        onMouseOut={(e) => {

            e.target.style.background =
                "linear-gradient(to right, #ffffff, #ffe6f0)";

            e.target.style.color = "#ff4d94";

        }}
    >
        🚪 Logout
    </button>

</div>


                </div>

            </div>

            {/* MAIN CONTENT */}

            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "40px"
                }}
            >

                <h1
                    style={{
                        color: "#ff4d94",
                        marginBottom: "30px"
                    }}
                >
                    ERP Reports & Analytics
                </h1>

                {/* REPORT CARDS */}

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        marginBottom: "40px"
                    }}
                >

                    <div
                        style={{
                            backgroundColor: "white",
                            width: "250px",
                            padding: "30px",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2
                            style={{
                                color: "#ff4d94",
                                fontSize: "40px"
                            }}
                        >
                            {employees.length}
                        </h2>

                        <p>Total Employees</p>

                    </div>

                    <div
                        style={{
                            backgroundColor: "white",
                            width: "250px",
                            padding: "30px",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2
                            style={{
                                color: "#ff4d94",
                                fontSize: "40px"
                            }}
                        >
                            {products.length}
                        </h2>

                        <p>Total Products</p>

                    </div>

                    <div
                        style={{
                            backgroundColor: "white",
                            width: "250px",
                            padding: "30px",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2
                            style={{
                                color: "#ff4d94",
                                fontSize: "35px"
                            }}
                        >
                            ₹{totalRevenue}
                        </h2>

                        <p>Total Revenue</p>

                    </div>

                </div>

                {/* SALES TABLE */}

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
                        Sales Report
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
                                    Customer
                                </th>

                                <th style={{ padding: "15px" }}>
                                    Product
                                </th>

                                <th style={{ padding: "15px" }}>
                                    Quantity
                                </th>

                                <th style={{ padding: "15px" }}>
                                    Revenue
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                sales.map((sale) => (

                                    <tr key={sale._id}>

                                        <td style={{ padding: "15px" }}>
                                            {sale.customerName}
                                        </td>

                                        <td style={{ padding: "15px" }}>
                                            {sale.productName}
                                        </td>

                                        <td style={{ padding: "15px" }}>
                                            {sale.quantity}
                                        </td>

                                        <td style={{ padding: "15px" }}>
                                            ₹{sale.totalAmount}
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

export default Reports;