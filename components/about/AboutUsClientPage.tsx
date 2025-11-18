"use client";

import BarraUI from "@/UI/Animation/BarraUI";
import BackgroundHomePage from "@/UI/Backgrounds/BackgroundHomePage";

export default function AboutUsClientPage() {
    return (
        <div>
            <BarraUI />

            <div className="pt-10 sm:pt-0 w-full h-auto sm:h-screen px-10 sm:px-[150px] bg-[#040003] flex flex-col items-center justify-center text-white text-[15px]">

                <h3 className="text-[50px] px-10 mb-5 self-start">About Us</h3>

                <div className="2-full h-auto flex flex-col sm:flex-row items-center justify-between">
                    <div className="w-full sm:w-[46%] sm:h-[200px] bg-[#ffffff21] flex items-center justify-center px-10 py-10 sm:py-0 text-justify rounded-[10px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec tellus eget urna varius bibendum ut eu felis. Nulla facilisi. Donec facilisis convallis magna. Morbi non nibh semper, tempus massa non, varius eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat cursus lorem ut pharetra. Aliquam sagittis suscipit felis et ullamcorper. Vivamus et mattis sapien. Aenean volutpat ac felis id euismod. Duis vitae rutrum ante.
                    </div>

                    <div className="mt-10 mb-10 sm:mb-0 sm:mt-0 sm:w-[46%] sm:h-[200px] bg-[#ffffff21] flex items-center justify-center px-10 py-10 sm:py-0 text-justify rounded-[10px]">
                        Donec justo turpis, viverra vel sapien sed, interdum venenatis ante. In malesuada cursus massa mollis vestibulum. Donec non viverra augue. Nam hendrerit ipsum laoreet, egestas quam molestie, egestas odio. Vestibulum accumsan ante auctor eros fringilla accumsan. Cras vestibulum placerat ex, quis laoreet nunc pulvinar quis. Pellentesque imperdiet in quam et mattis. Etiam sagittis, mauris et dignissim tempus, nibh tellus imperdiet sapien, vitae pharetra ipsum eros non est.
                    </div>
                </div>
            </div>
        </div>
    );
}
