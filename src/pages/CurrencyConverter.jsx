import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[targetCurrency];
      setExchangeRate(rate);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = () => {
    if (exchangeRate) {
      const convertedAmountValue = (amount * exchangeRate).toFixed(2);
      setConvertedAmount(convertedAmountValue);
    }
  };

  return (
    <div>
      <h1>Real-time Currency Converter</h1>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>From:</label>
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options here */}
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          {/* Add more currency options here */}
        </select>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {exchangeRate && convertedAmount && (
        <p>
          {amount} {baseCurrency} is equal to {convertedAmount} {targetCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
