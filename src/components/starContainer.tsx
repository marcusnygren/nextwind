"use client";

import { FC, useCallback, useState } from "react";
import { Stars } from "./stars";

const StarContainer = () => {
  const [value, setValue] = useState<number>(0);

  const handleClick = useCallback((newValue: number) => setValue(newValue), [value]);

  return (
    <>
      Current value: {value}
      <Stars starValue={value} numberOfStars={5} handleNewValue={handleClick} />
    </>
  );
};

export default StarContainer;
