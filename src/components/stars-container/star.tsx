import { FC } from "react";

interface StarProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Star: FC<StarProps> = ({ isSelected, isHovered }) => {
  if (isHovered) {
    return <span className="text-yellow-600">☆</span>;
  } else if (isSelected) {
    return <span className="text-yellow-600">★</span>;
  } else {
    return <span>☆</span>;
  }
};
