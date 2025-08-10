import { useRef, useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";
import classes from "./likeButton.module.scss";

export const LikeButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState("");

  const simulateApiRequest = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        Math.random() < 0.5
          ? resolve("Success")
          : reject(new Error("Request failed. Please try again."));
      }, 2000);
    });
  };

  const handleClick = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      await simulateApiRequest();
      setIsLiked((prev) => !prev);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.button}>
      <button
        onClick={handleClick}
        className={
          isLoading
            ? classes.loadingButton
            : isLiked
            ? classes.likedButton
            : classes.likeButton
        }
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <SpinnerIcon />
            Like
          </>
        ) : (
          <>
            <HeartIcon />
            {isLiked ? "Liked" : "Like"}
          </>
        )}
      </button>
      {error && <p className={classes.errorMessage}>{error}</p>}
    </div>
  );
};
