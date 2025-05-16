import React from "react";

function App() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative"
    }}>
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          @keyframes float {
            0% {
              transform: translateY(0px) scale(1);
              text-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
            }
            50% {
              transform: translateY(-20px) scale(1.05);
              text-shadow: 0 25px 35px rgba(0, 0, 0, 0.3);
            }
            100% {
              transform: translateY(0px) scale(1);
              text-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
            }
          }
        `}
      </style>
      <h1 style={{
        fontSize: "8rem",
        fontWeight: "bold",
        color: "#ffffff",
        textShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        animation: "float 6s ease-in-out infinite",
        zIndex: "1",
        letterSpacing: "5px"
      }}>
        HELLO DEVELOPERS
      </h1>
    </div>
  );
}

export default App;
