import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/src/components/ui/navigation-menu";
import Link from "next/link";

type Menu = {
  title?: string;
  link?: string;
  subMenu?: Menu[];
}

const menuList: Menu[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

export const Header: React.FC = () => {
  return (
    <NavigationMenu className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
      <NavigationMenuList key={1} className="flex gap-6 items-center text-sm text-gray-300">
        {menuList.map(({ title, link, subMenu }) => (
          <NavigationMenuItem className="hover:underline cursor-pointer">
            <NavigationMenuLink asChild>
              <Link href={link}>{title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <div className="text-sm text-gray-400">Backend Developer</div>
    </NavigationMenu>
  )
}