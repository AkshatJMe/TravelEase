import React from "react";
import Navbar from "@/components/admin/navbar/navbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-[#f5f5fe] flex flex-col p-2">
      <Navbar />
      <section className="flex-1 flex flex-col">
        {children}
      </section>
    </section>
  );
};

export default AdminLayout;
