import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlinePicLeft } from "react-icons/ai";
export const menu = [
  {
    label: "All tasks",
    icon: AiOutlinePicLeft,
    link: "/",
  },
  {
    label: "Important!",
    icon: AiOutlineAlignLeft,
    link: "/important",
  },
  {
    label: "Completed",
    icon: AiOutlineCheck,
    link: "/completed",
  },
  {
    label: "Do it now!",
    icon: AiOutlineCalendar,
    link: "/incomplete",
  },
];
