"use client";

import { useState } from "react";
import Stars from "./stars";

const StarContainer = () => {
  const [value, setValue] = useState<number>(5);

  return (
    <>
      <p data-testid="currentValueText">Current value: {value}</p>
      <Stars initialValue={value} numberOfStars={5} onChange={setValue} />
    </>
  );
};

export default StarContainer;
