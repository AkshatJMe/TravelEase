import Navbar from "@/components/admin/navbar/navbar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-[#f5f5fe] p-2">
      <Navbar />
      <section className="flex-1 flex flex-col">{children}</section>
    </section>
  );
};

export default AdminLayout;
