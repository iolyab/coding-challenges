import { useEffect, useState } from "react";
import classes from "./progressBar.module.scss";

export const ProgressBarItem = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.progressBar}>
      <div className={classes.fill} style={{ width: `${progress}%` }} />
    </div>
  );
};
