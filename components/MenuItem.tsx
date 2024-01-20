import { IconType } from "react-icons";

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  icon: IconType;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, icon: Icon }) => {
  return (
    <div className=" flex items-center  justify-center gap-2.5 p-2 text-white transition hover:bg-red-700">
      <Icon size={26} />
      <div> {label} </div>
    </div>
  );
};

export default MenuItem;
