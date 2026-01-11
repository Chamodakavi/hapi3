import Form from "@/components/businessRegistration/Form";
import BusinessType from "@/components/sections/BusinessType";
import Companies from "@/components/sections/Companies";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import IntegratedSuite from "@/components/sections/IntegratedSuite";
import MobileSec from "@/components/sections/MobileSec";
import NocodeSec from "@/components/sections/NocodeSec";
import Startup from "@/components/sections/Startup";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <MobileSec />
      <BusinessType />
      <Startup />
      <IntegratedSuite />
      <NocodeSec />
      <GetStarted />
    </>
  );
}
