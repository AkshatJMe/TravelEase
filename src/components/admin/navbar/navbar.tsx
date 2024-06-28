"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-[#0E1428] p-4 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => router.push("/")}
          className="text-white text-lg font-bold"
        >
          LOGO...
        </button>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="text-white hover:text-gray-300"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/admin/trips")}
              className="text-white hover:text-gray-300"
            >
              Trips
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/admin/hotels")}
              className="text-white hover:text-gray-300"
            >
              Hotels
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/admin/bookings")}
              className="text-white hover:text-gray-300"
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/admin/scrape-data")}
              className="text-white hover:text-gray-300"
            >
              Scrape Data
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/admin/logout")}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
