import React, { useState, useEffect } from "react";
import { money } from "../axios";

function Valyuta() {
  const [rates, setRates] = useState({});
  const [valute, setValute] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [converted, setConverted] = useState("");

  useEffect(() => {
    money
      .get("latest?apikey=YOUR_ACCESS_KEY")
      .then((response) => {
        setRates(response.data.rates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleConvert() {
    if (rates[currency] && rates[toCurrency]) {
      const result = (amount / rates[currency]) * rates[toCurrency];
      setConverted(result.toFixed(2));
    }
  }

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {valute.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {valute.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valyuta kiriting"
          className="border p-2"
        />
        <button
          onClick={handleConvert}
          className="w-full active:scale-95 transition-all rounded bg-blue-500 text-white p-2"
        >
          Otkazish
        </button>
        <h6>
          {converted} {toCurrency}
        </h6>
      </div>
    </div>
  );
}

export default Valyuta;
