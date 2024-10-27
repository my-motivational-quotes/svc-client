import React from "react";

const QuoteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#0070f3",
        color: "white",
      }}
    >
      Get Motivational Quote
    </button>
  );
};

export { QuoteButton as default };
