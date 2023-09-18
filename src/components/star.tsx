import { FC } from "react";

interface StarProps {
  isSelected: boolean;
}

export const Star: FC<StarProps> = ({ isSelected }) => {
  return <>{isSelected ? 1 : 0}</>;
};
