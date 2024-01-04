import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="bg-primary text-white display-4">
        Number of clicks : {count}
      </p>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
