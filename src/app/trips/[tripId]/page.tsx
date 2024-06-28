"use client";
import { apiClient } from "@/lib";
import { USER_API_ROUTES, removeHtmlTags } from "@/utils";

import React, { useEffect, useState } from "react";
import {
  FaCalendar,
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoPerson, IoPricetag } from "react-icons/io5";

import { Images } from "./components/images";
import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import { Iteniary } from "./components/Iteniary";
import { useAppStore } from "@/store";
import { useRouter } from "next/navigation";
import { TripType } from "@/types/trip";

const Trip = ({ params: { tripId } }: { params: { tripId: string } }) => {
  const router = useRouter();
  const { userInfo } = useAppStore();
  const [tripData, setTripData] = useState<TripType | undefined>(undefined);

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await apiClient.get(
          `${USER_API_ROUTES.TRIPDATA}?id=${tripId}`
        );
        setTripData(data.data);
      } catch (err) {
        console.log({ err });
      }
    };

    getData();
  }, [tripId]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value
      ? new Date(event.target.value)
      : new Date();
    setDate(newDate);
  };

  const bookTrip = async () => {
    const isoDate = date.toISOString();

    const response = await apiClient.post(USER_API_ROUTES.CREATE_BOOKING, {
      bookingId: tripData?.id,
      bookingType: "trips",
      userId: userInfo?.id,
      taxes: 3300,
      date: isoDate,
    });
    if (response.data.client_secret) {
      router.push(`/checkout?client_secret=${response.data.client_secret}`);
    }
  };

  return (
    <div>
      {tripData && (
        <>
          <Images images={tripData?.images} />
          <div className="container mx-auto my-10 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
              <div className="bg-purple-100 px-6 py-8 rounded-lg border border-purple-200 flex flex-col gap-8">
                <div className="border-b-2 border-dotted border-purple-400 flex justify-between pb-5">
                  <h1 className="text-4xl font-bold text-purple-800">
                    {tripData?.name}
                  </h1>
                  <ul className="flex gap-4 text-2xl">
                    <li className="cursor-pointer text-green-500 bg-green-100 p-3 rounded-full">
                      <FaFacebook />
                    </li>
                    <li className="cursor-pointer text-green-500 bg-green-100 p-3 rounded-full">
                      <FaInstagram />
                    </li>
                    <li className="cursor-pointer text-green-500 bg-green-100 p-3 rounded-full">
                      <FaTwitter />
                    </li>
                    <li className="cursor-pointer text-green-500 bg-green-100 p-3 rounded-full">
                      <FaWhatsapp />
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="grid grid-cols-2 gap-5">
                    <li>
                      <span>Trip ID: </span>
                      <span className="text-purple-500">{tripData.id}</span>
                    </li>
                    <li>
                      <span>Duration: </span>
                      <span className="text-purple-500">
                        {tripData.days} Days, {tripData.nights} Nights
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <span>Locations Covered: </span>
                      <ul className="flex flex-col gap-3 text-purple-500">
                        {tripData?.destinationItinerary.map((destination) => (
                          <li key={destination.place}>
                            <span>{destination.place}</span>
                            <span>&nbsp;{destination.totalNights} nights</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-100 px-6 py-8 rounded-lg border border-purple-200 mt-8">
                <h3 className="text-2xl font-bold text-purple-800">Overview</h3>
                <p className="mt-4">{removeHtmlTags(tripData?.description)}</p>
              </div>
              <div className="bg-purple-100 px-6 py-8 rounded-lg border border-purple-200 mt-8">
                <h3 className="text-2xl font-bold text-purple-800">
                  Tour Highlights
                </h3>
                <ul className="grid grid-cols-2 gap-5 mt-4">
                  {tripData?.themes.map((theme) => (
                    <li key={theme} className="flex items-center gap-2">
                      <span className="text-green-500 bg-green-100 p-2 rounded-full">
                        <FaCheck />
                      </span>
                      <span>{theme}</span>
                    </li>
                  ))}
                  {tripData?.inclusions.map((theme) => (
                    <li key={theme} className="flex items-center gap-2">
                      <span className="text-green-500 bg-green-100 p-2 rounded-full">
                        <FaCheck />
                      </span>
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-100 px-6 py-8 rounded-lg border border-purple-200 mt-8">
                <h3 className="text-2xl font-bold text-purple-800">
                  Itinerary
                </h3>
                <div className="mt-4">
                  <Iteniary data={tripData.detailedIntineary} />
                </div>
              </div>
              <div className="bg-purple-100 px-6 py-8 rounded-lg border border-purple-200 mt-8">
                <h3 className="text-2xl font-bold text-purple-800">
                  Location Overview
                </h3>
                <div className="mt-4">
                  <Tabs variant="bordered" color="primary">
                    {tripData.destinationDetails.map((city) => (
                      <Tab key={city.name} title={city.name}>
                        <div className="flex gap-5 mt-4">
                          <div className="relative h-48 w-1/2">
                            <Image
                              src={city.image}
                              alt={city.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <p className="flex-1 text-purple-700">
                            {city.description}
                          </p>
                        </div>
                      </Tab>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 h-max">
              <div className="flex flex-col gap-6 text-purple-800">
                <h1 className="font-bold text-2xl">Price</h1>
                <div className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-2">
                    <IoPricetag className="text-3xl text-green-500" />
                    <span>From</span>
                  </div>
                  <span className="text-4xl font-bold">₹{tripData.price}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Input
                  endContent={<FaCalendar />}
                  placeholder="Check-in Check-out"
                  type="date"
                  onChange={handleDateChange}
                />
                <Input
                  endContent={<IoPerson />}
                  placeholder="Guests"
                  type="number"
                />
              </div>
              <ul className="flex flex-col gap-2 text-lg">
                <li className="flex justify-between">
                  <span>Base Price</span>
                  <span>₹{tripData.price}</span>
                </li>
                <li className="flex justify-between">
                  <span>State Price</span>
                  <span>₹800</span>
                </li>
                <li className="flex justify-between">
                  <span>Night Charge</span>
                  <span>₹500</span>
                </li>
                <li className="flex justify-between">
                  <span>Convenience Fee</span>
                  <span>₹2000</span>
                </li>
                <li className="flex justify-between">
                  <span>Total</span>
                  <span>₹{tripData.price + 3300}</span>
                </li>
              </ul>
              <Button
                color="primary"
                size="lg"
                className="bg-green-500 text-white rounded-full mt-4"
                onClick={() => {
                  userInfo && bookTrip();
                }}
              >
                {userInfo ? "Book Trip" : "Login to Book Trip"}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Trip;
