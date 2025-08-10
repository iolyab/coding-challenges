import { useState } from "react";
import { ProgressBarItem } from "./ProgressBarItem";

export const ProgressBar = () => {
  const [bars, setBars] = useState<number[]>([]);

  const handleClick = () => {
    setBars((prev) => [...prev, Date.now()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <div style={{ marginTop: "20px" }}>
        {bars.map((id) => (
          <ProgressBarItem key={id} />
        ))}
      </div>
    </div>
  );
};
