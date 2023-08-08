import React from "react";

function Stock({id, ticker, name, type, price, stock, portfolioArray, setPortfolioArray}) {

  function handleStockClick() {
    setPortfolioArray([...portfolioArray, stock])
  }

  return (
    <div>
      <div onClick={handleStockClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  )
}
export default Stock;
