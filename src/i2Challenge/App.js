import { useEffect, useState } from "react";
import "./index.css";
function App() {
  const [coins, SetCoins] = useState([]);
  const [hasNext, setHasNext] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.frontendexpert.io/api/fe/cryptocurrencies/?page=${page}`
        );
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const { coins, hasNext } = await response.json();
        // SetDat(data);
        console.log(coins);
        console.log(hasNext);
        SetCoins(coins);
        setHasNext(hasNext);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);
  const HandelNext = () => {
    if (!loading && hasNext) {
      setPage(page + 1);
    }
  };
  const HandelPrev = () => {
    if (!loading && page !== 0) {
      setPage(page - 1);
    }
  };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, i) => (
                <tr key={i}>
                  <td>{coin.name}</td>
                  <td>{coin.price}</td>
                  <td>{coin.marketCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={HandelPrev} disabled={page === 0 ? true : false}>
            ⏮️
          </button>
          <button onClick={HandelNext} disabled={hasNext ? false : true}>
            ⏭️
          </button>
        </>
      )}
    </div>
  );
}

export default App;
