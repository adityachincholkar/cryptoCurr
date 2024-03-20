import { useState } from "react";
import SwTimer from "./SwTimer";

function SwParent() {
  const [mount, setUnmount] = useState(true);
  return (
    <div>
      <button onClick={() => setUnmount(!mount)}>
        {mount ? "Mount" : "Unmount"}
      </button>
      {mount && <SwTimer />}
    </div>
  );
}

export default SwParent;
