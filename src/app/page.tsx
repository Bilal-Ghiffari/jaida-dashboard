"use client";

// import Logo from "../components/Logo";
import Input from "@/design-system/components/Input";
import Chart from "@/design-system/components/Chart/Arc";
import Stack from "@/design-system/components/Chart/Stack";
import {
  ChartBar,
  EnvelopeSimple,
  MagnifyingGlass,
  Newspaper,
  RocketLaunch,
  ShieldCheck,
  SlidersHorizontal,
  User,
} from "@phosphor-icons/react";
import WidgetA from "@/components/WidgetA";
import Image from "next/image";
// import VerticalMenu from "../components/VerticalMenu";
// 1:16:52

export default function Home() {
  return (
    <div>
      <section className="flex justify-between mt-7">
        <div className="flex flex-col">
          <h1 className="text-primary font-bold text-3xl">Hello Guys</h1>
          <p className="text-[#9A9A9A] font-semibold text-[15px] mt-1">
            Welcome back, Let&#39;s get back to work.
          </p>
        </div>
        <Input
          wrapper={{
            className: "",
          }}
          addOn={
            <>
              <span className="absolute pointer-events-none flex left-0 items-center justify-center h-full opacity-30 aspect-square">
                <MagnifyingGlass size={20} />
              </span>
              <button className="absolute right-0 top-0 flex items-center justify-center h-full aspect-square opacity-30">
                <SlidersHorizontal size={20} />
              </button>
            </>
          }
          input={{
            id: "abs",
            type: "text",
            name: "abs",
            placeholder: "Searching Dashboard",
            className:
              "h-full w-full appearance-none hover:bg-gray-100 focus:outline-none bg-gray-50 rounded-md pl-14 py-4 text-sm",
          }}
        />
      </section>
      <section className="flex justify-between my-14">
        <div className="w-[342px]">
          <div className="flex justify-between mb-3">
            <h3 className="text-primary font-bold text-[16px]">
              Latest Customers
            </h3>
            <span className="text-[#9A9A9A]">View All</span>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row bg-[#F9F9F9] py-[13px] px-2 rounded-lg">
              <Image
                src="/images/harry-joe.png"
                alt="profil-customer"
                width={37}
                height={37}
                className="object-cover object-center rounded-[4px]"
              />
              <div className="flex flex-col ml-2 mr-auto">
                <p className="text-[#5B5B5B] text-sm font-semibold">
                  Alexander Khan
                </p>
                <span className="text-[#9698AB] text-[10px]">
                  24 Purchses | 123 Likes
                </span>
              </div>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-white shadow-sm shadow-[#5B5B5B] w-[32px] h-[32px] flex items-center justify-center mr-4">
                  <span>
                    <EnvelopeSimple size={10} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row bg-[#F9F9F9] py-[13px] px-2 rounded-lg">
              <Image
                src="/images/harry-joe.png"
                alt="profil-customer"
                width={37}
                height={37}
                className="object-cover object-center rounded-[4px]"
              />
              <div className="flex flex-col ml-2 mr-auto">
                <p className="text-[#5B5B5B] text-sm font-semibold">Daffa</p>
                <span className="text-[#9698AB] text-[10px]">
                  24 Purchses | 123 Likes
                </span>
              </div>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-white shadow-sm shadow-[#5B5B5B] w-[32px] h-[32px] flex items-center justify-center mr-4">
                  <span>
                    <EnvelopeSimple size={10} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[342px]">
          <div className="flex justify-between ">
            <h3 className="text-primary font-bold text-[16px]">
              Your Professional Status
            </h3>
            <span className="text-[#9A9A9A] text-sm">View All</span>
          </div>
          <div className="flex flex-row justify-between mt-12">
            <div className="w-[200px] flex flex-col items-start">
              <div>
                <h3 className="text-lg text-[#9698AB]">Current Level</h3>
                <p className="text-sm text-[#5B5B5B]">Expert</p>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg text-[#9698AB]">Tools</h3>
                <p className="text-sm text-[#5B5B5B]">Typescript/Javascript</p>
                <p className="text-sm text-[#5B5B5B]">React/Next</p>
              </div>
            </div>
            <div className="w-36">
              <Chart
                options={{ backgroundArc: "#F2F0FF" }}
                data={[
                  {
                    key: "level",
                    value: 1500,
                    maxValue: 2000,
                    startAnglePercentage: 25,
                    color: "#B4E8F4",
                  },
                  {
                    key: "spent",
                    value: 750,
                    maxValue: 1500,
                    color: "#F98968",
                  },
                  {
                    key: "revenue",
                    value: 1600,
                    maxValue: 2000,
                    color: "#51459E",
                  },
                ]}
              />
            </div>
          </div>
          <div className="w-full rounded-lg bg-[#CCFAFF] mt-8 flex gap-3 py-[21px] px-8">
            <RocketLaunch size={23} />
            <p className="text-sm text-center">
              You’ll get new Subscription offers
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-row gap-x-14">
        <div className="w-9/12">
          <div className="flex flex-row gap-x-16">
            <div className="bg-slate-200 py-3 px-5 rounded-xl">
              <div className="flex flex-col gap-y-2">
                <h6 className="text-secondary text-xs">Total Earnings</h6>
                <span className="font-bold text-primary">500K</span>
              </div>
            </div>
            <div className="bg-slate-200 py-3 px-5 rounded-xl">
              <div className="flex flex-col gap-y-2">
                <h6 className="text-secondary text-xs">Period</h6>
                <span className="font-bold text-primary">1 Month</span>
              </div>
            </div>
            <div className="bg-slate-200 py-3 px-5 rounded-xl">
              <div className="flex flex-col gap-y-2">
                <h6 className="text-secondary text-xs">Upcoming Projects</h6>
                <span className="font-bold text-primary">245</span>
              </div>
            </div>
          </div>
          <Stack
            options={{
              background: "#F2F0FF",
              height: 150,
              xAxies: {
                display: true,
              },
            }}
            data={[
              {
                legend: "level",
                color: "#51459E",
                type: "bar",
                values: [
                  {
                    value: 40,
                    label: "Jan",
                  },
                  {
                    value: 38,
                    label: "Feb",
                  },
                  {
                    value: 38,
                    label: "Mar",
                  },
                  {
                    value: 15,
                    label: "Apr",
                  },
                  {
                    value: 35,
                    label: "May",
                  },
                  {
                    value: 20,
                    label: "Jun",
                  },
                  {
                    value: 55,
                    label: "Jul",
                  },
                  {
                    value: 10,
                    label: "Aug",
                  },
                  {
                    value: 40,
                    label: "Sep",
                  },
                  {
                    value: 20,
                    label: "Okt",
                  },
                  {
                    value: 18,
                    label: "Nov",
                  },
                  {
                    value: 50,
                    label: "Des",
                  },
                ],
              },
              {
                legend: "revenue",
                color: "#F9896B",
                type: "line",
                values: [
                  {
                    value: 50,
                    label: "Jan",
                  },
                  {
                    value: 60,
                    label: "Feb",
                  },
                  {
                    value: 40,
                    label: "Mar",
                  },
                  {
                    value: 60,
                    label: "Apr",
                  },
                  {
                    value: 65,
                    label: "May",
                  },
                  {
                    value: 70,
                    label: "Jun",
                  },
                  {
                    value: 65,
                    label: "Jul",
                  },
                  {
                    value: 57,
                    label: "Aug",
                  },
                  {
                    value: 50,
                    label: "Sep",
                  },
                  {
                    value: 70,
                    label: "Okt",
                  },
                  {
                    value: 75,
                    label: "Nov",
                  },
                  {
                    value: 80,
                    label: "Des",
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="w-3/12 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1 border border-slate-100 py-4 px-5 rounded-xl">
            <h6 className="text-secondary text-xs">Total Earnings</h6>
            <span className="font-bold text-primary">$45,000</span>
          </div>
          <div className="flex flex-col gap-y-1 border border-slate-100 py-4 px-5 rounded-xl">
            <h6 className="text-secondary text-xs">Total Earnings</h6>
            <span className="font-bold text-primary">$45,000</span>
          </div>
          <div className="flex flex-col gap-y-1 border border-slate-100 py-4 px-5 rounded-xl">
            <h6 className="text-secondary text-xs">Income</h6>
            <span className="font-bold text-primary">$15,000</span>
          </div>
        </div>
      </section>
      <section className="flex flex-row gap-x-10 my-14">
        <WidgetA
          label="Total Connection"
          maxValue={5000}
          value={1120}
          icon={<User size={23} />}
          iconBgColor="bg-[#84E8F4]"
          StackValues={[
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
          ]}
        />
        <WidgetA
          label="Security"
          maxValue={5000}
          value={2140}
          icon={<ShieldCheck size={23} />}
          iconBgColor="bg-[#F9896B]"
          StackValues={[
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
          ]}
        />
        <WidgetA
          label="Total Items"
          maxValue={5000}
          value={2140}
          icon={<Newspaper size={23} />}
          iconBgColor="bg-[#51459E]"
          StackValues={[
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
          ]}
        />
      </section>
    </div>
  );
}
