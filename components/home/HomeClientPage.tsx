"use client";

import BackgroundHomePage from "@/UI/Backgrounds/BackgroundHomePage";

export default function HomeClientPage() {
  return (
    <div className="w-full h-screen bg-[#180013] flex items-center justify-center text-[#4D494A] text-[15px]">

      <BackgroundHomePage />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <h3 className="text-white text-[60px] -mb-2.5">ALUMNI</h3>
        <p className="text-white text-[18px]">Um novo conceito de estudo com tecnologia</p>
      </div>

    </div>
  );
}
