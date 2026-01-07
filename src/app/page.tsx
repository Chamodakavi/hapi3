import NavBar from "@/components/NavBar";
import BusinessType from "@/components/sections/BusinessType";
import Companies from "@/components/sections/Companies";
import Hero from "@/components/sections/Hero";
import IntegratedSuite from "@/components/sections/IntegratedSuite";
import MobileSec from "@/components/sections/MobileSec";
import Startup from "@/components/sections/Startup";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Companies />
      <MobileSec />
      <BusinessType />
      <Startup />
      <IntegratedSuite />
    </>
  );
}
