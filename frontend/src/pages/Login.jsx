import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            const response = await axios.post(

                "https://erp-management-system-v04d.onrender.com/api/auth/login",

                {
                    email,
                    password
                }

            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            alert("Login Failed");

        }

    };

    return (

    <div
        style={{
            height: "100vh",
            display: "flex",
            background: "linear-gradient(to right, #ffe6f0, #ffffff)",
            fontFamily: "Arial"
        }}
    >

        {/* LEFT SIDE */}

        <div
            style={{
                flex: 1,
                background: "linear-gradient(to bottom right, #ff4d94, #ff99c8)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "60px"
            }}
        >

            <h1
                style={{
                    fontSize: "55px"
                }}
            >
                ERP System
            </h1>

            <p
                style={{
                    fontSize: "22px",
                    textAlign: "center",
                    maxWidth: "500px",
                    lineHeight: "40px"
                }}
            >
                Manage Employees,
                Inventory, Sales
                and Reports Easily.
            </p>

        </div>

        {/* RIGHT SIDE */}

        <div
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div
                style={{
                    width: "400px",
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0px 5px 20px rgba(0,0,0,0.1)"
                }}
            >

                <h1
                    style={{
                        color: "#ff4d94",
                        marginBottom: "20px"
                    }}
                >
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Enter Email"
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
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "15px",
                        marginBottom: "25px",
                        borderRadius: "10px",
                        border: "1px solid #ffb3cc"
                    }}
                />

                <button
                    onClick={handleLogin}
                    style={{
                        width: "100%",
                        padding: "15px",
                        background: "linear-gradient(to right, #ff4d94, #ff80b3)",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "16px",
                        cursor: "pointer",
                        marginBottom: "15px"
                    }}
                >
                    Login
                </button>

                <button
                    onClick={() => navigate("/signup")}
                    style={{
                        width: "100%",
                        padding: "15px",
                        backgroundColor: "white",
                        color: "#ff4d94",
                        border: "2px solid #ff4d94",
                        borderRadius: "10px",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    Sign Up
                </button>

            </div>

        </div>

    </div>

)};
export default Login ;