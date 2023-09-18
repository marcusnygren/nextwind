"use client";

import { FC, useCallback, useState } from "react";
import { Stars } from "./stars";

const StarContainer = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div data-testid="starContainer"> 
      Current value: {value}
      <Stars starValue={value} numberOfStars={5} onChange={setValue} />
    </div>
  );
};

export default StarContainer;
