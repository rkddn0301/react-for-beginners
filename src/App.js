import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); // Coin API를 가져오기 전까지의 화면 state
  const [coins, setCoins] = useState([]); // Coin API 정보가 들어갈 배열 state

  const [usd, setUsd] = useState(0); // 달러 입력란 state
  const [tracker, setTracker] = useState(0); // 달러 입력 시

  // react-DOM 페이지 접속 시 바로 coin 페이지 API 정보를 가져오도록 설정
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers`).then((response) => {
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
    });
  }, []);

  // 달러 입력 시 바로 반환되는 함수
  const onChange = (e) => {
    setUsd(e.target.value);
  };

  // Coin 종류 선택 시 바로 반영되는 함수
  const onSelect = (e) => {
    // 초기값이 "xx"인데 해당사항이 아니면 선택된 것이므로 tracker 작업 진행
    if (e.target.value !== "xx") {
      const coinTracker = parseInt(e.target.value);
      setTracker(coinTracker);
    }
    // 종류 변경 시 작성한 값 초기화
    setUsd(0);
  };

  // Coin 전환이 제대로 되었는지 확인
  useEffect(() => {
    console.log(tracker);
  }, [tracker]);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {/* Coin API가 삽입되어 종류를 확인하는 select 태그 */}
          <select onChange={onSelect}>
            {/* 초기 선택란은 value="xx" */}
            <option value="xx">Choice</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}):${parseInt(coin.quotes.USD.price)}{" "}
                USD
              </option>
            ))}
          </select>
          <br />
          {/* USD 달러 입력 input 태그 */}
          <label htmlFor="caculator">USD</label>
          <input
            id="caculator"
            type="number"
            placeholder="$USD"
            onChange={onChange}
            value={usd}
          />
          <br />
          {/* CoinTracker 반영 input 태그 */}
          <label htmlFor="tracker">track</label>
          <input
            id="tracker"
            type="number"
            placeholder="tracker"
            onChange={onChange}
            value={usd / tracker}
            disabled
          />
        </div>
      )}
    </div>
  );
}

export default App;
