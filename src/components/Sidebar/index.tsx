"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/design-system/components/Logo";
import VerticalMenu from "@/design-system/components/VerticalMenu";
import {
  Calendar,
  ChatCircle,
  Cloud,
  Compass,
  House,
  ReadCvLogo,
  ShareNetwork,
  Tag,
  User,
} from "@phosphor-icons/react";
import Image from "next/image";

type Props = {};

export default function Sidebar({}: Props) {
  const pathName = usePathname();
  return (
    <aside className="w-[204px] h-full flex-none gap-y-14 flex flex-col">
      <div className="ml-6 mt-10">
        <Logo />
      </div>
      <VerticalMenu
        pathname={pathName}
        className="gap-y-9"
        lists={[
          {
            id: "home",
            link: <Link href="/">Home</Link>,
            slug: "/",
            icon: <House size={20} />,
          },
          {
            id: "locations",
            link: <Link href="/locations">Location</Link>,
            slug: "/locations",
            icon: <Compass size={20} />,
          },
          {
            id: "curriculum-vites",
            link: <Link href="/curriculum-vites">Curriculum Vitae</Link>,
            slug: "/curriculum-vites",
            icon: <ReadCvLogo size={20} />,
          },
          {
            id: "messages",
            link: <Link href="/messages">Message</Link>,
            slug: "/messages",
            hasNotification: true,
            icon: <ChatCircle size={20} />,
            badge: {
              label: "10",
              state: "primary",
            },
          },
        ]}
      />
      <hr className="mx-7" />

      <VerticalMenu
        pathname={pathName}
        className="gap-y-9"
        lists={[
          {
            id: "shared-files",
            link: <Link href="/shared-files">Shared Files</Link>,
            slug: "/shared-files",
            icon: <ShareNetwork size={20} />,
          },
          {
            id: "saved",
            link: <Link href="/saved">Saved</Link>,
            slug: "/saved",
            icon: <Tag size={20} />,
          },
        ]}
      />

      <div className="mt-auto px-6">
        <div className="top-12 relative rounded-2xl bg-[#ECFDFF] w-full h-44">
          <Image
            src="/images/richie-cs-lets-talk.webp"
            alt="customer-service"
            width="157"
            height="211"
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0"
          />
          <button className="absolute whitespace-nowrap top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white pt-4 pb-3 px-5 z-10 rounded-2xl shadow-[1px_10px_60px_0px_rgba(0,_0,_0,_0.25">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </aside>
  );
}
