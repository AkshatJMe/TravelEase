"use client";
import { apiClient } from "@/lib";
import { TripType } from "@/types/trip";
import { USER_API_ROUTES, removeHtmlTags } from "@/utils";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const Trips = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchCity = searchParams.get("city");
  const [trips, setTrips] = useState<TripType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await apiClient.get(
        `${USER_API_ROUTES.GET_CITY_TRIPS}?city=${searchCity}`
      );
      setTrips(response.data.trips);
    };
    if (searchCity) getData();
  }, [searchCity]);

  return (
    <div className="container mx-auto py-10 px-6">
      <Button
        className="mb-8 flex items-center space-x-2"
        variant="shadow"
        color="primary"
        size="lg"
        onClick={() => router.push("/")}
      >
        <FaChevronLeft />
        <span>Go Back</span>
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            onClick={() => router.push(`/trips/${trip.id}`)}
          >
            {/* Image */}
            <div className="relative h-56">
              <Image
                src={trip.images[0]}
                alt="trip"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold truncate">{trip.name}</h2>
              <div className="flex flex-wrap gap-2">
                {trip.destinationDetails.map((detail, index) => (
                  <Chip
                    key={detail.name}
                    color={index % 2 === 0 ? "secondary" : "danger"}
                    variant="flat"
                  >
                    {detail.name}
                  </Chip>
                ))}
              </div>
              <p className="text-gray-700 truncate">
                {removeHtmlTags(trip.description)}
              </p>
              <div className="flex justify-between items-center text-gray-600">
                <div>{trip.days} days</div>
                <div>{trip.nights} nights</div>
              </div>
              <div className="flex justify-between items-center font-medium text-lg">
                <span>ID: {trip.id}</span>
                <span>
                  <strong>${trip.price}</strong> / person
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
