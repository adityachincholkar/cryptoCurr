import { useEffect, useState } from "react";
function SwTimer() {
  const [t, setT] = useState(10);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const s = setInterval(() => {
      setT((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(s);
  }, []);

  return (
    <div>
      <button onClick={() => setPause(!pause)}>Start Countdown</button>
      {t}
    </div>
  );
}

export default SwTimer;
