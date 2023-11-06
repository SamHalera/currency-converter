import "./App.css";
import { useState } from "react";
import rates from "./assets/currency";

function App() {
  //convert from X to Y
  //nb currency * taux de change currency X / taux de change currency Y

  const [valueFromCurrency, setValueFromCurrency] = useState(0);
  const [valueToCurrency, setValueToCurrency] = useState(0);
  // console.log(valueFromCurrency);
  // console.log(valueToCurrency);

  const handleConverterEUToUSD = (event, fromRate, toRate) => {
    event.preventDefault();
    setValueToCurrency((valueFromCurrency * fromRate) / toRate);
  };

  const handleConverterUSDToEU = (event, fromRate, toRate) => {
    event.preventDefault();
    setValueFromCurrency((valueToCurrency * fromRate) / toRate);
  };

  return (
    <main>
      <div className="container">
        <div className="header flex-item">
          <h1>💵 EUR to USD 💵</h1>
        </div>
        <div className="converter-eu flex-item">
          <input
            onChange={(event) => {
              setValueFromCurrency(event.target.value);
              setValueToCurrency(0);
            }}
            type="text"
            name="euro"
            id="euro"
            value={valueFromCurrency}
          />
          <label htmlFor="euro"> €</label>
        </div>
        <div className="buttons-container">
          <button
            onClick={(event) => {
              handleConverterEUToUSD(event, rates.EUR, rates.USD);
            }}
            className="to-convert"
          >
            🔽
          </button>
          <button
            onClick={(event) => {
              handleConverterUSDToEU(event, rates.USD, rates.EUR);
            }}
            className="to-convert"
          >
            🔼
          </button>
        </div>
        <div className="converter-usd flex-item">
          <input
            onChange={(event) => {
              setValueToCurrency(event.target.value);
              setValueFromCurrency(0);
            }}
            type="text"
            name="usd"
            id="usd"
            value={valueToCurrency}
          />
          <label htmlFor="usd"> $</label>
        </div>
      </div>
    </main>
  );
}

export default App;
