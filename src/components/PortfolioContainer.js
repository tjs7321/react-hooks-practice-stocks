import React from "react";
import PortfolioItem from "./PortfolioItem";

function PortfolioContainer({portfolioArray, setPortfolioArray}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioArray.map((stock) => (
        <PortfolioItem
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

export default PortfolioContainer;
