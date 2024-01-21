import clsx from "clsx";

interface BadgeProps {
  type: "completed" | "incomplete";
}
const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <div
      className={clsx(
        `w-fit cursor-pointer rounded-xl p-1  px-3 text-white`,
        type === "completed" ? "bg-[#66AF64FF]" : "bg-[#D66F5FFF]",
      )}
    >
      {type === "completed" ? "Completed" : "Incomplete"}
    </div>
  );
};

export default Badge;
