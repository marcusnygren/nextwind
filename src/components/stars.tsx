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
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  useEffect(() => {
    if (typeof starValue === "number") {
      setValue(starValue);
    } else {
      setValue(null);
    }
  }, [starValue]);

  function handleClick(newValue: number) {
    // immediately remove hover styling on value click so the user can see the new value
    setHoverValue(null);

    if (newValue === value) {
      // reset if clicks same as current
      setValue(null);
    } else {
      setValue(newValue);
    }
  }

  function handleMouseOver(newHoverValue: number) {
    setHoverValue(newHoverValue);
  }

  function handleMouseLeave() {
    setHoverValue(null);
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
          data-testid={"button-" + (i + 1)}
          onClick={() => handleClick(i + 1)}
          onMouseOver={() => handleMouseOver(i + 1)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Star
            isSelected={typeof value === "number" ? i == value - 1 : false}
            isHovered={
              typeof hoverValue === "number" ? i <= hoverValue - 1 : false
            }
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
