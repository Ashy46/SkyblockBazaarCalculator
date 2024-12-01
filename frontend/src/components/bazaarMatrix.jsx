import React, { useEffect, useState } from "react";
import "./styles.css";

function getTexturePath(itemId) {
    const normalizedId = `/assets/Resources/${itemId.toLowerCase()}.png`;
    return normalizedId;
}

export default function BazaarMatrix() {
    const [bazaarMatrix, setBazaarMatrix] = useState(null);
    const [error, seterror] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/bazaar/matrix")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch bazaar matrix");
            })
            .then((data) => {
                console.log(data);
                setBazaarMatrix(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                seterror(error.message);
            });
    }, []);
    if (error) {
        return (
            <div>
                <strong>Error:</strong> {error}
            </div>
        );
    };

    if (!bazaarMatrix) {
        return (
            <div>
                <strong>Loading...</strong>
            </div>
        );
    };

    return (
        <div className = "Bazaar-Matrix">
            {Object.entries(bazaarMatrix).map(([key, value]) => {
                const texturePath = getTexturePath(key);
                return (
                    <div key = {key} className="item-card">
                        <h3>{key}</h3>
                        <div className="item-image-container">
                            {texturePath && <img src= {texturePath} alt={key} className="item-image"/>}
                        </div>
                        <div className = "item-details">
                            <strong>Margin: </strong>{value}%
                        </div>
                    </div>
                );

            })}
        </div>
    );

}