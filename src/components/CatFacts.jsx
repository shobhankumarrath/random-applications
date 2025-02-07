import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import Card from './Cards';

const CatFacts = () => {
    const [catFact, setCatFact] = useState(null);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [loadingCatFact, setLoadingCatFact] = useState(false);
    const [loadingBitcoinPrice, setLoadingBitcoinPrice] = useState(false);

const fetchCatFact = () => {
    setLoadingCatFact(true);
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
        setLoadingCatFact(false);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
        setLoadingCatFact(false);
      });
  };

  const fetchBitcoinPrice = () => {
    setLoadingBitcoinPrice(true);
    // Replace with actual Bitcoin price API fetch logic
     fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => {
        setBitcoinPrice("$"+ data.bpi.USD.rate + " and £" + data.bpi.EUR.rate);
        setLoadingBitcoinPrice(false);
      })
      .catch((error) => {
        console.error("Error fetching bitcoin price:", error);
        setLoadingBitcoinPrice(false);
      });
  };
  return (
    <div className="flex flex-col justify-start items-start bg-gray-100 h-full">
      <Card
        title="Cat Facts"
        content={loadingCatFact ? "Fetching cat fact..." : catFact || "No cat fact available"}
        buttonText="Fetch New Cat Fact"
        onButtonClick={fetchCatFact}
      />
       <Card
        title="Real Time Bitcoin Price Index"
        content={loadingBitcoinPrice ? "Fetching Bitcoin price..." : bitcoinPrice || "No Bitcoin price available"}
        buttonText="Fetch Bitcoin Price"
        onButtonClick={fetchBitcoinPrice}
      />
      </div>
  );
};

export default CatFacts
