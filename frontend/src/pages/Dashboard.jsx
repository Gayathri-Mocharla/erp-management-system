import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

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

                    <h3>💰 Sales</h3>

                    <h3>📑 Reports</h3>

                </div>

            </div>

            {/* MAIN */}

            <div
                style={{
                    flex: 1,
                    padding: "40px"
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

            </div>

        </div>

    );

}

export default Dashboard;