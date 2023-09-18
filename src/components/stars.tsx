"use client";

import { FC, useEffect, useState } from "react";

interface StarProps {
  isSelected: boolean;
}

const Star: FC<StarProps> = ({ isSelected }) => {
  return <>{isSelected ? 1 : 0}</>;
};

interface StarsProps {
  starValue: number;
  numberOfStars: number;
}

export const Stars: FC<StarsProps> = ({
  starValue,
  numberOfStars = 5,
}): JSX.Element => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof starValue === "number") {
      setValue(starValue);
    }
  }, [starValue]);

  function renderStars(
    value: StarsProps["starValue"],
    numberOfStars: StarsProps["numberOfStars"]
  ) {
    let array = [];

    for (let i = 0; i < numberOfStars; i++) {
      array.push(<Star isSelected={i == value - 1} />);
    }

    return array;
  }

  return (
    <>
      <p>{renderStars(value, numberOfStars)}</p>
    </>
  );
};
