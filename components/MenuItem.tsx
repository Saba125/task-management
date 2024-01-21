import { IconType } from "react-icons";
// border-r-4 border-[#70996CFF]
interface MenuItemProps {
  label: string;
  onClick?: () => void;
  icon: IconType;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, icon: Icon }) => {
  return (
    <div className=" flex items-center justify-center gap-2.5     p-2 text-white transition hover:bg-[#323232FF]">
      <Icon size={20} />
      <div> {label} </div>
    </div>
  );
};

export default MenuItem;
