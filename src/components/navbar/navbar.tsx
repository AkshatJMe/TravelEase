"use client";
import React from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  AvatarIcon,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppStore } from "@/store";

const Navbar = ({ onOpen }: { onOpen: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { userInfo } = useAppStore();
  const routesWithImages = ["/", "/search-flights", "/search-hotels"];

  return (
    <NextNavbar
      isBordered
      className="min-h-[10vh] bg-gradient-to-r from-purple-600 to-blue-500 text-white relative shadow-lg"
    >
      {!routesWithImages.includes(pathname) && (
        <>
          <div className="fixed left-0 top-0 h-[10vh] w-[100vw] overflow-hidden z-0">
            <div className="h-[70vh] w-[100vw] absolute z-10 top-0 left-0">
              <Image
                src="/home/home-bg.png"
                layout="fill"
                objectFit="cover"
                alt="Search"
              />
            </div>
          </div>
          <div
            className="fixed left-0 top-0 h-[10vh] w-[100vw] overflow-hidden z-0"
            style={{
              backdropFilter: "blur(10px) saturate(150%)",
              WebkitBackdropFilter: "blur(10px) saturate(150%)", // for Safari support
            }}
          ></div>
        </>
      )}
      <div className="z-10 w-full flex items-center px-4">
        <NavbarBrand>
          <div
            className="cursor-pointer flex items-center"
            onClick={() => router.push("/")}
          >
            <span className="text-2xl font-bold">
              <button onClick={() => router.push("/")} className="text-white">
                Logo..
              </button>
            </span>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6 mx-auto">
          <NavbarItem isActive>
            <Link
              href="/"
              aria-current="page"
              className={`${
                pathname === "/" ? "text-yellow-400" : "text-white"
              } text-lg hover:text-yellow-400 transition-colors`}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/search-flights"
              className={`${
                pathname.includes("flights") ? "text-yellow-400" : "text-white"
              } text-lg hover:text-yellow-400 transition-colors`}
            >
              Flights
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/search-hotels"
              className={`${
                pathname.includes("hotels") ? "text-yellow-400" : "text-white"
              } text-lg hover:text-yellow-400 transition-colors`}
            >
              Hotels
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/contact"
              className={`${
                pathname.includes("contact") ? "text-yellow-400" : "text-white"
              } text-lg hover:text-yellow-400 transition-colors`}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {!userInfo && (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button
                  onPress={onOpen}
                  color="success"
                  className="text-white font-semibold"
                >
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  onPress={onOpen}
                  color="warning"
                  className="text-white font-semibold"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
          {userInfo && (
            <>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform hover:scale-110"
                    icon={<AvatarIcon />}
                    classNames={{
                      base: "bg-gradient-to-br from-[#ff578f] to-[#945bff]",
                      icon: "text-black/80",
                    }}
                    size="md"
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Profile Actions"
                  variant="flat"
                  onAction={(key) => router.push(key as string)}
                >
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{userInfo.email}</p>
                  </DropdownItem>
                  <DropdownItem key="/my-account">My Account</DropdownItem>
                  <DropdownItem key="/my-bookings">My Bookings</DropdownItem>
                  <DropdownItem key="/my-wishlists">Wishlist</DropdownItem>
                  <DropdownItem key="/logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
        </NavbarContent>
      </div>
    </NextNavbar>
  );
};

export default Navbar;
