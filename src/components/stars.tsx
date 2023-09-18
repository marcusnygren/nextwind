"use client";

import { FC, useEffect, useState } from "react";
import { Star } from "./star";

interface StarsProps {
  starValue?: number | null;
  numberOfStars?: number | null;
}

export const Stars: FC<StarsProps> = ({
  starValue = null,
  numberOfStars = 5,
}): JSX.Element => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (typeof starValue === "number") {
      setValue(starValue);
    } else {
      setValue(null);
    }
  }, [starValue]);

  function handleClick(newValue: number) {
    if (newValue === value) {
      //nullify
      setValue(null);
    } else {
      setValue(newValue);
    }
  }

  function renderStars(
    value: StarsProps["starValue"],
    numberOfStars: StarsProps["numberOfStars"]
  ) {
    let array = [];

    if (!numberOfStars) {
      return <>Star rating not yet available</>;
    }

    for (let i = 0; i < numberOfStars; i++) {
      array.push(
        <a
          key={i}
          data-testid={"button-" + i}
          onClick={() => handleClick(i + 1)}
        >
          <Star
            isSelected={typeof value === "number" ? i == value - 1 : false}
          />
        </a>
      );
    }

    return array;
  }

  return (
    <div data-testid="starsComponent">{renderStars(value, numberOfStars)}</div>
  );
};
