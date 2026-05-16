import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {

        try {

            await axios.post(

                "http://localhost:5000/api/auth/register",

                {
                    name,
                    email,
                    password
                }

            );

            alert("Signup Successful");

            navigate("/");

        }

        catch (error) {

            console.log(error.response.data);

            alert("Signup Failed");

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
                Create your ERP account
                and manage employees,
                inventory, sales and reports
                efficiently.
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
                    width: "420px",
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
                    Create Account
                </h1>

                <input
                    type="text"
                    placeholder="Enter Name"
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
                    onClick={handleSignup}
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
                    Sign Up
                </button>

                <button
                    onClick={() => navigate("/")}
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
                    Back to Login
                </button>

            </div>

        </div>

    </div>

);

}

export default Signup;