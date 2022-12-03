import React from "react";

export function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-8">
      <p>Count: {count}</p>
      <button
        className="bg-gray-400 hover:bg-gray-500 p-2"
        onClick={() => setCount(count + 1)}
      >
        Increment count
      </button>
    </div>
  );
}
