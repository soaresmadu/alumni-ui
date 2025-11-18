"use client";

import LiquidEther from "./LiquidEther";

export default function HomeClientPage() {
  return (
    <div className="w-full h-screen bg-[#050505] flex items-center justify-center text-[#4D494A] text-[15px]">
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {/* LiquidEther */}
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />

        {/* Conteúdo sobreposto */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          <h3 className="text-white text-[60px] -mb-2.5">ALUMNI</h3>
          <p className="text-white text-[18px]">Um novo conceito de estudo com tecnologia</p>
        </div>
      </div>
    </div>
  );
}
