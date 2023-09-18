"use client";

import { FC, useEffect, useState } from "react";
import { Star } from "./star";

interface StarsProps {
  starValue: number | null;
  numberOfStars: number;
}

export const Stars: FC<StarsProps> = ({
  starValue,
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

  function handleClick(value: number) {
    console.log("clicked " + value);
    setValue(value);
  }

  function renderStars(
    value: StarsProps["starValue"],
    numberOfStars: StarsProps["numberOfStars"]
  ) {
    let array = [];

    for (let i = 0; i < numberOfStars; i++) {
      array.push(
        <a key={i} onClick={() => handleClick(i)}>
          <Star
            isSelected={typeof value === "number" ? i == value - 1 : false}
          />
        </a>
      );
    }

    return array;
  }

  return <div data-testid="starsComponent">{renderStars(value, numberOfStars)}</div>;
};
