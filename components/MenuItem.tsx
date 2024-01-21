"use client";
import clsx from "clsx";
import { IconType } from "react-icons";
interface MenuItemProps {
  label: string;
  onClick?: () => void;
  icon: IconType;
  selected: boolean;
}
const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  icon: Icon,
  selected,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `flex items-center justify-center gap-2.5 p-2 text-white transition hover:bg-[#323232FF]`,
        selected && `border-r-4 border-[#70996CFF]`,
      )}
    >
      <Icon size={20} />
      <div> {label} </div>
    </div>
  );
};

export default MenuItem;
