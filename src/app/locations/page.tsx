"use client";

import Logo from "../../components/Logo";
import VerticalMenu from "../../components/VerticalMenu";
// 55:07

export default function Locations() {
  return (
    <main className="">
      <div className="flex">
        <aside className="w-[284px] h-full flex-none">
          <div className="ml-6 mt-10">
            <Logo />
          </div>
          <VerticalMenu
            lists={[
              { id: "home", label: "Home", slug: "/" },
              {
                id: "locations",
                label: "Locations",
                slug: "/locations",
              },
              {
                id: "cloud-storage",
                label: "Cloud Storage",
                slug: "/cloud-storage",
              },
              { id: "messages", label: "Messages", slug: "/messages" },
            ]}
          />
        </aside>
        <span className="h-full border border-gray-100 w-[1px]"></span>
        <div className="w-full h-full"></div>
        <div className="w-[324px] h-full flex-none"></div>
      </div>
    </main>
  );
}
