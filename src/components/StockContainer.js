import React from "react";
import Stock from "./Stock";

function StockContainer({stocksArray, portfolioArray, setPortfolioArray}) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocksArray.map((stock) => (
        <Stock
        key={stock.id}
        id={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        type={stock.type}
        price={stock.price}
        stock={stock}
        portfolioArray={portfolioArray}
        setPortfolioArray={setPortfolioArray}
        />
      ))}
    </div>
  );
}

export default StockContainer;
