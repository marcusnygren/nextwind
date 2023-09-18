import { FC } from "react";

interface StarProps {
  isSelected: boolean;
  isHovered: boolean;
}

export const Star: FC<StarProps> = ({ isSelected, isHovered }) => {
  return <>{isHovered || isSelected ? "★" : "☆"}</>;
};
