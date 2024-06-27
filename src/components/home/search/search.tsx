import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";

const Search = () => {
  const router = useRouter();
  const [searchLocation, setSearchLocation] = useState("");
  const [dates, setDates] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [cities, setCities] = useState([]);

  const handleSearch = () => {
    if (searchLocation && dates) {
      router.push(`/trips?city=${searchLocation}&dates=${dates}`);
    }
  };

  const searchCities = async (searchQuery: string) => {
    const response = await fetch(
      `https://secure.geonames.org/searchJSON?q=${searchQuery}&maxRows=5&username=akshatjain&style=SHORT`
    );
    const parsed = await response.json();
    setCities(
      parsed?.geonames.map((city: { name: string }) => city.name) ?? []
    );
  };

  const activities = [
    { name: "Beach & Sailing", icon: "/home/ship.svg" },
    { name: "Mountain Trekking", icon: "/home/hiking.svg" },
    { name: "Urban Exploration", icon: "/home/trolley-bag.svg" },
    { name: "Motor Racing", icon: "/home/motor-boat.svg" },
    { name: "Safari Adventures", icon: "/home/cedar.svg" },
  ];

  return (
    <div className="h-[80vh] flex items-center justify-center relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/home.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl scale-x-100"></div>
      <div className="relative z-10 h-[50vh] w-[60vw] flex flex-col gap-6 p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
        <div className="text-center flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-white">
            Discover Your Next Adventure
          </h3>
          <h2 className="text-5xl font-extrabold text-yellow-400">
            Find the Best Tours & Activities
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 bg-white bg-opacity-30 p-4 rounded-xl shadow-lg">
          <Input
            color="primary"
            variant="bordered"
            className="text-black placeholder:text-black"
            startContent={<FaSearch />}
            value={searchLocation}
            onChange={(e) => {
              setSearchLocation(e.target.value);
              searchCities(e.target.value);
            }}
            placeholder="Enter Destination"
          />
          {cities.length > 0 && (
            <div className="absolute top-20 mt-2 w-full max-w-sm bg-white bg-opacity-90 rounded-lg shadow-lg z-20">
              <Listbox
                aria-label="Cities"
                onAction={(key) => {
                  setSearchLocation(key as string);
                  setCities([]);
                }}
              >
                {cities.map((city) => (
                  <ListboxItem key={city} color="primary">
                    {city}
                  </ListboxItem>
                ))}
              </Listbox>
            </div>
          )}
          <Input
            type="date"
            placeholder="Select Dates"
            variant="bordered"
            color="primary"
            startContent={<FaCalendarAlt />}
            value={dates}
            onChange={(e) => setDates(e.target.value)}
          />
          <Button
            size="lg"
            className="h-full"
            color="success"
            onPress={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
