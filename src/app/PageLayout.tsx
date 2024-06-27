"use client";
import React from "react";
import { useDisclosure } from "@nextui-org/react";
import { AuthModal } from "@/components/auth-modal";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ScrapingLoader from "@/components/loader/scraping-loader";
import { useAppStore } from "@/store";
import { usePathname } from "next/navigation";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isScraping } = useAppStore();
  const pathName = usePathname();
  return (
    <>
      {pathName.includes("/admin") ? (
        children
      ) : (
        <div className=" relative flex flex-col" id="app-container">
          <main className=" flex flex-col  relative">
            {isScraping && <ScrapingLoader />}
            <Navbar onOpen={onOpen} />
            <section className=" h-full flex-1 ">{children}</section>
            <AuthModal
              isOpen={isOpen}
              onOpen={onOpen}
              onOpenChange={onOpenChange}
            />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};

export default PageLayout;
