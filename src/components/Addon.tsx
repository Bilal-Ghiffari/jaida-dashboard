"use client";

import React from "react";
import Graphic1 from "@/assets/images/graphic1.svg";
import Button from "@/design-system/components/button";
import {
  ArrowUp,
  Bell,
  ChatText,
  DotsThree,
  EnvelopeSimple,
  User,
} from "@phosphor-icons/react";
import Stack from "design-system/dist/components/Chart/Stack";
import Gauge from "design-system/dist/components/Chart/Gauge";

type Props = {};

export default function Addon({}: Props) {
  return (
    <div className="w-[324px] h-[1000px]">
      <div className="relative flex w-full h-full overflow-hidden">
        <span className="absolute w-[488px] h-[580px] transform -top-[309px] -left-[28px]">
          <Graphic1 className="w-full h-full text-primary/30" />
        </span>
        <div className="relative px-6 z-20 flex flex-col pt-6 h-full">
          <header className="flex justify-between gap-x-3">
            <Button
              size="md"
              state="custom"
              className="bg-white shadow-lg aspect-square items-center justify-center text-gray-500 inline-flex flex-none"
            >
              <button>
                <ChatText size={16} />
              </button>
            </Button>
            <Button
              size="md"
              state="custom"
              className="bg-white shadow-lg aspect-square items-center justify-center text-gray-500 inline-flex flex-none ml-auto"
            >
              <button>
                <span className="relative">
                  <span className="absolute w-2 h-2 border-2 border-primary bg-[#F9BE7A] rounded-full transform top-0"></span>
                  <Bell size={24} />
                </span>
              </button>
            </Button>
            <Button
              size="md"
              state="custom"
              className="bg-white shadow-lg aspect-square items-center justify-center text-gray-500 inline-flex flex-none"
            >
              <button>
                <User size={16} />
              </button>
            </Button>
          </header>
          <div className="flex flex-col z-10 items-center justify-center my-11 w-full">
            <div className="w-24 h-24 bg-[#EB8233] rounded-full relative mb-5">
              <span className="absolute top-0 left-0 transform rounded-full bg-[#F9896B] h-6 w-6 border-4 border-white"></span>
              <span
                className="absolute w-full h-full"
                style={{ top: "-16px", right: "-16px" }}
              >
                <svg
                  viewBox="0 0 68 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.298 2.18811C21.3606 1.00758 22.3646 0.0941028 23.5424 0.195924C29.9323 0.748333 36.1504 2.46167 41.8403 5.24539C48.1611 8.33775 53.6772 12.6762 58.0021 17.9567C62.327 23.2372 65.356 29.332 66.8769 35.8141C68.3978 42.2962 68.3737 49.0087 66.8065 55.4812C65.2392 61.9537 62.1667 68.0297 57.8041 73.2834C53.4415 78.5371 47.8945 82.8414 41.5517 85.8947C35.2089 88.948 28.2237 90.6764 21.0858 90.9588C14.7185 91.2107 8.36696 90.3065 2.38528 88.3045C1.2046 87.9094 0.656451 86.575 1.16415 85.4381V85.4381C1.63555 84.3826 2.84923 83.8861 3.9454 84.2532C9.36466 86.0685 15.1194 86.8884 20.8885 86.6601C27.3515 86.4044 33.6761 84.8395 39.4192 82.0749C45.1622 79.3104 50.1847 75.4131 54.1347 70.6562C58.0848 65.8993 60.8668 60.3978 62.2859 54.5374C63.7049 48.6769 63.7267 42.5991 62.3496 36.73C60.9725 30.8609 58.2299 25.3424 54.314 20.5612C50.3981 15.78 45.4036 11.8518 39.6805 9.0519C34.5977 6.56518 29.0493 5.02183 23.3453 4.50059C22.1558 4.39189 21.2347 3.38087 21.298 2.18811V2.18811Z"
                    className="fill-primary"
                  />
                </svg>
              </span>
              <div className="rounded-full overflow-hidden transform translate-y-2">
                <img src="/images/profile.png" alt="avatar" />
              </div>
            </div>
            <div className="flex flex-col text-center mb-9">
              <h6 className="text-[#505887] font-bold">Bilal Al Ghiffari</h6>
              <span className="text-secondary text-sm">Frontend Developer</span>
            </div>
            <div className="flex flex-row justify-evenly text-center w-full">
              <div className="flex flex-col gap-y-2">
                <h6 className="text-[#505887]">457</h6>
                <span className="text-secondary text-sm">Projects</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <h6 className="text-[#505887]">450</h6>
                <span className="text-secondary text-sm">Completed</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <h6 className="text-[#505887]">12</h6>
                <span className="text-secondary text-sm">Awards</span>
              </div>
            </div>
          </div>
          <div className="bg-primary h-[300px] rounded-t-[30px] px-7 py-6 relative flex-1 flex flex-col">
            <span className="absolute -top-[6.75rem] -right-[7.75rem] w-[221px] h-[242px] transform -rotate-180">
              <Graphic1 className="w-full h-full text-white/30" />
            </span>
            <div className="flex justify-between text-white mb-[61px]">
              <h6 className="font-bold">Campaign Earnings</h6>
              <button>
                <DotsThree size={22} />
              </button>
            </div>
            <Gauge
              options={{
                percentage: 80,
                width: 300,
                height: 200,
              }}
              data={[
                {
                  key: "spent",
                  value: 500,
                  color: "#F98968",
                },
                {
                  key: "level",
                  value: 100,
                  color: "#B4E8F4",
                },
              ]}
            />
            <div className="flex flex-row text-white mt-8">
              <div className="flex flex-col gap-y-2">
                <h6 className="text-xs">Earnings</h6>
                <span className="flex items-end">
                  <span className="text-lg leading-5 font-medium">$15.5K</span>
                  <span className="text-xs text-green-500 inline-flex">
                    <ArrowUp size={16} /> <span>17%</span>
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-y-2 ml-auto">
                <h6 className="text-xs">Expenses</h6>
                <span className="flex items-end">
                  <span className="text-lg leading-5 font-medium">$11.4K</span>
                  <span className="text-xs text-yellow-500 inline-flex">
                    <ArrowUp size={16} /> <span>17%</span>
                  </span>
                </span>
              </div>
            </div>
            <Stack
              options={{
                height: 150,
                widht: 300,
              }}
              data={[
                {
                  legend: "level",
                  color: "#ffffff",
                  type: "bar",
                  values: [
                    {
                      value: 40,
                      label: "01",
                    },
                    {
                      value: 38,
                      label: "02",
                    },
                    {
                      value: 15,
                      label: "03",
                    },
                    {
                      value: 35,
                      label: "04",
                    },
                    {
                      value: 20,
                      label: "05",
                    },
                    {
                      value: 55,
                      label: "06",
                    },
                    {
                      value: 10,
                      label: "07",
                    },
                    {
                      value: 40,
                      label: "08",
                    },
                    {
                      value: 20,
                      label: "09",
                    },
                    {
                      value: 18,
                      label: "10",
                    },
                    {
                      value: 50,
                      label: "11",
                    },
                    {
                      value: 38,
                      label: "12",
                    },

                    {
                      value: 50,
                      label: "13",
                    },
                    {
                      value: 60,
                      label: "14",
                    },
                    {
                      value: 40,
                      label: "15",
                    },
                    {
                      value: 60,
                      label: "16",
                    },
                    {
                      value: 65,
                      label: "17",
                    },
                    {
                      value: 70,
                      label: "18",
                    },
                    {
                      value: 65,
                      label: "19",
                    },
                    {
                      value: 57,
                      label: "20",
                    },
                    {
                      value: 50,
                      label: "21",
                    },
                    {
                      value: 70,
                      label: "22",
                    },
                    {
                      value: 75,
                      label: "23",
                    },
                    {
                      value: 80,
                      label: "24",
                    },
                  ],
                },
              ]}
            />
            <div className="bg-[#F9896B] relative flex flex-col text-white p-4 rounded-xl mt-auto overflow-hidden">
              <span className="absolute -top-[8.5rem] -right-[1.5rem] w-[221px] h-[242px]">
                <Graphic1 className="w-full h-full text-white/10" />
              </span>
              <span className="absolute -top-[8.5rem] -right-[1.5rem] w-[221px] h-[242px]">
                <Graphic1 className="w-full h-full text-white/10" />
              </span>
              <h6 className="font-bold ">Need More Ideas?</h6>
              <p className="text-xs">Upgrade to pro max for added benefits</p>
              <span className="text-right text-xs">Upgrade now!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
