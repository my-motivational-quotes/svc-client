"use client";

import { useState } from "react";
import QuoteButton from "./components/QuoteButton";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/quote");
      const data = await response.data;
      setQuote(data.quote);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Daily Motivational Quote</h1>
      <QuoteButton onClick={fetchQuote} />
      {quote && <p style={{ fontSize: "1.5em", marginTop: "20px" }}>{quote}</p>}
    </div>
  );
};

export { Home as default };
