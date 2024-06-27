import { apiClient } from "@/lib";
import { USER_API_ROUTES } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Featured = () => {
  const [cities, setCities] = useState<
    { name: string; image: string; trips: number }[]
  >([]);

  useEffect(() => {
    const getUniqueCities = async () => {
      try {
        const response = await apiClient.get(
          USER_API_ROUTES.GET_UNIQUE_TRIP_CITIES
        );
        setCities(response.data.cities);
      } catch (error) {
        console.log({ error });
      }
    };
    getUniqueCities();
  }, []);

  return (
    <div className="my-[10vh] h-full relative z-30 mx-10 pt-10 text-center">
      <h1 className="text-5xl font-extrabold text-green-600 mb-4">
        Top Destinations
      </h1>
      <p className="text-lg font-medium mb-10 text-gray-700">
        Discover the most popular places to stay, recommended just for you
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
        {cities.map((place) => (
          <div
            className="flex flex-col items-center bg-white border border-gray-200 p-5 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            key={place.name}
          >
            <div className="relative h-40 w-40 mb-5">
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-700">
                {place.name}
              </h3>
              <p className="text-gray-600">{place.trips} trips available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
