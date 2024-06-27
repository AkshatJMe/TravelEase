import { Chip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  const data = [
    {
      title: "Effortless Flight Booking",
      description:
        "Book your flights seamlessly with real-time data, ensuring the best deals and convenient options.",
      badge: "Flights",
      badgeType: "primary",
    },
    {
      title: "Comfortable Hotel Reservations",
      description:
        "Discover ideal accommodations with real-time availability, making your stay comfortable and stress-free.",
      badge: "Hotels",
      badgeType: "secondary",
    },
    {
      title: "Personalized Trip Planning",
      description:
        "Create personalized trips with real-time information, crafting unforgettable travel experiences tailored just for you.",
      badge: "Trips",
      badgeType: "danger",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl mb-20 flex gap-10 items-center justify-center">
      <div className="hidden md:block">
        <Image src="/home/benefit.png" alt="benefit" height={400} width={400} />
      </div>
      <div className="flex flex-col gap-10 md:gap-5">
        <div>
          <h2 className="font-bold text-4xl mt-3 md:mt-0">Our Benefits</h2>
        </div>
        <div className="flex flex-col gap-8">
          {data.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3">
              <Chip
                color={
                  feature.badgeType as
                    | "danger"
                    | "default"
                    | "primary"
                    | "secondary"
                    | "success"
                    | "warning"
                }
              >
                {feature.badge}
              </Chip>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <Image src="/home/benefit.png" alt="benefit" height={300} width={300} />
      </div>
    </div>
  );
};

export default Benefits;
