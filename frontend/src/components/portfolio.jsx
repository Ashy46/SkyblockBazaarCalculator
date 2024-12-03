import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Portfolio() {
    const [investmentSize, setInvestmentSize] = useState("");
    const [portfolio, setPortfolio] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:5000/api/bazaar/portfolio", {
                investmentSize,

            });
            console.log(response.data);
            setPortfolio(response.data);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }
    };

    return (
        <div clasName = "Portfolio">
            <h1>Portfolio</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Portfolio:
                    <input
                        type="text"
                        value={investmentSize}
                        onChange={(e) => setInvestmentSize(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {portfolio && (
                <ul>
                    {Object.entries(portfolio.portfolio).map(([key, value]) => {
                        return (
                            <li key={key} className = "product-Position">
                                <strong>{key}:</strong> {value}
                            </li>
                        )
                    })}
                    <strong>Total Returns:</strong> {portfolio.totalReturns}
                </ul>
            )}
        </div>
    );
}