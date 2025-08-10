import { useState } from "react";

export const String = () => {
  const [input, setInput] = useState();
  const [reversedStr, setReversedStr] = useState();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const reverse = (input) => {
    let reversed: string = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    setReversedStr(reversed);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type the word..."
        />
        <button type="submit" onClick={() => reverse(input)}>
          Submit
        </button>
      </form>
      <p>{reversedStr}</p>
    </div>
  );
};
