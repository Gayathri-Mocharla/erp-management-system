import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    // SIGNUP FUNCTION

    const handleSignup = async () => {

        try {

            await axios.post(

                "http://localhost:5000/api/auth/signup",

                {
                    username,
                    email,
                    password
                }

            );

            alert("Signup Successful");

            navigate("/");

        }

        catch (error) {

    console.log("FULL ERROR:");

    console.log(error);

    console.log(error.response);

    console.log(error.response.data);

    alert(error.response.data.message);

}

    };


    return (

        <div
            style={{
                display: "flex",
                height: "100vh",
                fontFamily: "Arial",
                backgroundColor: "#fff5f8"
            }}
        >

            {/* LEFT SIDE */}

            <div
                style={{
                    flex: 1,
                    background: "linear-gradient(to bottom, #ff4d94, #ff99c8)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    padding: "40px"
                }}
            >

                <h1
                    style={{
                        fontSize: "70px",
                        marginBottom: "30px"
                    }}
                >
                    ERP System
                </h1>

                <p
                    style={{
                        fontSize: "22px",
                        textAlign: "center",
                        lineHeight: "50px"
                    }}
                >
                    Create your ERP account and manage employees,
                    inventory, sales and reports efficiently.
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
                        width: "500px",
                        backgroundColor: "white",
                        padding: "50px",
                        borderRadius: "25px",
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)"
                    }}
                >

                    <h1
                        style={{
                            color: "#ff4d94",
                            marginBottom: "30px",
                            fontSize: "55px"
                        }}
                    >
                        Create Account
                    </h1>

                    {/* USERNAME */}

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "18px",
                            marginBottom: "25px",
                            borderRadius: "12px",
                            border: "1px solid #ffb3cc",
                            fontSize: "16px"
                        }}
                    />

                    {/* EMAIL */}

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "18px",
                            marginBottom: "25px",
                            borderRadius: "12px",
                            border: "1px solid #ffb3cc",
                            fontSize: "16px"
                        }}
                    />

                    {/* PASSWORD */}

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "18px",
                            marginBottom: "30px",
                            borderRadius: "12px",
                            border: "1px solid #ffb3cc",
                            fontSize: "16px"
                        }}
                    />

                    {/* SIGNUP BUTTON */}

                    <button
                        onClick={handleSignup}
                        style={{
                            width: "100%",
                            padding: "18px",
                            background: "linear-gradient(to right, #ff4d94, #ff80b3)",
                            color: "white",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "20px",
                            cursor: "pointer",
                            marginBottom: "20px"
                        }}
                    >
                        Sign Up
                    </button>

                    {/* LOGIN BUTTON */}

                    <button
                        onClick={() => navigate("/")}
                        style={{
                            width: "100%",
                            padding: "18px",
                            backgroundColor: "white",
                            color: "#ff4d94",
                            border: "2px solid #ff4d94",
                            borderRadius: "12px",
                            fontSize: "20px",
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