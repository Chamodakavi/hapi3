import NavBar from "@/components/NavBar";
import Companies from "@/components/sections/Companies";
import Hero from "@/components/sections/Hero";
import MobileSec from "@/components/sections/MobileSec";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Companies />
      <MobileSec />
    </>
  );
}
