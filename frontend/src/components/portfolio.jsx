import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function getTexturePath(itemId) {
    const normalizedId = `/assets/Resources/${itemId.toLowerCase()}.png`;
    return normalizedId;
}

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

            setPortfolio(response.data);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }
    };

    return (
        <div className = "Portfolio">
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
                <div className="portfolio-display">
                    {Object.entries(portfolio.portfolio).map(([key, value]) => {
                        const texturePath = getTexturePath(key);
                        return (
                            <div key={key} className = "product-position">
                                <div>{key}:</div>
                                <img src={texturePath} alt={key} />
                                <div>Quantity: {value}</div> 
                            </div>
                        )
                    })}
                </div>
            )}
            {portfolio && <div className="Returns">Total Returns: {portfolio.totalReturns}</div>}
        </div>
    );
}