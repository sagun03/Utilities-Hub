import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [reelUrl, setReelUrl] = useState(
    "https://www.instagram.com/reel/Csjmv_Igi0Q/?igshid=NjFhOGMzYTE3ZQ=="
  );
  const [responseObj, setResponseObj] = useState();

  useEffect(() => {
    fetchExchangeRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseCurrency, targetCurrency]);

  const getId = (url) => {
    return url.split("reel/")[1].split(" ")[0].slice(0, 11);
  };
  console.log(
    "process.env.REACT_APP_RAPIDAPI_KEY",
    process.env.REACT_APP_RAPIDAPI_KEY
  );
  const onChangehandler = (e) => {
    setReelUrl(e.target.value);
  };
  const fetchReel = async () => {
    const reelId = getId(reelUrl);
    console.log("reelId", reelId);
    console.log(reelId);
    if (reelId.length !== 11) {
      alert("Invaid Reel URL");
      return;
    }
    const response = await fetch(
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${reelId}&response_type=reels&corsEnabled=false`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
          "x-rapidapi-host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setResponseObj(data[0].items[0]);
  };

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
      <button onClick={fetchReel}>Convert</button>
      {responseObj && (
        <>
          {" "}
          <header className="reel-header">
            <div className="reel-creator">
              <img
                src={responseObj.user.profile_pic_url}
                className="profile-picture"
                alt="profile"
              />
              <div className="creator-info">
                <h3>{responseObj.user.username}</h3>
                <p>{responseObj.user.full_name}</p>
              </div>
            </div>
          </header>
          <video controls className="reel-video">
            <source
              src={responseObj.video_versions[0].url}
              type="video/webm"
            ></source>
          </video>
          {/* <a className = "buttonDownload" target="_blank" download = "yasin.mp4" href={responseObj.video_versions[0].url} >Download !!!</a> */}
          {/* <p className="reel-caption">{responseObj.caption.text}</p> */}
          <a
            className="buttonDownload"
            target="_blank"
            download="yasin.mp4"
            href={responseObj.video_versions[0].url}
          >
            Download
          </a>
          <p className="reel-caption">{responseObj.caption.text}</p>
          {(() => {
            if (responseObj.caption === "NULL") {
              return <div>No Captions</div>;
            } else if (responseObj.caption) {
              return <p className="post-caption">{responseObj.caption.text}</p>;
            }
          })()}
        </>
      )}
      {exchangeRate && convertedAmount && (
        <p>
          {amount} {baseCurrency} is equal to {convertedAmount} {targetCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
