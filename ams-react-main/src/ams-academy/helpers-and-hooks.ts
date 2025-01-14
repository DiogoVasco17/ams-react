import { useState } from "react";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function stringSpaceReplace(s: string) {
  return s.replace(" ", "###");
}

export function useComponentHook(initialValue: number) {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return { increment, decrement, value };
}
