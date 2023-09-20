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

  // set the star value immediately if props has been given
  useEffect(() => {
    typeof initialValue === "number" ? setValue(initialValue) : setValue(null);
  }, [initialValue]);

  const setNewValue = useCallback(
    (newValue: number) => {
      setHoverValue(0); // immediately remove hover styling on value click so the user can see the new value

      // set the new value
      const newRatingValue = newValue === value ? 0 : newValue;
      setValue(newRatingValue);
      onChange && onChange(newRatingValue); // let parent know as well
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

    return [...Array(numberOfStars)].map((_, i) => {
      const ratingValue = i + 1;

      return (
        <a
          key={i}
          data-testid={"button-" + ratingValue}
          onClick={() => setNewValue(ratingValue)}
          onMouseOver={() => setHoverValue(ratingValue)}
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
      );
    });
  }

  return (
    <div data-testid="starsComponent">{renderStars(value, numberOfStars)}</div>
  );
};

export default Stars;
