"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function QuickActions() {
  const cardData = [
    {
      title: "Total NFTs Minted",
      items: [
        { label: "", value: "120 | 1000" },
      
      ],
    },
    {
      title: "Total Users",
      items: [
        { label: "", value: "456" },
        { label: "Connected wallet users", value: "" },
      ],
    },
    {
      title: "Active Fundraisers",
      items: [
        { label: "", value: "3" },
        { label: "Currently running fundraiser", value: "" },
      ],
    },
  ];

  return (
    <section className="w-full  py-6 rounded-xl text-white shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">Quick Actions</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-[20px] bg-white text-black p-4  relative overflow-hidden">
      <h3 className="mb-2 text-sm font-[inter] font-medium">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="font-medium text-[12px] font-[inter] ">
          {item.label}{" "}
          <span className="font-medium text-lg ">{item.value}</span>
        </p>
      ))}
      <CardBackground />
    </div>
  );
}

function CardBackground() {
  return (
    <div className="absolute bottom-0 right-0 o" aria-hidden="true">
      <Image src={"/assets/icons/actionsbg.svg"} height={190} width={166} />
    </div>
  );
}
