import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true); //1.loading의 상태를 설정해준다.
  const [coin, setCoin] = useState([]); //데이터로 들어오는 코인을 저장하기 위해 useState로 빈 배열을 coin에 저장해준다.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        setLoading(false);
      }); // 2. url에 있는 api를 fetch로 불러오고, response를 json에 저장한 다음 json을 coin에 데이터로 설정해주고, loading을 그만두기 위해 false로 지정해준다.
  }, []);
  return (
    <div>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coin.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}){coin.quotes.USD.price}
          </li> //3. map을 사용하여 배열안에 있는 요소들에 접근하여 원하는 데이터를 출력한다. 
        ))}
      </ul>
    </div>
  );
}
export default App;
