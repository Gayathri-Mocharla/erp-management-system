function Dashboard() {

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

        <div style={{ marginTop: "40px", lineHeight: "50px" }}>

          <h3>📊 Dashboard</h3>

          <h3>👨‍💼 Employees</h3>

          <h3>📦 Inventory</h3>

          <h3>💰 Sales</h3>

          <h3>📑 Reports</h3>

        </div>

        <button
          style={{
            marginTop: "50px",
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "white",
            color: "#ff4d94",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}

      <div
        style={{
          flex: 1,
          padding: "40px"
        }}
      >

        <h1 style={{ color: "#ff4d94" }}>
          Welcome Gayathri 👋
        </h1>

        <p style={{ color: "gray" }}>
          ERP Dashboard Overview
        </p>

        {/* CARDS */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px"
          }}
        >

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              width: "220px",
              borderRadius: "20px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
            }}
          >

            <h2 style={{ color: "#ff4d94" }}>
              120
            </h2>

            <p>Total Employees</p>

          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              width: "220px",
              borderRadius: "20px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
            }}
          >

            <h2 style={{ color: "#ff4d94" }}>
              450
            </h2>

            <p>Total Products</p>

          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              width: "220px",
              borderRadius: "20px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
            }}
          >

            <h2 style={{ color: "#ff4d94" }}>
              ₹75K
            </h2>

            <p>Total Sales</p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;