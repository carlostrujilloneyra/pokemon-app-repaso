import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={36} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },

  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={36} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },

  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={36} />,
    title: "Pokemons",
    subTitle: "Ver Pokemons",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-96 left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl flex items-center font-bold text-white mb-2">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500 mb-3">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-10 h-10"
              width={50}
              height={50}
              quality={100}
              src="/images/profile.jpg"
              alt="User avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Carlos Trujillo
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => {
          return <SidebarMenuItem key={item.path} {...item} />;
        })}
      </div>
    </div>
  );
};
