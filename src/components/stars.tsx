import { FC, useCallback, useEffect, useState } from "react";
import { Star } from "./star";

interface StarsProps {
  starValue?: number | null;
  numberOfStars?: number | null;
  onChange?: Function;
}

export const Stars: FC<StarsProps> = ({
  starValue = null,
  numberOfStars = 5,
  onChange,
}): JSX.Element => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = useCallback(
    (newValue: number) => {
      // immediately remove hover styling on value click so the user can see the new value
      setHoverValue(null);

      if (newValue === starValue) {
        if (onChange) {
          onChange(0);
        }
      } else {
        if (onChange) {
          onChange(newValue);
        }
      }
    },
    [starValue]
  );

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
      );
    }

    return array;
  }

  return (
    <div data-testid="starsComponent">{renderStars(starValue, numberOfStars)}</div>
  );
};
