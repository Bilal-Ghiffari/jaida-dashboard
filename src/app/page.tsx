"use client";

import Logo from "../components/Logo";
import VerticalMenu from "../components/VerticalMenu";
import IconHome from "@/components/Icons/home.svg";
import IconLocation from "@/components/Icons/locations.svg";
import IconCloud from "@/components/Icons/cloud.svg";
import IconMessage from "@/components/Icons/message.svg";
// 1:16:52

export default function Home() {
  return (
    <main className="">
      <div className="flex">
        <aside className="w-[284px] h-full flex-none">
          <div className="ml-6 mt-10">
            <Logo />
          </div>
          <VerticalMenu
            className="mt-[59px] gap-y-9"
            lists={[
              { id: "home", label: "Home", slug: "/", icon: <IconHome /> },
              {
                id: "locations",
                label: "Locations",
                slug: "/locations",
                icon: <IconLocation />,
              },
              {
                id: "cloud-storage",
                label: "Cloud Storage",
                slug: "/cloud-storage",
                icon: <IconCloud />,
              },
              {
                id: "messages",
                label: "Messages",
                slug: "/messages",
                hasNotification: true,
                icon: <IconMessage />,
                badge: {
                  label: "10",
                  state: "primary",
                },
              },
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
