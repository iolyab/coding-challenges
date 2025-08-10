import { useEffect, useState } from "react";

export const Merge = () => {
  const deepMerge = (obj1, obj2) => {
    let result = {};

    for (let key in obj1) {
      result[key] = obj1[key];
    }

    for (let key in obj2) {
      const val1 = result[key];
      const val2 = obj2[key];
      if (
        typeof val1 === "object" &&
        val1 !== null &&
        !Array.isArray(val1) &&
        typeof val2 === "object" &&
        val2 !== null &&
        !Array.isArray(val2)
      ) {
        result[key] = deepMerge(val1, val2);
      } else {
        result[key] = val2;
      }
    }
    return result;
  };

  const [merged, setMerged] = useState({});

  useEffect(() => {
    const obj1 = {
      user: { name: "Alice", address: { city: "Paris" } },
      age: 25,
    };
    const obj2 = {
      user: { address: { zip: 75001 } },
      job: "Developer",
    };

    const mergedResult = deepMerge(obj1, obj2);
    setMerged(mergedResult);
  }, []);

  return (
    <div>
      <p>Merged objects:</p>
      <pre>{JSON.stringify(merged, null, 2)}</pre>
    </div>
  );
};
