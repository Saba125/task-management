"use client";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlinePicLeft } from "react-icons/ai";
import { menu } from "@/lib/menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
const SideBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link);
  };
  return (
    <div className="flex h-[100vh]  flex-col items-center justify-between rounded-lg border-2  border-[#2B2B2BFF] bg-[#212121FF]  ">
      <div className="flex flex-row items-center gap-3 p-5">
        <Image
          src="/placeholder.jpg"
          width={40}
          className="rounded-full"
          height={40}
          alt="user-img"
        />
        <div className="text-white">Saba Jiadze</div>
      </div>

      <div className="flex w-full  flex-col justify-center   gap-3">
        {menu.map((item, index) => (
          <MenuItem
            key={item.label}
            label={item.label}
            onClick={() => handleClick(item.link)}
            icon={item.icon}
            selected={pathName === item.link}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
