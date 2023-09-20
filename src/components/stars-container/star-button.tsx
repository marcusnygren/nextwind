import { FC } from "react";
import { Star } from "./star";

interface StarProps {
  currentRating: number;
  hoveredRating: number;
  index: number;
  handleClick: Function;
  handleHover: Function;
}

const StarButton: FC<StarProps> = ({
  currentRating,
  hoveredRating,
  index,
  handleClick,
  handleHover,
}) => {
  const ratingValue = index + 1;

  return (
    <button
      key={index}
      data-testid={"button-" + ratingValue}
      onClick={() => handleClick(ratingValue)}
      onFocus={() => handleHover(ratingValue)}
      onMouseOver={() => handleHover(ratingValue)}
      onMouseLeave={() => handleHover(0)}
      onBlur={() => handleHover(0)}
    >
      <Star
        isSelected={!hoveredRating && index <= currentRating - 1}
        isHovered={currentRating <= hoveredRating - 1}
      />
    </button>
  );
};

export default StarButton;
