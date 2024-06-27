"use client";

import { Benefits } from "@/components/home/benefits";
import { Featured } from "@/components/home/featured";
import { Search } from "@/components/home/search";

export default function Home() {
  return (
    <div>
      <Search />
      <Featured />
      <Benefits />
    </div>
  );
}
