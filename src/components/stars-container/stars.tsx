"use client";

import { FC, useCallback, useEffect, useState } from "react";
import StarButton from "./star-button";

interface StarsProps {
  initialValue?: number;
  numberOfStars?: number | null;
  onChange?: Function;
}

const Stars: FC<StarsProps> = ({
  initialValue = 0,
  numberOfStars = 5,
  onChange,
}): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number>(0);

  // set the star value immediately if props has been given
  useEffect(() => setValue(initialValue), [initialValue]);

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

  if (!numberOfStars) {
    return <>Star rating not yet available</>;
  }

  return (
    <div data-testid="starsComponent">
      {[...Array(numberOfStars)].map((_, i) => {
        return (
          <StarButton
            index={i}
            currentRating={value}
            hoveredRating={hoverValue}
            handleHover={setHoverValue}
            handleClick={setNewValue}
          />
        );
      })}
    </div>
  );
};

export default Stars;
