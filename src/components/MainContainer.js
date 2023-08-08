import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocksArray, setStocksArray] = useState([])
  const [portfolioArray, setPortfolioArray] = useState([])
  const [sortQuery, setSortQuery] = useState("")
  const [filterQuery, setFilterQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r =>r.json())
    .then(r => setStocksArray(r))
  }, [])

  let sortedStocksArray = stocksArray
  if (sortQuery === "Alphabetically") {
    sortedStocksArray = stocksArray.sort((a,b) => a.name.localeCompare(b.name))
  }
  if (sortQuery === "Price") {
    sortedStocksArray = stocksArray.sort((a,b) => a.price-b.price)
  }
  
  let filteredStocksArray
  if (filterQuery === "") {filteredStocksArray = sortedStocksArray}
  if (filterQuery === "Tech") {filteredStocksArray = sortedStocksArray.filter(
    (stock) => stock.type === "Tech"
  )}
  if (filterQuery === "Sportswear") {filteredStocksArray = sortedStocksArray.filter(
    (stock) => stock.type === "Sportswear"
  )}
  if (filterQuery === "Finance") {filteredStocksArray = sortedStocksArray.filter(
    (stock) => stock.type === "Finance"
  )}

  return (
    <div>
      <SearchBar
      setSortQuery={setSortQuery}
      setFilterQuery={setFilterQuery}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
          stocksArray={filteredStocksArray}
          portfolioArray={portfolioArray}
          setPortfolioArray={setPortfolioArray}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
          portfolioArray={portfolioArray}
          setPortfolioArray={setPortfolioArray}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;