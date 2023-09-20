"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { Star } from "./star";

interface StarsProps {
  initialValue?: number | null;
  numberOfStars?: number | null;
  onChange?: Function;
}

const Stars: FC<StarsProps> = ({
  initialValue = null,
  numberOfStars = 5,
  onChange,
}): JSX.Element => {
  const [value, setValue] = useState<number | null>(null);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  useEffect(() => {
    if (typeof initialValue === "number") {
      setValue(initialValue);
    } else {
      setValue(null);
    }
  }, [initialValue]);

  const handleClick = useCallback(
    (newValue: number) => {
      // immediately remove hover styling on value click so the user can see the new value
      setHoverValue(null);

      if (newValue === value) {
        // reset if clicks same as current
        setValue(null);

        if (onChange) {
          onChange(0);
        }
      } else {
        setValue(newValue);

        if (onChange) {
          onChange(newValue);
        }
      }
    },
    [value]
  );

  function renderStars(
    value: StarsProps["initialValue"],
    numberOfStars: StarsProps["numberOfStars"]
  ) {
    if (!numberOfStars) {
      return <>Star rating not yet available</>;
    }

    return [...Array(numberOfStars)].map((_, i) => (
      <a
        key={i}
        data-testid={"button-" + (i + 1)}
        onClick={() => handleClick(i + 1)}
        onMouseOver={() => setHoverValue(i + 1)}
        onMouseLeave={() => setHoverValue(null)}
      >
        <Star
          isSelected={
            typeof value === "number" && !hoverValue ? i <= value - 1 : false
          }
          isHovered={
            typeof hoverValue === "number" ? i <= hoverValue - 1 : false
          }
        />
      </a>
    ));
  }

  return (
    <div data-testid="starsComponent">{renderStars(value, numberOfStars)}</div>
  );
};

export default Stars;
