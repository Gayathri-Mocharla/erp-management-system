import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const [employeeCount, setEmployeeCount] = useState(0);

    const [productCount, setProductCount] = useState(0);

    const [salesTotal, setSalesTotal] = useState(0);


    // FETCH DASHBOARD DATA

    const fetchDashboardData = async () => {

        try {

            // EMPLOYEES

            const employeeResponse = await axios.get(
                "https://erp-management-system-v04d.onrender.com/api/employees"
            );

            setEmployeeCount(
                employeeResponse.data.length
            );

            // PRODUCTS

            const productResponse = await axios.get(
                "https://erp-management-system-v04d.onrender.com/api/products"
            );

            setProductCount(
                productResponse.data.length
            );

            // SALES

            const salesResponse = await axios.get(
                "https://erp-management-system-v04d.onrender.com/api/sales"
            );

            const totalRevenue = salesResponse.data.reduce(

                (total, sale) => total + sale.totalAmount,

                0

            );

            setSalesTotal(totalRevenue);

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        fetchDashboardData();

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
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        📊 Dashboard
                    </h3>

                    

<h3
    onClick={() => navigate("/employees")}
    style={{ cursor: "pointer" }}
>
    👨‍💼 Employees
</h3>

<h3
    onClick={() => navigate("/inventory")}
    style={{ cursor: "pointer" }}
>
    📦 Inventory
</h3>

<h3
    onClick={() => navigate("/sales")}
    style={{ cursor: "pointer" }}
>
    💰 Sales
</h3>

<h3
    onClick={() => navigate("/reports")}
    style={{ cursor: "pointer" }}
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
                    padding: "40px",
                    overflowY: "auto"
                }}
            >

                <h1
                    style={{
                        color: "#ff4d94"
                    }}
                >
                    Welcome Gayathri 👋
                </h1>

                <p
                    style={{
                        color: "gray"
                    }}
                >
                    ERP Dashboard Overview
                </p>

                {/* DASHBOARD CARDS */}

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        marginTop: "40px",
                        flexWrap: "wrap"
                    }}
                >

                    {/* EMPLOYEES */}

                    <div
                        style={{
                            backgroundColor: "white",
                            width: "220px",
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
                            {employeeCount}
                        </h2>

                        <p>Total Employees</p>

                    </div>

                    {/* PRODUCTS */}

                    <div
                        style={{
                            backgroundColor: "white",
                            width: "220px",
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
                            {productCount}
                        </h2>

                        <p>Total Products</p>

                    </div>

                    {/* SALES */}

                    <div
                        style={{
                            backgroundColor: "white",
                            width: "220px",
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
                            ₹{salesTotal}
                        </h2>

                        <p>Total Revenue</p>

                    </div>

                </div>

                {/* RECENT ACTIVITY */}

                <div
                    style={{
                        marginTop: "50px",
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
                        Recent Activity
                    </h2>

                    <p>✔ Employees managed successfully</p>

                    <p>✔ Inventory updated dynamically</p>

                    <p>✔ Sales records stored in MongoDB</p>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;