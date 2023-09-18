"use client";

import { useState } from "react";
import { Stars } from "./stars";

const StarContainer = () => {
  const [value, setValue] = useState<number>(5);

  return (
    <div>
      <p data-testid="currentValueText">Current value: {value}</p>
      <Stars starValue={value} numberOfStars={5} onChange={setValue} />
    </div>
  );
};

export default StarContainer;
