import React from "react";

function PortfolioItem({id, ticker, name, type, price, stock, portfolioArray, setPortfolioArray}){
    
    function handlePortfolioClick() {
        setPortfolioArray(portfolioArray.filter(stock => stock.id !== id))
    }
    
    return (
        <div>
            <div onClick={handlePortfolioClick} className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
            </div>
            </div>
        </div>
    )
}

export default PortfolioItem